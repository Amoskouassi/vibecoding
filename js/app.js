/* Formation Vibecoding — logique applicative (SPA sans framework) */
(function () {
    "use strict";

    var COURSES = window.COURSES || [];
    var FINAL = window.FINAL || { project: { consigne: [], checklist: [] }, quiz: { passScore: 8, questions: [] } };
    var LS_KEY = "vibecoding_state_v1";
    var LS_ACCOUNTS = "vibecoding_accounts_v1";
    var KEYS = window.KEY_LABELS || ["A", "B", "C", "D", "E"];

    /* ---------------- État ---------------- */
    var state = {
        nickname: "",
        email: "",
        freeMode: false,
        dark: false,
        modules: COURSES.map(function () {
            return {
                started: false,
                read: [],
                checklist: [],
                uploads: {},
                codeUpload: {},
                quiz: { done: false, passed: false, score: 0, total: 0 },
                trace: { text: "", url: "", saved: false }
            };
        }),
        final: {
            started: false,
            checklist: [],
            link: "",
            certId: "",
            quiz: { done: false, passed: false, score: 0, total: 0 }
        }
    };
    var accounts = {};
    var appEl = document.getElementById("app");
    var toastEl = document.getElementById("toast");

    function $(id) { return document.getElementById(id); }
    function esc(s) {
        return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
            .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    /* ---------------- Persistance ---------------- */
    function save() {
        try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
    }
    function load() {
        try {
            var raw = localStorage.getItem(LS_KEY);
            if (raw) {
                var s = JSON.parse(raw);
                if (s.modules && s.modules.length === COURSES.length) {
                    state.nickname = s.nickname || "";
                    state.email = s.email || "";
                    state.freeMode = !!s.freeMode;
                    state.dark = !!s.dark;
                    COURSES.forEach(function (_, i) {
                        var p = s.modules[i] || {};
                        var c = state.modules[i];
                        c.started = !!p.started;
                        c.read = p.read || [];
                        c.checklist = p.checklist || [];
                        c.uploads = p.uploads || {};
                        c.codeUpload = p.codeUpload || {};
                        c.quiz = Object.assign(c.quiz, p.quiz || {});
                        c.trace = Object.assign(c.trace, p.trace || {});
                    });
                    var f = s.final || {};
                    state.final = Object.assign(state.final, {
                        started: !!f.started,
                        checklist: f.checklist || [],
                        link: f.link || "",
                        certId: f.certId || "",
                        quiz: Object.assign(state.final.quiz, f.quiz || {})
                    });
                }
            }
            var a = localStorage.getItem(LS_ACCOUNTS);
            if (a) accounts = JSON.parse(a);
        } catch (e) {}
        if (state.dark) applyDark(true);
    }
    function saveAccounts() {
        try { localStorage.setItem(LS_ACCOUNTS, JSON.stringify(accounts)); } catch (e) {}
    }

    /* ---------------- Helpers métier ---------------- */
    function mod(i) { return state.modules[i]; }
    function lib(i) { return COURSES[i]; }
    function pct(i) {
        var c = mod(i), m = lib(i);
        var read = m.lessons.length ? c.read.length / m.lessons.length : 0;
        var chk = m.exercise.checklist.length ? c.checklist.length / m.exercise.checklist.length : 0;
        var quiz = c.quiz.done ? 1 : 0;
        return Math.round((read * 0.3 + chk * 0.3 + quiz * 0.4) * 100);
    }
    function done(i) { return mod(i).quiz.passed; }
    function locked(i) {
        if (state.freeMode || i === 0) return false;
        return !done(i - 1);
    }
    function globalPct() {
        var sum = 0;
        COURSES.forEach(function (_, i) { sum += pct(i); });
        return Math.round(sum / COURSES.length);
    }
    function modulesDone() {
        var n = 0;
        COURSES.forEach(function (_, i) { if (done(i)) n++; });
        return n;
    }
    function firstIncomplete() {
        for (var i = 0; i < COURSES.length; i++) if (!done(i)) return i;
        return -1;
    }
    function resumeRoute() {
        var i = firstIncomplete();
        if (i === -1) {
            if (!state.final.quiz.passed) return "#/final";
            return "#/certificate";
        }
        var c = mod(i), m = lib(i);
        if (c.read.length < m.lessons.length) return "#/module/" + (i + 1) + "/lessons";
        if (c.checklist.length < m.exercise.checklist.length) return "#/module/" + (i + 1) + "/exercise";
        return "#/module/" + (i + 1) + "/quiz";
    }
    function profileName() { return state.nickname || "Apprenant"; }
    function hasProgress() {
        if (state.final.started || state.final.quiz.done) return true;
        for (var i = 0; i < COURSES.length; i++) {
            var c = mod(i);
            if (c.started || c.read.length || c.checklist.length || c.quiz.done) return true;
        }
        return false;
    }

    /* ---------------- Helpers DOM ---------------- */
    function node(tag, cls, txt) {
        var el = document.createElement(tag);
        if (cls) el.className = cls;
        if (txt != null && txt !== "") el.textContent = txt;
        return el;
    }
    function btn(label, cls, onclick) {
        var b = node("button", "btn " + (cls || ""));
        b.type = "button";
        b.textContent = label;
        if (onclick) b.addEventListener("click", onclick);
        return b;
    }
    function navBtn(label, cls, href) {
        var b = node("button", "btn " + (cls || ""));
        b.type = "button";
        b.textContent = label;
        b.addEventListener("click", function () { location.hash = href; });
        return b;
    }
    function toastMsg(m) {
        toastEl.textContent = m;
        toastEl.classList.add("show");
        clearTimeout(toastEl._t);
        toastEl._t = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
    }
    function debounce(fn, ms) {
        var t;
        return function () { var a = arguments; var c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms); };
    }

    /* Rendering des blocs pédagogiques */
    function addTextP(parent, text) {
        String(text).split("\n").forEach(function (l) {
            var p = node("p");
            p.textContent = l;
            parent.appendChild(p);
        });
    }
    function codeBlock(blk) {
        var wrap = node("div", "code-wrap");
        var head = node("div", "code-head");
        var title = node("span", "", blk.title || blk.lang || "");
        var copy = node("button", "code-copy", "Copier");
        copy.type = "button";
        copy.addEventListener("click", function () {
            if (navigator.clipboard) navigator.clipboard.writeText(blk.v);
            toastMsg("Code copié");
        });
        head.appendChild(title);
        head.appendChild(copy);
        var pre = node("pre");
        var code = node("code");
        code.textContent = blk.v;
        pre.appendChild(code);
        wrap.appendChild(head);
        wrap.appendChild(pre);
        return wrap;
    }
    function renderTable(blk) {
        var table = node("table", "data-table");
        var thead = node("thead");
        var tr = node("tr");
        blk.head.forEach(function (h) { tr.appendChild(node("th", "", h)); });
        thead.appendChild(tr);
        table.appendChild(thead);
        var tbody = node("tbody");
        blk.rows.forEach(function (r) {
            var row = node("tr");
            r.forEach(function (cell) { var td = node("td"); addTextP(td, cell); row.appendChild(td); });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        return table;
    }
    function renderBlocks(blocks, container) {
        (blocks || []).forEach(function (blk) {
            var el;
            switch (blk.t) {
                case "h": el = node("h3", "cb-h", blk.v); break;
                case "ul":
                    el = node("ul");
                    blk.v.forEach(function (it) { el.appendChild(node("li", "", it)); });
                    break;
                case "ol":
                    el = node("ol");
                    blk.v.forEach(function (it) { el.appendChild(node("li", "", it)); });
                    break;
                case "code": el = codeBlock(blk); break;
                case "table": el = renderTable(blk); break;
                case "links": {
                    var list = node("ul", "link-list");
                    blk.v.forEach(function (l) {
                        var li = node("li");
                        var a = node("a", "link-item");
                        a.href = l.url;
                        a.target = "_blank";
                        a.rel = "noopener";
                        a.textContent = l.label;
                        li.appendChild(a);
                        if (l.hint) li.appendChild(node("span", "link-hint", " — " + l.hint));
                        list.appendChild(li);
                    });
                    el = list;
                    break;
                }
                case "tip": {
                    el = node("div", "callout tip");
                    el.appendChild(node("span", "co-label", "Astuce"));
                    addTextP(el, blk.v);
                    break;
                }
                case "trap": {
                    el = node("div", "callout trap");
                    el.appendChild(node("span", "co-label", "Piège fréquent"));
                    addTextP(el, blk.v);
                    break;
                }
                default:
                    el = node("p", "", blk.v);
            }
            el.classList && el.classList.add("content-block");
            container.appendChild(el);
        });
    }

    /* ---------------- Router ---------------- */
    window.addEventListener("hashchange", router);
    function bindControls() {
        bindTheme();
        bindBurger();
        updateNavAuth();
    }
    document.addEventListener("DOMContentLoaded", function () {
        load();
        bindControls();
        init();
        router();
    });

    function router() {
        appEl.innerHTML = "";
        window.scrollTo(0, 0);
        updateNavAuth();
        var hash = location.hash || "#/";

        var lessonM = hash.match(/^#\/module\/(\d+)\/lesson\/(\d+)/);
        if (lessonM) { lessonView(parseInt(lessonM[1], 10) - 1, parseInt(lessonM[2], 10)); setNavActive("dashboard"); return; }

        var mm = hash.match(/^#\/module\/(\d+)(\/(\w+))?/);
        if (mm) { moduleView(parseInt(mm[1], 10) - 1, mm[3] || "lessons"); setNavActive("dashboard"); return; }

        var fm = hash.match(/^#\/final(\/(\w+))?/);
        if (fm) { finalView(fm[2] || "project"); setNavActive("final"); return; }

        switch (hash) {
            case "#/auth": authView(); setNavActive(""); break;
            case "#/dashboard": dashboard(); setNavActive("dashboard"); break;
            case "#/certificate": certificateView(); setNavActive("final"); break;
            case "#/params": paramsView(); setNavActive("params"); break;
            default: home(); setNavActive("home");
        }
        updatePersist();
    }
    function setNavActive(nav) {
        document.querySelectorAll("[data-nav]").forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("data-nav") === nav);
        });
    }
    function updateNavAuth() {
        var el = $("navAuth");
        if (!el) return;
        el.innerHTML = "";
        var a = node("a", "nav-auth-link");
        a.href = "#/auth";
        a.style.fontWeight = "700";
        a.textContent = state.email ? "Bonjour, " + profileName().split(" ")[0] : "Se connecter";
        el.appendChild(a);
    }
    $("navAuth") && (window._navAuth = true);

    function el(tag, cls, txt) { return node(tag, cls, txt); }

    /* ---------------- Header / barre ---------------- */
    function bindTheme() {
        if (!$("themeToggle")) return;
        $("themeToggle").addEventListener("click", function () {
            state.dark = !state.dark;
            applyDark(state.dark);
            save();
        });
    }
    function applyDark(dark) {
        document.body.classList.toggle("dark", dark);
        var t = $("themeToggle");
        if (t) t.textContent = dark ? "☾" : "◐";
    }
    function bindBurger() {
        if (!$("navBurger")) return;
        $("navBurger").addEventListener("click", function () {
            var mm = $("mobileMenu");
            var open = mm.hasAttribute("hidden");
            mm.hidden = !open;
            this.setAttribute("aria-expanded", open ? "true" : "false");
        });
        if ($("mobileMenu"))
            $("mobileMenu").addEventListener("click", function (e) {
                if (e.target.tagName === "A") $("mobileMenu").hidden = true;
            });
    }
    function init() {
        applyDark(state.dark);
    }
    function updatePersist() {
        var f = $("persistFill"), p = $("persistPct");
        if (f && p) { f.style.width = globalPct() + "%"; p.textContent = globalPct() + "%"; }
    }

    /* ---------------- Accueil ---------------- */
    function home() {
        var hero = node("section", "hero");
        var heroGrid = node("div", "container hero-grid");

        var left = node("div");
        var h1 = node("h1");
        h1.innerHTML = "De l'idée au site en ligne.<br>Le web à votre portée.";
        left.appendChild(h1);
        left.appendChild(node("p", "lead", "Formation Vibecoding · 5 modules interactifs"));
        left.appendChild(node("p", "sub", "Concevez et codez un site web avec l'IA, sans aucune expérience préalable. Cours, QCM, exercices de code à téléverser, projet + quiz final et certificat à la clé."));
        var ctas = node("div", "hero-cta");
        if (state.email) {
            ctas.appendChild(navBtn("Reprendre où j'en étais", "btn-primary", resumeRoute()));
            ctas.appendChild(navBtn("Voir le programme", "btn-ghost", "#/dashboard"));
        } else if (hasProgress()) {
            ctas.appendChild(navBtn("Reprendre où j'en étais", "btn-primary", resumeRoute()));
            ctas.appendChild(navBtn("Créer mon compte", "btn-ghost", "#/auth"));
            ctas.appendChild(navBtn("Voir le programme", "btn-ghost", "#/dashboard"));
        } else {
            ctas.appendChild(navBtn("Créer mon compte", "btn-primary", "#/auth"));
            ctas.appendChild(navBtn("Voir le programme", "btn-ghost", "#/dashboard"));
        }
        var trust = node("div", "hero-actions");
        trust.appendChild(node("span", "message-chip", "5 modules · QCM interactifs · exercices de code · certificat"));
        left.appendChild(ctas);
        left.appendChild(trust);

        var art = node("div", "hero-art");
        var miniHeading = node("div", "l-title", "Le parcours");
        art.appendChild(miniHeading);
        var pl = node("div", "path-mini");
        COURSES.forEach(function (m, i) {
            var st = node("div", "step" + (done(i) ? " done" : ""));
            st.appendChild(node("span", "n", String(i + 1)));
            var inner = node("div");
            inner.appendChild(node("div", "l-title", m.title));
            inner.appendChild(node("div", "module-tag", m.durée));
            st.appendChild(inner);
            pl.appendChild(st);
        });
        art.appendChild(pl);
        heroGrid.appendChild(left);
        heroGrid.appendChild(art);
        hero.appendChild(heroGrid);
        appEl.appendChild(hero);

        var sec = node("section", "section");
        var cont = node("div", "container");
        cont.appendChild(node("h2", "section-title", "Le programme"));
        cont.appendChild(node("p", "section-sub", "Un parcours progressif : chaque module valide le suivant via son QCM, pour vous emmener de zéro jusqu'au vibecoding."));
        cont.appendChild(moduleList());
        sec.appendChild(cont);
        appEl.appendChild(sec);
    }

    /* ---------------- Authentification ---------------- */
    function authView() {
        if (state.email) { location.hash = "#/dashboard"; return; }
        var wrap = node("div", "auth-wrap");
        var card = node("div", "auth-card");
        var isLogin = location.hash.indexOf("login") >= 0;
        card.appendChild(node("h2", "module-title", isLogin ? "Connexion" : "Créer mon compte"));

        var form = node("form", "", null);
        form.onsubmit = function (e) { e.preventDefault(); };

        var nameField = null;
        if (!isLogin) {
            var nameF = node("div", "field", null);
            var nl = node("label", "", "Votre nom (affiché sur le certificat)");
            nl.htmlFor = "inpName";
            var ni = nodeInp("inpName", "text", "Prénom + Nom");
            nameF.appendChild(nl); nameF.appendChild(ni);
            form.appendChild(nameF);
            nameField = ni;
        }
        form.appendChild(field("email", "Adresse email"));
        form.appendChild(field("pass", "Mot de passe"));
        var err = node("div", "err");
        err.style.display = "none";
        form.appendChild(err);

        var submitBtn = btn(isLogin ? "Se connecter" : "Créer mon compte", "btn-primary btn-block", function () {
            var email = $("email").value.trim();
            var pass = $("pass").value;
            var name = isLogin ? "" : ($("inpName") ? $("inpName").value.trim() : "");
            if (!email || !pass) { showAuthErr("Remplissez tous les champs."); return; }
            if (isLogin) {
                var acc = accounts[email];
                if (!acc || acc.pass !== hashPass(pass)) { showAuthErr("Email ou mot de passe incorrect."); return; }
                state.nickname = acc.name; state.email = email;
            } else {
                if (!name) { showAuthErr("Indiquez votre nom."); return; }
                if (accounts[email]) { showAuthErr("Un compte existe déjà avec cet email."); return; }
                accounts[email] = { name: name, pass: hashPass(pass) };
                saveAccounts();
                state.nickname = name; state.email = email;
            }
            save();
            toastMsg("Bienvenue !");
            location.hash = "#/dashboard";
        });
        form.appendChild(submitBtn);
        card.appendChild(form);

        var sw = node("p", "switch-auth");
        sw.innerHTML = isLogin
            ? 'Pas encore de compte ? <a href="#/auth/signup">Créer mon compte</a>'
            : 'Déjà inscrit ? <a href="#/auth/login">Se connecter</a>';
        card.appendChild(sw);
        card.appendChild(node("p", "trace-note", "Démo V1 : les comptes sont stockés localement dans ce navigateur, ainsi que votre progression."));
        wrap.appendChild(card);
        appEl.appendChild(wrap);
        if (state.nickname === "") { state.nickname = ""; }

        function authWrap() { return node("div", "auth-wrap"); }
        function is() { return isLogin; }

        function field(id, label) {
            var f = node("div", "field");
            var l = node("label", "", label);
            l.htmlFor = id;
            var inp = document.createElement("input");
            inp.id = id;
            inp.type = id.indexOf("pass") >= 0 ? "password" : "email";
            inp.required = true;
            f.appendChild(l); f.appendChild(inp);
            return f;
        }
        function nodeInp(id, type, placeholder) {
            var inp = document.createElement("input");
            inp.id = id; inp.type = type; inp.placeholder = placeholder || "";
            return inp;
        }
    }
    function showAuthErr(msg) {
        var errEl = document.querySelector("#app .err");
        if (errEl) { errEl.textContent = msg; errEl.style.display = "block"; }
    }
    function authWrap() {}
    function hashPass(str) {
        var h = 5381;
        for (var i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) & 0xffffffff;
        var out = (h >>> 0).toString(16);
        return out + "_" + str.length;
    }
    function logout() {
        state.email = ""; state.nickname = "";
        save();
        location.hash = "#/";
    }
    function authRedirect(a) { a; }

    /* ------------------------ Module wrapper ------------------------ */
    function moduleView(i, tab) {
        if (i < 0 || i >= COURSES.length) { location.hash = "#/dashboard"; return; }
        var m = COURSES[i];
        if (locked(i)) { lockedView(i, m); return; }
        mod(i).started = true; save();
        appEl.appendChild(moduleHead(i, tab));
        if (tab === "exercise") exerciseTab(i);
        else if (tab === "quiz") quizTab(i);
        else lessonsTab(i);
        updatePersist();
    }
    function moduleHead(i, tab) {
        var h = node("section", "module-head");
        var cont = node("div", "container");
        var crumb = node("div", "crumb");
        crumb.innerHTML = '<a href="#/dashboard">Tableau de bord</a> · Module ' + (i + 1);
        cont.appendChild(crumb);
        cont.appendChild(node("h1", "module-title", COURSES[i].emoji + " " + COURSES[i].title));
        var tags = node("div", "tags");
        tags.appendChild(node("span", "tag", "Durée : " + COURSES[i].durée));
        tags.appendChild(node("span", "tag", "Prérequis : " + COURSES[i].prerequis));
        cont.appendChild(tags);
        var tabs = node("div", "tabs");
        [["lessons", "Cours"], ["exercise", "Exercice"], ["quiz", "QCM"]].forEach(function (t) {
            var b = node("button", "tab" + (t[0] === tab ? " active" : ""), t[1]);
            b.addEventListener("click", function () { location.hash = "#/module/" + (i + 1) + "/" + t[0]; });
            tabs.appendChild(b);
        });
        cont.appendChild(tabs);
        h.appendChild(cont);
        return h;
    }

    function lessonsTab(i) {
        var m = COURSES[i];
        var sec = node("section");
        var cont = node("div", "container");
        var obj = node("div", "panel");
        obj.innerHTML = "<h2>Objectifs</h2>";
        var ul = node("ul", "obj-list");
        m.objectifs.forEach(function (o) { ul.appendChild(node("li", "", o)); });
        obj.appendChild(ul);
        cont.appendChild(obj);

        cont.appendChild(node("h2", "section-title", "Cours"));
        var list = node("div", "lesson-list");
        m.lessons.forEach(function (l, j) {
            var item = node("div", "lesson-item");
            item.appendChild(node("span", "lnum", l.id));
            var body = node("div");
            body.appendChild(node("div", "l-title", l.title));
            body.appendChild(node("div", "l-meta", mod(i).read.indexOf(j) >= 0 ? "Lu ✓" : "Non lu"));
            item.appendChild(body);
            item.appendChild(node("span", "l-done", mod(i).read.indexOf(j) >= 0 ? "✓" : ""));
            item.addEventListener("click", function () { location.hash = "#/module/" + (i + 1) + "/lesson/" + j; });
            list.appendChild(item);
        });
        cont.appendChild(list);
        cont.appendChild(btn("Passer à l'exercice", "btn-primary", function () { location.hash = "#/module/" + (i + 1) + "/exercise"; }));
        sec.appendChild(cont);
        appEl.appendChild(sec);
    }

    function lessonView(i, j) {
        var m = COURSES[i];
        if (!m.lessons[j]) { location.hash = "#/module/" + (i + 1) + "/lessons"; return; }
        if (mod(i).read.indexOf(j) === -1) { mod(i).read.push(j); save(); }
        var sec = node("section");
        var cont = node("div", "container");
        var crumb = node("div", "crumb");
        crumb.innerHTML = '<a href="#/module/' + (i + 1) + '/lessons">Module ' + (i + 1) + '</a> · ' + esc(m.title);
        cont.appendChild(crumb);
        cont.appendChild(node("h1", "lesson-title", "Section " + m.lessons[j].id + " — " + m.lessons[j].title));
        var body = node("div", "lesson-content");
        renderBlocks(m.lessons[j].blocks, body);
        cont.appendChild(body);
        var nav = node("div", "lesson-nav");
        nav.appendChild(btn("← Retour", "btn-ghost", function () { location.hash = "#/module/" + (i + 1) + "/lessons"; }));
        nav.appendChild(btn(j + 1 < m.lessons.length ? "Continuer →" : "Exercice →", "btn-primary", function () {
            location.hash = j + 1 < m.lessons.length ? "#/module/" + (i + 1) + "/lesson/" + (j + 1) : "#/module/" + (i + 1) + "/exercise";
        }));
        cont.appendChild(nav);
        sec.appendChild(cont);
        appEl.appendChild(sec);
        updatePersist();
    }

    /* ---------------- Exercice ---------------- */
    function exerciseTab(i) {
        var m = COURSES[i];
        var sec = node("section");
        var cont = node("div", "container exo-body");
        cont.appendChild(node("h2", "exo-head", "Exercice pratique"));
        renderBlocks(m.exercise.intro, cont);
        var cons = node("div", "panel");
        var ch = node("h3", "", "Consigne");
        cons.appendChild(ch);
        if (m.exercise.consigne.t === "ol") {
            var ol = node("ol");
            m.exercise.consigne.v.forEach(function (it) { ol.appendChild(node("li", "", it)); });
            cons.appendChild(ol);
        } else {
            var ul = node("ul");
            m.exercise.consigne.v.forEach(function (it) { ul.appendChild(node("li", "", it)); });
            cons.appendChild(ul);
        }
        cont.appendChild(cons);
        if (m.hasSandbox) {
            cont.appendChild(node("h3", "section-title", "🔧 " + m.sandbox.label));
            cont.appendChild(sandbox(m.sandbox));
        }
        if (m.exercise.codeUpload) {
            cont.appendChild(node("h3", "section-title", "🖥️ Votre code (téléversé)"));
            cont.appendChild(codeUploadArea(i));
        }
        cont.appendChild(node("h3", "", "Ma checklist d'auto-évaluation"));
        var cl = node("div", "checklist");
        m.exercise.checklist.forEach(function (txt, k) {
            var lab = node("label", "check-item");
            if (mod(i).checklist.indexOf(k) !== -1) lab.classList.add("checked");
            var inp = document.createElement("input");
            inp.type = "checkbox";
            inp.className = "exo-check";
            inp.dataset.index = k;
            inp.checked = mod(i).checklist.indexOf(k) !== -1;
            inp.addEventListener("change", function () {
                var idx = mod(i).checklist.indexOf(k);
                if (inp.checked) { if (idx === -1) mod(i).checklist.push(k); }
                else { if (idx !== -1) mod(i).checklist.splice(idx, 1); }
                lab.classList.toggle("checked", inp.checked);
                save(); updatePersist();
            });
            lab.appendChild(inp);
            lab.appendChild(node("span", "txt", txt));
            cl.appendChild(lab);
        });
        cont.appendChild(cl);
        if (m.exercise.uploads) cont.appendChild(uploadsArea(i));
        cont.appendChild(deposit(i));
        var nav = node("div", "lesson-nav");
        nav.appendChild(btn("←  Les leçons", "btn-ghost", function () { location.hash = "#/module/" + (i + 1) + "/lessons"; }));
        nav.appendChild(btn("Passer au QCM →", "btn-primary", function () { location.hash = "#/module/" + (i + 1) + "/quiz"; }));
        cont.appendChild(nav);
        sec.appendChild(cont);
        appEl.appendChild(sec);
    }

    function deposit(i) {
        var c = mod(i);
        var box = node("div", "deposit");
        box.appendChild(node("h3", "", "📦 Ma trace de travail"));
        box.appendChild(node("p", "trace-note", "Optionnel — gardez une trace de votre réalisation (texte, code, lien ou capture). Enregistré localement."));
        var ta = document.createElement("textarea");
        ta.placeholder = "Collez ici votre texte, votre code, ou résumez votre travail…";
        ta.value = c.trace.text || "";
        ta.addEventListener("input", debounce(function () { c.trace.text = ta.value; c.trace.saved = true; save(); }, 400));
        var url = document.createElement("input");
        url.type = "url";
        url.placeholder = "Lien vers votre réalisation (optionnel)…";
        url.value = c.trace.url || "";
        url.addEventListener("input", debounce(function () { c.trace.url = url.value; c.trace.saved = true; save(); }, 400));
        box.appendChild(node("label", "", "Texte / code"));
        box.appendChild(ta);
        box.appendChild(node("label", "", "Lien"));
        box.appendChild(url);
        return box;
    }

    function uploadsArea(i) {
        var m = lib(i);
        var box = node("div", "deposit uploads-area");
        box.appendChild(node("h3", "", "📎 Mes maquettes (téléversées)"));
        box.appendChild(node("p", "trace-note", "Téléversez les images de votre travail. Elles sont enregistrées localement sur votre appareil."));
        m.exercise.uploads.forEach(function (cfg) {
            var id = cfg.id;
            var c = mod(i);
            var field = node("div", "upload-field");
            var lab = node("label", "", cfg.label);
            var inp = document.createElement("input");
            inp.type = "file";
            inp.accept = "image/*";
            inp.className = "upload-input";
            inp.addEventListener("change", function () {
                var file = inp.files && inp.files[0];
                if (!file) return;
                readResizeImage(file, function (dataUrl) {
                    c.uploads[id] = dataUrl;
                    save();
                    refresh();
                }, function () { toastMsg("Fichier illisible. Choisissez une image PNG ou JPG."); });
            });
            var preview = node("div", "upload-preview");
            preview.style.display = "none";
            var pimg = document.createElement("img");
            pimg.alt = cfg.label;
            preview.appendChild(pimg);
            var reset = btn("Retirer", "btn-ghost btn-sm", function () {
                delete c.uploads[id];
                save();
                refresh();
            });
            reset.style.display = "none";
            field.appendChild(lab);
            field.appendChild(inp);
            field.appendChild(node("p", "trace-note", cfg.hint));
            field.appendChild(preview);
            field.appendChild(reset);
            box.appendChild(field);
            function refresh() {
                var data = c.uploads[id] || "";
                if (data) {
                    pimg.src = data;
                    preview.style.display = "block";
                    reset.style.display = "";
                    inp.value = "";
                } else {
                    pimg.removeAttribute("src");
                    preview.style.display = "none";
                    reset.style.display = "none";
                }
            }
            refresh();
        });
        return box;
    }
    function readTextFile(file, cb, errCb) {
        var fr = new FileReader();
        fr.onload = function () { cb(String(fr.result || "")); };
        fr.onerror = function () { if (errCb) errCb(); };
        fr.readAsText(file);
    }
    function codeUploadArea(i) {
        var m = lib(i);
        var cf = m.exercise.codeUpload;
        var c = mod(i);
        var box = node("div", "deposit code-upload");
        box.appendChild(node("p", "trace-note", cf.desc || "Téléversez vos fichiers de code pour l'aperçu et la notation."));
        var ui = [];
        cf.files.forEach(function (fil) {
            var field = node("div", "upload-field");
            var lab = node("label", "", fil.label + (fil.required ? " (obligatoire)" : ""));
            var inp = document.createElement("input");
            inp.type = "file";
            inp.accept = fil.accept || "";
            inp.className = "upload-input";
            var status = node("span", "code-file-status", "");
            var reset = btn("Retirer", "btn-ghost btn-sm", function () {
                delete c.codeUpload[fil.id];
                save(); refreshAll();
            });
            field.appendChild(lab);
            field.appendChild(inp);
            field.appendChild(status);
            field.appendChild(reset);
            box.appendChild(field);
            ui.push({ fil: fil, inp: inp, status: status, reset: reset });
            inp.addEventListener("change", function () {
                var f = inp.files && inp.files[0];
                if (!f) return;
                readTextFile(f, function (txt) {
                    c.codeUpload[fil.id] = txt;
                    save(); refreshAll();
                    toastMsg(fil.label + " intégré ✔");
                }, function () { toastMsg("Fichier illisible : " + fil.label); });
            });
        });
        var pane = node("div", "sandbox-pane");
        pane.appendChild(node("div", "sandbox-label", "Rendu de votre code"));
        var ifr = document.createElement("iframe");
        ifr.classList.add("sandbox-frame");
        ifr.title = "Aperçu de votre fichier";
        pane.appendChild(ifr);
        box.appendChild(pane);
        var grade = node("div", "panel code-grade");
        grade.appendChild(node("h3", "", "Résultat automatique"));
        var gl = node("ul", "grade-list");
        grade.appendChild(gl);
        box.appendChild(grade);

        function refreshAll() {
            ui.forEach(function (u) {
                var present = c.codeUpload && c.codeUpload[u.fil.id] !== undefined;
                if (present) {
                    u.status.textContent = "✔ " + (c.codeUpload[u.fil.id] || "").length + " caractères";
                    u.status.classList.add("ok");
                    u.reset.style.display = "";
                    u.inp.value = "";
                } else {
                    u.status.textContent = "Non téléversé";
                    u.status.classList.remove("ok");
                    u.reset.style.display = "none";
                }
            });
            renderPreview();
            grade_();
        }
        function hasText(id, needle) {
            var content = c.codeUpload && c.codeUpload[id];
            if (content == null) return false;
            return String(content).toLowerCase().indexOf(String(needle).toLowerCase()) !== -1;
        }
        function grade_() {
            gl.innerHTML = "";
            if (!(cf.rules && cf.rules.length)) {
                var li = node("li", "g-off", "Aucune vérification automatique définie pour ce module.");
                gl.appendChild(li);
                return;
            }
            var groups = {};
            cf.rules.forEach(function (r) { (groups[r.chk] = groups[r.chk] || []).push(r); });
            Object.keys(groups).forEach(function (k) {
                var n = Number(k);
                var pass = groups[k].every(function (r) { return hasText(r.file, r.find); });
                var label = m.exercise.checklist[n];
                var li = node("li", "g-" + (pass ? "pass" : "fail"), (pass ? "✔ " : "✗ ") + (label || ("Critère " + (n + 1))));
                gl.appendChild(li);
                var idx = c.checklist.indexOf(n);
                if (pass) { if (idx === -1) c.checklist.push(n); }
                else { if (idx !== -1) c.checklist.splice(idx, 1); }
                var ch = document.querySelector('.exo-check[data-index="' + n + '"]');
                if (ch) { ch.checked = pass; if (ch.parentElement) ch.parentElement.classList.toggle("checked", pass); }
            });
            save(); updatePersist();
        }
        function renderPreview() {
            var doc = ifr.contentDocument;
            if (!doc) { setTimeout(renderPreview, 60); return; }
            var html = c.codeUpload && c.codeUpload.html;
            var css = c.codeUpload && c.codeUpload.css;
            var js = c.codeUpload && c.codeUpload.js;
            doc.open();
            if (!html) {
                doc.write('<body style="font-family:sans-serif;color:#999;text-align:center;margin-top:40px">Téléversez votre fichier HTML pour afficher le rendu ici.</body>');
            } else {
                var out = html;
                if (css && out.indexOf("</head>") !== -1) out = out.replace("</head>", "<style>" + css + "</style></head>");
                doc.write(out);
                if (js) {
                    var s = doc.createElement("script");
                    s.textContent = js;
                    if (doc.body) doc.body.appendChild(s);
                }
            }
            doc.close();
        }
        refreshAll();
        return box;
    }
    function readResizeImage(file, cb, errCb) {
        var fr = new FileReader();
        fr.onerror = errCb;
        fr.onload = function () {
            var img = new Image();
            img.onerror = errCb;
            img.onload = function () {
                var MAX = 900, w = img.width, h = img.height;
                if (w > MAX || h > MAX) {
                    var s = Math.min(MAX / w, MAX / h);
                    w = Math.round(w * s); h = Math.round(h * s);
                }
                var cv = document.createElement("canvas");
                cv.width = w; cv.height = h;
                cv.getContext("2d").drawImage(img, 0, 0, w, h);
                cb(cv.toDataURL("image/jpeg", 0.8));
            };
            img.src = fr.result;
        };
        fr.readAsDataURL(file);
    }

    /* ---------------- QCM ---------------- */
    function shuffleOptions(qq) {
        var idx = qq.options.map(function (_, i) { return i; });
        for (var i = idx.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = idx[i]; idx[i] = idx[j]; idx[j] = t;
        }
        return {
            q: qq.q,
            explain: qq.explain,
            opts: idx.map(function (i) { return qq.options[i]; }),
            ans: idx.indexOf(qq.answer)
        };
    }
    function quizTab(i) {
        var sec = node("section");
        var cont = node("div", "container quiz-wrap");
        cont.appendChild(node("h2", "section-title", "QCM d'évaluation"));
        var holder = node("div");
        cont.appendChild(holder);
        sec.appendChild(cont);
        appEl.appendChild(sec);
        runQuiz(i, holder);
    }
    function runQuiz(i, holder) {
        var m = COURSES[i];
        var pool = m.quiz.questions.map(shuffleOptions);
        var qs = pool;
        var idx = 0, score = 0, answered = false;
        render();

        function track() {
            var t = node("div", "quiz-track");
            var f = node("div", "quiz-track-fill");
            f.style.width = (qs.length ? (idx / qs.length) * 100 : 0) + "%";
            t.appendChild(f);
            return t;
        }
        function header() {
            var h = node("div", "quiz-header");
            h.appendChild(node("span", "", "Question " + (idx + 1) + " / " + qs.length));
            h.appendChild(node("span", "quiz-score", "Score : " + score));
            return h;
        }
        function render() {
            if (idx >= qs.length) { results(); return; }
            holder.innerHTML = "";
            var q = qs[idx];
            answered = false;
            holder.appendChild(header());
            holder.appendChild(track());
            var card = node("div", "q-card");
            card.appendChild(node("p", "q-text", q.q));
            var pickedWrong = null;
            q.opts.forEach(function (opt, oi) {
                var b = node("button", "opt");
                var key = node("span", "key", KEYS[oi]);
                b.appendChild(key);
                b.appendChild(node("span", "", opt));
                b.addEventListener("click", function () {
                    if (answered) return;
                    answered = true;
                    var correct = oi === q.ans;
                    if (correct) score++;
                    card.querySelectorAll(".opt").forEach(function (bt, x) {
                        bt.disabled = true;
                        bt.classList.add(x === q.ans ? "correct" : (x === oi ? "incorrect" : "muted"));
                    });
                    var fb = node("div", "feedback " + (correct ? "ok" : "bad"));
                    fb.appendChild(node("span", "fb-label", correct ? "✓ Bonne réponse !" : "✗ Pas cette fois."));
                    var p = node("p", "", q.explain);
                    fb.appendChild(p);
                    card.appendChild(fb);
                    card.appendChild(btn("Suivant →", "btn-primary q-next", function () { idx++; render(); }));
                });
                card.appendChild(b);
            });
            holder.appendChild(card);
        }

        function results() {
            var pass = score >= m.quiz.passScore;
            var st = mod(i);
            st.quiz.done = true;
            st.quiz.score = Math.max(st.quiz.score, score);
            st.quiz.total = qs.length;
            if (pass) st.quiz.passed = true;
            save(); updatePersist();
            holder.innerHTML = "";
            var r = node("div", "results");
            var ring = node("div", "ring");
            ring.style.setProperty("--val", qs.length ? (score / qs.length * 100) : 0);
            var inner = node("div", "r-inner");
            inner.appendChild(node("div", "r-pct", Math.round(qs.length ? (score / qs.length * 100) : 0) + "%"));
            ring.appendChild(inner);
            r.appendChild(ring);
            var msg = node("div", "result-msg " + (pass ? "result-good" : "result-bad"));
            msg.textContent = pass ? "QCM validé !" : "Presque réussi !";
            r.appendChild(msg);
            var sub = node("p", "result-sub");
            sub.textContent = pass
                ? "Vous avez obtenu " + score + "/" + qs.length + ". Le module " + (i + 1) + " est terminé. 🎉"
                : "Vous avez obtenu " + score + "/" + qs.length + ". Relisez le cours puis tentez à nouveau — vous y êtes presque.";
            r.appendChild(sub);
            var actions = node("div", "result-actions");
            if (!pass) {
                actions.appendChild(btn("Revoir le cours", "btn-primary", function () { location.hash = "#/module/" + (i + 1) + "/lessons"; }));
                actions.appendChild(btn("Réessayer", "btn-ghost", function () { location.hash = "#/module/" + (i + 1) + "/quiz"; }));
                actions.appendChild(btn("Retour au tableau de bord", "btn-ghost", function () { location.hash = "#/dashboard"; }));
            } else {
                if (modulesDone() === COURSES.length)
                    actions.appendChild(btn("Évaluation finale →", "btn-primary", function () { location.hash = "#/final"; }));
                else if (i + 1 < COURSES.length && !done(i + 1))
                    actions.appendChild(btn("Module suivant →", "btn-dark", function () { location.hash = "#/module/" + (i + 2) + "/lessons"; }));
                actions.appendChild(btn("Retour au dashboard", "btn-ghost", function () { location.hash = "#/dashboard"; }));
            }
            r.appendChild(actions);
            holder.appendChild(r);
            if (pass && st.quiz.passed && !badgeShown(i)) {
                badgeShown(i, true);
                badge("Module " + (i + 1) + " terminé 🎉", "Vous avez validé le QCM : « " + COURSES[i].title + " ».", COURSES[i].emoji);
            }
        }
        render();
    }

    var _badges = {};
    function badgeShown(i, set) { if (set) _badges[i] = true; return !!_badges[i]; }
    function badge(title, msg, emoji) {
        var m = node("div", "badge-modal");
        var card = node("div", "badge-card");
        card.appendChild(node("span", "badge-emoji", emoji));
        card.appendChild(node("h2", "", title));
        card.appendChild(node("p", "", msg));
        card.appendChild(btn("Continuer", "btn-primary", function () { m.remove(); }));
        m.appendChild(card);
        document.body.appendChild(m);
    }

    /* ---------------- Sandbox ---------------- */
    function sandbox(cfg) {
        var wrap = node("div", "sandbox");
        var pre = node("div", "sandbox-pre");
        pre.appendChild(node("div", "sandbox-label", "Code (modifiable)"));
        var htmlTa = textarea("html", cfg.html);
        var cssTa = cfg.css ? textarea("css", cfg.css) : null;
        pre.appendChild(htmlTa);
        if (cssTa) pre.appendChild(cssTa);
        var run = btn("Actualiser l'aperçu", "btn-dark btn-sm", runAll);
        pre.appendChild(run);
        var pane = node("div", "sandbox-pane");
        pane.appendChild(node("div", "sandbox-label", "Rendu"));
        var ifr = document.createElement("iframe");
        ifr.classList.add("sandbox-frame");
        ifr.title = "Aperçu du code";
        pane.appendChild(ifr);
        wrap.appendChild(pre);
        wrap.appendChild(pane);
        function runAll() {
            var doc = ifr.contentDocument;
            if (!doc) return;
            doc.open();
            var css = cssTa ? "<style>" + cssTa.value + "</style>" : "";
            doc.write(htmlTa.value + css);
            doc.close();
        }
        setTimeout(runAll, 0);
        if (htmlTa || cssTa) {
            var h2 = htmlTa, c2 = cssTa;
            var schedule = debounce(function () { runAll(); }, 350);
            if (h2) h2.addEventListener("input", schedule);
            if (c2) c2.addEventListener("input", schedule);
        }
        return wrap;
    }
    function textarea(id, val) {
        var t = document.createElement("textarea");
        t.className = "sandbox-code";
        t.spellcheck = false;
        t.value = val || "";
        return t;
    }

    /* ---------------- Dashboard ---------------- */
    function dashboard() {
        var sec = node("section");
        var cont = node("div", "container");
        var h1 = node("h1", "module-title");
        h1.style.marginTop = "30px";
        h1.textContent = "Tableau de bord";
        cont.appendChild(h1);
        if (!state.email) {
            var guest = node("div", "panel");
            guest.appendChild(node("p", "", "Bonjour ! Créez votre espace (une simple sauvegarde locale) pour que le site mémorise votre progression et affiche votre nom sur le certificat."));
            guest.appendChild(btn("Créer mon espace", "btn-primary", function () { location.hash = "#/auth"; }));
            cont.appendChild(guest);
        } else {
            var resume = node("div", "resume-btn");
            resume.innerHTML = "<b>▶ Reprendre où j'en étais</b><div class='small'>Continuer la prochaine étape de votre parcours</div>";
            resume.addEventListener("click", function () { location.hash = resumeRoute(); });
            cont.appendChild(resume);
        }
        var grid = node("div", "dash-grid");
        var left = node("div");
        left.appendChild(node("h2", "section-title", "Les 5 modules"));
        left.appendChild(moduleList());
        grid.appendChild(left);
        var right = node("div");
        right.appendChild(overall());
        grid.appendChild(right);
        cont.appendChild(grid);
        sec.appendChild(cont);
        appEl.appendChild(sec);
    }

    function moduleList() {
        var list = node("div", "module-list");
        COURSES.forEach(function (m, i) {
            var isLock = locked(i);
            var isDone = done(i);
            var card = node("div", "module-card" + (isLock ? " locked" : ""));
            card.appendChild(node("div", "module-num", String(i + 1)));
            var body = node("div");
            body.appendChild(node("div", "module-tag", "Module " + (i + 1) + " · " + m.emoji));
            body.appendChild(node("h3", "module-title", m.title));
            var meta = node("div", "module-meta");
            meta.appendChild(node("span", "", "Durée " + m.durée));
            meta.appendChild(node("span", "", "Prérequis : " + m.prerequis));
            body.appendChild(meta);
            var st = node("div", "module-status");
            if (isDone) st.textContent = "Validé ✓";
            else if (mod(i).started) st.textContent = "En cours";
            else st.textContent = isLock ? "🔒 Verrouillé" : "Non commencé";
            body.appendChild(st);
            card.appendChild(body);
            var launch = node("div", "module-launcher");
            var prog = node("div", "card-progress");
            var row = node("div", "row");
            row.appendChild(node("span", "", "Progression"));
            row.appendChild(node("span", "", pct(i) + "%"));
            prog.appendChild(row);
            var track = node("div", "progress-track");
            track.setAttribute("data-track", "");
            var fill = node("div", "progress-fill");
            fill.style.width = pct(i) + "%";
            track.appendChild(fill);
            prog.appendChild(track);
            launch.appendChild(prog);
            if (isLock) {
                launch.appendChild(node("span", "lock-ico", "🔒"));
            } else {
                launch.appendChild(btn(isDone ? "Reprendre" : (mod(i).started ? "Continuer" : "Commencer"), "btn-primary btn-sm", function () {
                    location.hash = "#/module/" + (i + 1) + "/lessons";
                }));
            }
            card.appendChild(launch);
            list.appendChild(card);
        });
        return list;
    }

    function overall() {
        var panel = node("div", "panel over-all");
        panel.appendChild(node("h2", "", "Progression globale"));
        var ring = node("div", "ring");
        ring.style.setProperty("--val", globalPct());
        var inner = node("div", "r-inner");
        inner.appendChild(node("div", "r-pct", globalPct() + "%"));
        ring.appendChild(inner);
        panel.appendChild(ring);
        var row = node("div", "stat-row");
        row.appendChild(stat(modulesDone(), "modules validés"));
        row.appendChild(stat(COURSES.length - modulesDone(), "à valider"));
        if (modulesDone() === COURSES.length) {
            row.appendChild(stat(state.final.quiz.passed ? 1 : 0, "quiz final / certificat"));
            panel.appendChild(btn(state.final.quiz.passed
                ? "Voir mon certificat"
                : "Évaluation finale →", "btn-primary", function () {
                location.hash = state.final.quiz.passed ? "#/certificate" : "#/final";
            }));
        } else {
            row.appendChild(stat(firstIncomplete() + 1, "module à venir"));
        }
        panel.appendChild(row);
        return panel;
    }
    function stat(n, label) {
        var s = node("div", "stat");
        s.appendChild(node("b", "", String(n)));
        s.appendChild(node("span", "", label));
        return s;
    }

    /* ---------------- Évaluation finale ---------------- */
    function finalView(tab) {
        var sec = node("section");
        var cont = node("div", "container");
        var crumb = node("div", "crumb");
        crumb.innerHTML = '<a href="#/dashboard">Tableau de bord</a> · Évaluation finale';
        cont.appendChild(crumb);
        cont.appendChild(node("h1", "module-title", FINAL.project.emoji + " Évaluation finale — " + FINAL.project.title));
        var ready = modulesDone() === COURSES.length;
        var panel = node("div", "panel");
        panel.appendChild(node("p", "", ready
            ? "Les 5 modules sont validés. Félicitations ! Terminez le projet final puis le quiz final pour obtenir votre certificat."
            : "Terminez d'abord les 5 modules (QCM validés) pour débloquer l'évaluation finale. Progression : " + modulesDone() + "/5."));
        cont.appendChild(panel);
        var tabsbar = node("div", "tabs");
        [["project", "Projet final"], ["quiz", "Quiz final"]].forEach(function (t) {
            var b = node("button", "tab" + (t[0] === tab ? " active" : ""), t[1]);
            b.type = "button";
            b.addEventListener("click", function () { location.hash = "#/final" + (t[0] === "project" ? "" : "/quiz"); });
            tabsbar.appendChild(b);
        });
        cont.appendChild(tabsbar);
        sec.appendChild(cont);
        appEl.appendChild(sec);
        if (tab === "quiz") { if (ready) finalQuiz(); else finalLocked(cont); return; }
        finalProject(cont);
    }

    function finalLocked(cont) {
        var box = node("div", "panel");
        box.appendChild(node("h3", "", "🔒 Quiz final encore verrouillé"));
        box.appendChild(node("p", "", "Le quiz final se débloque une fois les 5 modules validés. Progression : " + modulesDone() + "/5."));
        var acts = node("div", "hero-cta");
        acts.appendChild(btn("Continuer les modules", "btn-primary", function () { location.hash = "#/module/" + (firstIncomplete() + 1) + "/lessons"; }));
        acts.appendChild(btn("Retour au tableau de bord", "btn-ghost", function () { location.hash = "#/dashboard"; }));
        box.appendChild(acts);
        cont.appendChild(box);
    }

    function finalProject(cont) {
        var body = node("div", "exo-body");
        renderBlocks(FINAL.project.intro, body);
        var cons = node("div", "panel");
        cons.appendChild(node("h3", "", "Consigne du projet"));
        var ol = node("ol");
        FINAL.project.consigne.forEach(function (it) { ol.appendChild(node("li", "", it)); });
        cons.appendChild(ol);
        body.appendChild(cons);

        body.appendChild(node("h3", "section-title", "Ma checklist d'auto-évaluation"));
        var cl = node("div", "checklist");
        var st = state.final;
        FINAL.project.checklist.forEach(function (txt, k) {
            var lab = node("label", "check-item");
            if (st.checklist.indexOf(k) !== -1) lab.classList.add("checked");
            var inp = document.createElement("input");
            inp.type = "checkbox";
            inp.checked = st.checklist.indexOf(k) !== -1;
            inp.addEventListener("change", function () {
                var idx = st.checklist.indexOf(k);
                if (inp.checked) { if (idx === -1) st.checklist.push(k); }
                else { if (idx !== -1) st.checklist.splice(idx, 1); }
                lab.classList.toggle("checked", inp.checked);
                save(); updatePersist();
            });
            lab.appendChild(inp);
            lab.appendChild(node("span", "txt", txt));
            cl.appendChild(lab);
        });
        body.appendChild(cl);

        var box = node("div", "deposit");
        box.appendChild(node("h3", "", "🔗 Lien de votre réalisation"));
        box.appendChild(node("p", "trace-note", "Collez ici l'URL publique de votre projet pour le certificat."));
        var url = document.createElement("input");
        url.type = "url";
        url.placeholder = "https://votre-site-en-ligne.com";
        url.value = st.link || "";
        url.addEventListener("input", debounce(function () { st.link = url.value; save(); }, 400));
        box.appendChild(url);
        body.appendChild(box);

        var nav = node("div", "lesson-nav");
        nav.appendChild(btn("←  Tableau de bord", "btn-ghost", function () { location.hash = "#/dashboard"; }));
        nav.appendChild(btn("Passer au quiz final →", "btn-primary", function () { location.hash = "#/final/quiz"; }));
        body.appendChild(nav);
        cont.appendChild(body);
    }

    function finalQuiz() {
        var pool = FINAL.quiz.questions.map(shuffleOptions);
        var qs = pool;
        var st = state.final;
        var qHolder = node("div");
        appEl.appendChild(qHolder);
        var idx = 0, score = 0, answered = false;
        render();
        function render() {
            if (idx >= qs.length) { finResults(score); return; }
            qHolder.innerHTML = "";
            answered = false;
            var q = qs[idx];
            var head = node("div", "quiz-header");
            head.appendChild(node("span", "", "Question " + (idx + 1) + " / " + qs.length));
            head.appendChild(node("span", "quiz-score", "Score : " + score));
            qHolder.appendChild(head);
            var card = node("div", "q-card");
            card.appendChild(node("p", "q-text", q.q));
            q.opts.forEach(function (opt, oi) {
                var b = node("button", "opt");
                b.appendChild(node("span", "key", KEYS[oi]));
                b.appendChild(node("span", "", opt));
                b.addEventListener("click", function () {
                    if (answered) return;
                    answered = true;
                    var correct = oi === q.ans;
                    if (correct) score++;
                    card.querySelectorAll(".opt").forEach(function (bt, x) {
                        bt.disabled = true;
                        bt.classList.add(x === q.ans ? "correct" : (x === oi ? "incorrect" : "muted"));
                    });
                    var fb = node("div", "feedback " + (correct ? "ok" : "bad"));
                    fb.appendChild(node("span", "fb-label", correct ? "✓ Bonne réponse !" : "✗ Pas cette fois."));
                    fb.appendChild(node("p", "", q.explain));
                    card.appendChild(fb);
                    var next = btn(idx + 1 < qs.length ? "Suivant →" : "Voir le résultat", "btn-primary q-next", function () { idx++; render(); });
                    card.appendChild(next);
                });
                card.appendChild(b);
            });
            qHolder.appendChild(card);
        }
        function finResults(score) {
            var pass = score >= FINAL.quiz.passScore;
            st.quiz.done = true;
            st.quiz.score = Math.max(st.quiz.score, score);
            st.quiz.total = qs.length;
            if (pass) st.quiz.passed = true;
            save(); updatePersist();
            qHolder.innerHTML = "";
            var r = node("div", "results");
            var ring = node("div", "ring");
            ring.style.setProperty("--val", qs.length ? (score / qs.length * 100) : 0);
            var inner = node("div", "r-inner");
            inner.appendChild(node("div", "r-pct", Math.round(qs.length ? (score / qs.length * 100) : 0) + "%"));
            ring.appendChild(inner);
            r.appendChild(ring);
            var msg = node("div", "result-msg " + (pass ? "result-good" : "result-bad"));
            msg.textContent = pass ? "Quiz final réussi !" : "Pas encore…";
            r.appendChild(msg);
            var sub = node("p", "result-sub");
            sub.textContent = pass
                ? "Vous avez obtenu " + score + "/" + qs.length + ". La formation est terminée — votre certificat est prêt. 🎉"
                : "Vous avez obtenu " + score + "/" + qs.length + " (seuil " + FINAL.quiz.passScore + "/" + qs.length + "). Relisez vos modules puis réessayez.";
            r.appendChild(sub);
            var actions = node("div", "result-actions");
            if (!pass) {
                actions.appendChild(btn("Réessayer", "btn-primary", function () { location.hash = "#/final/quiz"; }));
            } else {
                actions.appendChild(btn("Obtenir mon certificat", "btn-primary", function () { location.hash = "#/certificate"; }));
            }
            actions.appendChild(btn("Retour au dashboard", "btn-ghost", function () { location.hash = "#/dashboard"; }));
            r.appendChild(actions);
            qHolder.appendChild(r);
        }
    }

    /* ---------------- Certificat ---------------- */
    function certificateView() {
        var sec = node("section");
        var cont = node("div", "container");
        if (modulesDone() !== COURSES.length || !state.final.quiz.passed) {
            var panel = node("div", "panel");
            panel.appendChild(node("h2", "", "🔒 Certificat non encore disponible"));
            var prog = node("p", "locked-cert", "Validez les 5 modules puis réussissez le quiz final pour obtenir votre certificat. ");
            var sub2 = node("p", "locked-cert", "Modules validés : " + modulesDone() + "/5 · Quiz final : " + (state.final.quiz.passed ? "réussi" : "à passer") + ".");
            panel.appendChild(prog);
            panel.appendChild(sub2);
            panel.appendChild(navBtn("Retour au tableau de bord", "btn-primary", "#/dashboard"));
            cont.appendChild(panel);
        } else {
            var cert = node("div", "cert-preview");
            var edge = node("div", "cert-edge");
            var inner = node("div", "cert-inner");
            inner.appendChild(node("div", "cert-ribbon", "★ Formation Vibecoding ★"));
            inner.appendChild(node("h2", "cert-title", "Certificat de réussite"));
            inner.appendChild(node("p", "cert-sub", "est décerné à"));
            inner.appendChild(node("p", "cert-name", profileName()));
            inner.appendChild(node("p", "cert-line", "pour avoir suivi et réussi l'intégralité de la formation"));
            inner.appendChild(node("p", "cert-course", "« De l'idée au site en ligne »"));
            var chips = node("div", "cert-chips");
            COURSES.forEach(function (m) {
                chips.appendChild(node("span", "cert-chip", m.emoji + " Module " + m.id));
            });
            inner.appendChild(chips);
            var stats = node("div", "cert-stats");
            stats.appendChild(node("span", "", "✔ " + COURSES.length + " modules validés"));
            var fq = state.final.quiz;
            stats.appendChild(node("span", "", "Quiz final : " + fq.score + "/" + fq.total));
            inner.appendChild(stats);
            var sigSeal = node("div", "cert-sig-seal");
            var sig = node("div", "cert-sig");
            sig.appendChild(node("div", "cert-sig-line", ""));
            sig.appendChild(node("span", "", "La formation Vibecoding"));
            sigSeal.appendChild(sig);
            var seal = node("div", "cert-seal");
            seal.appendChild(node("span", "", "🎓"));
            seal.appendChild(node("span", "", "Certifié"));
            sigSeal.appendChild(seal);
            inner.appendChild(sigSeal);
            var d = new Date();
            var day = d.getDate(), mon = d.getMonth() + 1;
            if (!state.final.certId) {
                state.final.certId = "VC-" + d.getFullYear() + "-" + String(Math.floor(1000 + Math.random() * 9000));
                save();
            }
            var id = state.final.certId;
            inner.appendChild(node("p", "cert-meta", "Certificat n° " + id + " · Délivré le " + (day < 10 ? "0" + day : day) + "/" + (mon < 10 ? "0" + mon : mon) + "/" + d.getFullYear()));
            edge.appendChild(inner);
            cert.appendChild(edge);
            cont.appendChild(cert);
            var actions = node("div", "cert-action");
            actions.appendChild(btn("Télécharger en PDF", "btn-primary", () => {
                toastMsg("Choisissez « Enregistrer au format PDF » comme destination.");
                setTimeout(function () { window.print(); }, 150);
            }));
            cont.appendChild(actions);
            var concl = node("div", "panel cert-conclusion");
            concl.appendChild(node("h2", "", "Conclusion générale"));
            var mLast = COURSES[COURSES.length - 1];
            if (mLast && mLast.conclusion) renderBlocks(mLast.conclusion, concl);
            cont.appendChild(concl);
        }
        sec.appendChild(cont);
        appEl.appendChild(sec);
    }
    function btnHTML(label, cls, href) {
        return '<button class="btn ' + cls + '" type="button" onclick="location.hash=\'' + href + '\'">' + label + "</button>";
    }

    /* ---------------- Paramètres ---------------- */
    function paramsView() {
        var sec = node("section");
        var cont = node("div", "container params-grid");
        var h = node("h1", "module-title", "Paramètres");
        h.style.marginTop = "30px";
        cont.appendChild(h);

        var p1 = node("div", "panel");
        p1.appendChild(node("h2", "", "Votre profil"));
        p1.appendChild(settingText("Nom (affiché sur le certificat)", "Nom du profil", profileName(), function (v) {
            state.nickname = v; save(); updateNavAuth(); toastMsg("Nom enregistré");
        }));
        if (state.email) {
            var info = node("div", "setting-row");
            var l = node("div");
            l.appendChild(node("div", "", "Connecté en tant que"));
            l.appendChild(node("div", "desc", state.email));
            info.appendChild(l);
            var deco = btn("Se déconnecter", "btn-ghost btn-sm", function () {
                state.email = ""; state.nickname = "";
                save(); location.hash = "#/";
            });
            info.appendChild(deco);
            p1.appendChild(info);
        }
        cont.appendChild(p1);

        var p2 = node("div", "panel");
        p2.appendChild(node("h2", "", "Parcours"));
        p2.appendChild(settingToggle("Parcours libre (tout débloquer)", state.freeMode, function (v) {
            state.freeMode = v; save(); toastMsg(v ? "Parcours libre activé" : "Parcours progressif rétabli");
        }));
        p2.appendChild(settingToggle("Mode sombre", state.dark, function (v) {
            state.dark = v; applyDark(v); save();
        }));
        cont.appendChild(p2);

        var p3 = node("div", "panel");
        p3.appendChild(node("h2", "", "Progression"));
        p3.appendChild(btnOffset("Réinitialiser toute la progression", function () {
            if (confirm("Effacer toute votre progression ? Cette action est définitive.")) {
                state.modules = COURSES.map(function () { return { started: false, read: [], checklist: [], uploads: {}, codeUpload: {}, quiz: { done: false, passed: false, score: 0, total: 0 }, trace: { text: "", url: "", saved: false } }; });
                state.final = { started: false, checklist: [], link: "", certId: "", quiz: { done: false, passed: false, score: 0, total: 0 } };
                save(); location.hash = "#/"; toastMsg("Progression réinitialisée");
            }
        }));
        cont.appendChild(p3);
        sec.appendChild(cont);
        appEl.appendChild(sec);
    }

    function settingText(label, id, value, onchange) {
        var row = node("div", "setting-row");
        var l = node("label", "", label);
        l.htmlFor = id;
        var inp = document.createElement("input");
        inp.id = id; inp.type = "text"; inp.value = value || "";
        inp.className = "short-input";
        inp.addEventListener("change", function () { onchange(inp.value); });
        row.appendChild(l);
        row.appendChild(inp);
        return row;
    }
    function settingToggle(label, checked, onchange) {
        var row = node("div", "setting-row");
        var l = node("div", "", label);
        var sw = node("label", "switch");
        var box = document.createElement("input");
        box.type = "checkbox";
        box.checked = !!checked;
        box.addEventListener("change", function () { onchange(box.checked); });
        var sl = node("span", "sl");
        sw.appendChild(box);
        sw.appendChild(sl);
        row.appendChild(l);
        row.appendChild(sw);
        return row;
    }
    function btnOffset(label, onclick) {
        var row = node("div", "setting-row");
        var l = node("div", "", label);
        var b = btn(label, "btn-ghost", onclick);
        row.appendChild(l);
        row.appendChild(b);
        return row;
    }

    /* ---------------- Vue modale de verrou ---------------- */
    function lockedView(i, m) {
        var sec = node("section");
        var cont = node("div", "container");
        cont.style.paddingTop = "32px";
        var panel = node("div", "panel");
        panel.appendChild(node("h2", "", "🔒 " + m.title));
        panel.appendChild(node("p", "locked-cert", "Ce module se débloque après validation du module " + i + "."));
        var actions = node("div", "hero-cta");
        actions.appendChild(btn("Retour", "btn-ghost", function () { location.hash = "#/dashboard"; }));
        actions.appendChild(btn("Tout débloquer", "btn-primary", function () { state.freeMode = true; save(); location.hash = "#/module/" + (i) + "/lessons"; }));
        panel.appendChild(actions);
        cont.appendChild(panel);
        sec.appendChild(cont);
        appEl.appendChild(sec);
    }

    function badgesCount() {
        return modulesDone();
    }
})();