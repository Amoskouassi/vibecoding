/* Formation Vibecoding — Évaluation finale : projet final + quiz final */
window.FINAL = {
  project: {
    title: "Projet final",
    emoji: "🏁",
    intro: [
      "Cette dernière étape : c'est à votre tour. Vous allez produire votre propre mini-site, de l'idée jusqu'à l'URL en ligne, en mobilisant les 5 modules de la formation.",
      "Aucune note automatique : comme dans toute la formation, vous vous auto-évaluez avec la checklist ci-dessous, puis vous validez vos connaissances avec le quiz final pour obtenir le certificat."
    ],
    consigne: [
      "Définissez un mini-projet : une page de présentation (à propos), une page vitrine d'un micro-projet, ou une page de ressources. L'important est que le sujet vous motive.",
      "Brainstorming : posez par écrit votre idée, votre public et la structure globale de la page (Module 1).",
      "Esquissez un wireframe / croquis simple de l'interface sur papier ou en ligne (Module 2).",
      "Rédigez le squelette HTML sémantique : header, nav, main, sections, footer (Module 3).",
      "Mettez en forme avec CSS : thème cohérent, grilles / flexbox, responsive orienté mobile (Module 4).",
      "Ajoutez au moins une interaction JavaScript : menu burger, formulaire, compteur, filtres… N'hésitez pas à utiliser l'IA pour vous aider (Module 5).",
      "Vérifiez l'accessibilité : navigation au clavier, contrastes suffisants, textes alternatifs sur les images.",
      "Déployez votre page en ligne (GitHub Pages ou autre hébergeur simple) et testez l'URL depuis un autre appareil.",
      "Renseignez ci-dessous l'URL de votre réalisation et cochez la checklist."
    ],
    checklist: [
      "Idée, besoin et structure clarifiés à l'écrit (Modules 1-2)",
      "HTML sémantique valide et structuré",
      "CSS responsive et thème cohérent",
      "Au moins une interaction JavaScript fonctionnelle",
      "Accessibilité vérifiée au clavier et contrastes corrects",
      "Page déployée en ligne et URL renseignée dans la trace"
    ]
  },
  quiz: {
    passScore: 8,
    questions: [
      {
        q: "Avant de commencer à coder, la bonne démarche est de :",
        options: ["Écrire le code le plus vite possible", "Clarifier son idée, ses besoins et la structure de la page", "Copier un template au hasard", "Choisir directement les couleurs"],
        answer: 1,
        explain: "Le Module 1 « Brainstorming » (Module 1 préconise de clarifier votre idée et votre structure avant toute écriture de code."
      },
      {
        q: "En UX/UI, « préférer la simplicité à la performance » signifie :",
        options: ["Ajouter un maximum d'animations jargonnaises", "Limiter l'excès et garder une interface claire et épurée", "Supprimer toute la lisibilité", "Charger le plus de libraires possible"],
        answer: 1,
        explain: "Module 2 : une interface simple, claire et légère est plus performante qu'une interface surchargée."
      },
      {
        q: "Quelle balise contient le contenu VUSIBLE de la page ?",
        options: ["<head>", "<body>", "<title>", "<meta>"],
        answer: 1,
        explain: "<body> contient le corps visible. <head> contient les métadonnées, <title> le titre de l'onglet."
      },
      {
        q: "Parmi ces balises, laquelle est sémantique et structurante ?",
        options: ["<div>", "<nav>", "<span>", "<br>"],
        answer: 1,
        explain: "<nav> a un sens (navigation). <div> est un conteneur générique sans sens particulier (Module 3)."
      },
      {
        q: "Pour disposer une page en colonnes adaptables, on utilise préférablement :",
        options: ["Une balise <table>", "display: grid ou flexbox", "beaucoup de <br> et de marges", "Des images"], 
        answer: 1,
        explain: "CSS Grid / Flexbox créent une mise en page flexible et responsive (Module 4)."
      },
      {
        q: "Quelle propriété CSS définit la couleur du fond d'un élément ?",
        options: ["font-color", "background-color", "color", "border-color"],
        answer: 1,
        explain: "background-color change le fond ; color ne change que le texte (Module 4)."
      },
      {
        q: "Dans le vibecoding, « prompter normalement » signifie :",
        options: ["Donner des instructions claires et précises à l'IA", "Lancer des commandes dans un terminal", "Copier-coller du code sans réfléchir", "Déclarer un montage compliqué"],
        answer: 0,
        explain: "Module 5 : formuler des instructions simples et précises pour obtenir des résultats utiles."
      },
      {
        q: "Avant d'utiliser un code fourni par l'IA, la bonne habitude est de :",
        options: ["L'utiliser sans le lire", "Lire et analyser le code pour le comprendre", "Le revendre tel quel", "L'éviter absolument"],
        answer: 1,
        explain: "Module 5 : lire et analyser le code (et le tester) avant de le garder."
      },
      {
        q: "Une interface qui s'adapte au mobile comme au grand écran est dite :",
        options: ["Responsive", "Statique", "Contrapunte", "Normalisée"],
        answer: 0,
        explain: "Un site responsive s'affiche correctement sur toutes les tailles d'écran (Modules 2 et 4)."
      },
      {
        q: "Votre site est correctement « en ligne » lorsque :",
        options: ["Il est accessible via une URL publique", "Il est visible seulement sur votre disque dur", "Il est enregistré dans un wireframe", "Il est écrit en HTML local"],
        answer: 0,
        explain: "« En ligne » = accessible depuis n'importe quel appareil via une URL publique ; ensuite, on vérifie avec un autre appareil (Module 5)."
      }
    ]
  }
};