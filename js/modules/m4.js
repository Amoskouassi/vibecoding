// Module 4 — Notions CSS
window.COURSE_MODULE_4 = {
  id: 4,
  slug: "css",
  title: "Avoir des notions en CSS",
  subtitle: "L'habillage de vos pages",
  emoji: "🎨",
  durée: "2h – 2h30",
  prerequis: "Module 3 terminé",
  objectifs: [
    "Comprendre le rôle du CSS et sa relation avec le HTML",
    "Utiliser les sélecteurs CSS de base pour cibler des éléments HTML",
    "Appliquer des couleurs de texte et d'arrière-plan",
    "Lier correctement une feuille de style CSS à une page HTML"
  ],
  lessons: [
    {
      id: "4.1",
      title: "C'est quoi le CSS, et pourquoi vient-il après le HTML ?",
      blocks: [
        { t: "p", v: "Si le HTML est le squelette d'une page web (Module 3), le CSS — Cascading Style Sheets, ou « feuilles de style en cascade » — en est l'habillage : les couleurs, les polices, les espacements, les tailles, les mises en page." },
        { t: "p", v: "C'est le CSS qui transforme la structure brute en une interface qui reflète l'identité visuelle imaginée au Module 2 (couleurs, typographie choisies dans votre prototype)." },
        { t: "p", v: "Pourquoi « en cascade » ? Parce que les règles peuvent s'appliquer, se combiner et parfois se remplacer selon un ordre de priorité précis (une règle plus spécifique l'emporte généralement sur une plus générale). Il n'est pas nécessaire de maîtriser cette mécanique pour débuter, mais il est utile de savoir qu'elle existe : c'est souvent pourquoi une couleur « ne s'applique pas »." }
      ]
    },
    {
      id: "4.2",
      title: "Les sélecteurs CSS",
      blocks: [
        { t: "p", v: "Une règle CSS répond toujours à la même logique : « sélectionner un ou plusieurs éléments HTML, puis leur appliquer des propriétés de style ». C'est l'équivalent, pour le CSS, du balisage vu au Module 3 : ici aussi il y a une syntaxe précise à respecter, avec des pièces que l'on imbrique." },
        { t: "h", v: "L'anatomie d'une règle CSS" },
        { t: "p", v: "Une règle CSS se compose de trois grandes parties : un sélecteur, une accolade ouvrante {, une ou plusieurs déclarations, puis une accolade fermante }." },
        { t: "table", head: ["Partie", "Exemple", "Rôle"], rows: [
          ["1. Le sélecteur", "h1", "Désigne l'élément (ou les éléments) HTML concernés"],
          ["2. La ou les déclarations", "color: darkblue;", "Les instructions de style, placées entre les accolades"],
          ["3. Les accolades { }", "{ … }", "Délimitent le début et la fin de la règle"]
        ] },
        { t: "code", lang: "css", title: "Règle CSS — repérez les 3 parties", v: "h1 { color: darkblue; }\n1  2                  3\n\n1 = le sélecteur (h1)\n2 = la ou les déclarations (color: darkblue;), entre les accolades\n3 = l'accolade fermante }" },
        { t: "p", v: "Remarque importante : ces règles ne s'appliquent à votre page que parce que votre feuille de style est liée à votre page HTML — c'est dans le HTML que se fait ce lien, grâce à la balise <link> placée dans le <head> (voir la section 4.4). Sans ce lien, le navigateur affiche la page sans aucun style, même si le fichier CSS est parfaitement écrit." },
        { t: "h", v: "L'anatomie d'une déclaration" },
        { t: "p", v: "À l'intérieur des accolades se trouvent les déclarations : les instructions de style. Une déclaration se compose de quatre éléments, toujours dans cet ordre :" },
        { t: "table", head: ["Élément", "Exemple", "Rôle"], rows: [
          ["1. Le nom de la propriété", "color", "Ce que l'on modifie : couleur, taille, fond, marge…"],
          ["2. Le deux-points", ":", "Sépare la propriété de sa valeur"],
          ["3. La valeur", "darkblue", "Ce que l'on applique à la propriété"],
          ["4. Le point-virgule", ";", "Termine la déclaration (obligatoire)"]
        ] },
        { t: "code", lang: "css", title: "Déclaration — repérez les 4 éléments", v: "color: darkblue;\n1    2 3       4\n\n1 = le nom de la propriété (color)\n2 = le deux-points (:) sépare la propriété de la valeur\n3 = la valeur (darkblue)\n4 = le point-virgule (;) termine la déclaration" },
        { t: "p", v: "Le point-virgule est obligatoire : c'est lui qui indique au navigateur où s'arrête une déclaration. Sans lui, plusieurs déclarations se collent les unes aux autres et la règle casse." },
        { t: "code", lang: "css", title: "Une règle avec plusieurs déclarations", v: "h1 {\n    color: darkblue;\n    background-color: lightyellow;\n    font-size: 32px;\n}" },
        { t: "h", v: "Les types de sélecteurs" },
        { t: "p", v: "Le sélecteur indique quels éléments sont concernés. Il en existe plusieurs types :" },
        { t: "ul", v: [
          "Le sélecteur de balise, qui cible un type de balise HTML. Ex : p { color: gray; } s'applique à tous les paragraphes.",
          "Le sélecteur de classe, qui cible tous les éléments partageant un attribut class identique. Une classe se définit en HTML (class=\"ma-classe\") et se cible avec un point : .ma-classe { ... }.",
          "Le sélecteur d'identifiant (id), qui cible un élément unique (un id n'apparaît qu'une fois par page). Il se cible avec un dièse : #en-tete { ... }.",
          "Le sélecteur d'attribut, qui cible un élément selon l'un de ses attributs. Ex : a[href=\"https://exemple.com\"] ne cible que le lien vers cette adresse.",
          "Le regroupement par virgule : un même style pour plusieurs sélecteurs. Ex : h1, h2, h3 { color: navy; } s'applique aux trois types de titres."
        ] },
        { t: "tip", v: "Astuce : privilégiez les classes pour tout ce qui est réutilisable (boutons, cartes, titres) et réservez les id à des éléments vraiment uniques de la page." },
        { t: "h", v: "Les lois de la syntaxe CSS" },
        { t: "p", v: "Comme l'imbrication des balises HTML, la syntaxe CSS suit des règles précises. Les voici :" },
        { t: "ol", v: [
          "Chaque déclaration se termine par un point-virgule (;), y compris la dernière.",
          "Le nom de la propriété et sa valeur sont séparés par un deux-points (:), sans être inversés.",
          "Toute règle ouverte avec une accolade { doit être refermée avec une accolade }.",
          "Plusieurs sélecteurs dans une même règle sont séparés par une virgule : h1, h2 { ... }.",
          "On écrit toujours une règle par ligne et une déclaration par ligne, pour garder un code lisible (ce que l'IA génère est déjà formaté ainsi).",
          "Les propriétés et valeurs s'écrivent en minuscules par convention, et les valeurs se terminent par leur unité quand il en faut une (ex. 32px, 1.5em).",
          "Le CSS se commente avec /* … */ pour expliquer son code sans l'exécuter."
        ] },
        { t: "p", v: "Exemple de règle complète et bien formée, avec un commentaire :" },
        { t: "code", lang: "css", title: "Règle correcte", v: "/* Titre de la page */\nh1 {\n    color: darkblue;\n    background-color: lightyellow;\n    font-size: 32px;\n}" },
        { t: "trap", v: "Piège fréquent : oublier le point-virgule, ou écrire la valeur avant le deux-points (color: darkblue au lieu de darkblue: color). Vérifiez toujours que chaque déclaration respecte l'ordre propriété : valeur ;." }
      ]
    },
    {
      id: "4.3",
      title: "color, background-color : gérer les couleurs",
      blocks: [
        { t: "p", v: "Deux propriétés reviennent presque systématiquement : color définit la couleur du texte, background-color celle de l'arrière-plan." },
        { t: "code", lang: "css", title: "Couleurs de texte et de fond", v: "h1 {\n    color: darkblue;\n    background-color: lightyellow;\n}" },
        { t: "h", v: "Comment exprimer une couleur en CSS ?" },
        { t: "table", head: ["Méthode", "Exemple", "Remarque"], rows: [
          ["Nom de couleur", "color: red;", "Pratique pour débuter, mais limité à un nombre fixe de noms"],
          ["Code hexadécimal", "color: #FF0000;", "Le plus utilisé — 6 caractères"],
          ["RGB", "color: rgb(255, 0, 0);", "Mélange de rouge, vert, bleu (0 à 255)"]
        ] },
        { t: "tip", v: "Astuce (Module 2) : reprenez les codes couleur définis dans votre prototype pour que le site respecte votre identité visuelle." },
        { t: "trap", v: "Piège du contraste : une couleur de texte trop proche de l'arrière-plan (ex. gris clair sur fond blanc) rend le contenu illisible. En cas de doute, privilégiez un contraste marqué, surtout pour le texte principal." }
      ]
    },
    {
      id: "4.4",
      title: "Lier le CSS au HTML",
      blocks: [
        { t: "p", v: "Écrire du CSS ne suffit pas : il faut que le navigateur sache qu'il doit l'appliquer à votre page. Trois méthodes :" },
        { t: "h", v: "a) CSS externe (méthode recommandée)" },
        { t: "p", v: "On crée un fichier séparé, souvent nommé style.css, et on le relie via une balise <link> dans le <head> :" },
        { t: "code", lang: "html", title: "Style.css lié", v: "<head>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>" },
        { t: "p", v: "C'est la méthode la plus propre : elle sépare structure (HTML) et apparence (CSS), et permet de réutiliser le même fichier sur plusieurs pages." },
        { t: "h", v: "b) CSS interne" },
        { t: "p", v: "Le style est écrit dans une balise <style> placée dans le <head>. Utile pour des tests rapides, mais le style ne s'applique qu'à la page concernée." },
        { t: "h", v: "c) CSS en ligne (inline)" },
        { t: "p", v: "Le style est appliqué sur une balise via l'attribut style. Déconseillé pour un projet complet : mélange la structure et l'apparence." },
        { t: "tip", v: "Astuce : pour un vrai projet (même simple), privilégiez le CSS externe. C'est aussi ce que l'IA générera par défaut au Module 5." }
      ]
    }
  ],
  exercise: {
    intro: [
      { t: "p", v: "Reprenez la page HTML réalisée au Module 3 et ajoutez-lui du CSS. Travaillez sur vos fichiers réels, puis téléversez-les ici pour l'aperçu et la notation automatique." },
      { t: "h", v: "Pas à pas" },
      { t: "ol", v: [
        "Ouvrez votre dossier « mon-site » dans VS Code (celui du Module 3).",
        "Créez un fichier style.css dans le même dossier.",
        "Dans index.html, ajoutez dans le <head> : <link rel=\"stylesheet\" href=\"style.css\"> pour lier votre feuille de style externe.",
        "Enregistrez les deux fichiers (Ctrl+S).",
        "Dans style.css, écrivez : pour votre <h1>, une couleur de texte (color: …;) et une couleur de fond (background-color: …;).",
        "Vérifiez que le contraste reste lisible, puis publiez la nouvelle version en ligne (re-téléversez sur Netlify Drop ou poussez sur GitHub Pages).",
        "Téléversez ci-dessous vos index.html et style.css pour voir le rendu et la notation automatique."
      ] }
    ],
    consigne: {
      t: "ul",
      v: [
        "Ajoutez une couleur de texte à votre <h1> grâce à la propriété color.",
        "Ajoutez une couleur de fond à votre <h1> grâce à la propriété background-color.",
        "Vérifiez que le contraste entre les deux couleurs reste suffisant."
      ]
    },
    codeUpload: {
      desc: "Téléversez vos fichiers index.html et style.css. Ils seront assemblés dans l'aperçu et vérifiés automatiquement.",
      files: [
        { id: "html", label: "index.html", accept: ".html,.htm,text/html", required: true },
        { id: "css", label: "style.css", accept: ".css,text/css", required: false }
      ],
      rules: [
        { file: "html", find: "style.css", chk: 0 },
        { file: "css", find: "h1", chk: 1 },
        { file: "css", find: "color:", chk: 1 },
        { file: "css", find: "background-color:", chk: 2 }
      ]
    },
    checklist: [
      "Mon style.css est bien lié via une balise <link> dans le <head> ✓ auto",
      "Mon <h1> affiche une couleur de texte différente du noir par défaut ✓ auto",
      "Mon <h1> affiche une couleur de fond ✓ auto",
      "Le texte reste lisible (contraste suffisant) après application des couleurs"
    ]
  },
  quiz: {
    questions: [
      {
        q: "Quel est le rôle principal du CSS ?",
        options: [
          "Structurer le contenu d'une page",
          "Gérer l'apparence visuelle d'une page (couleurs, polices, mise en page)",
          "Gérer les bases de données d'un site",
          "Créer des animations uniquement"
        ],
        answer: 1,
        explain: "Le CSS gère l'apparence visuelle, tandis que le HTML structure le contenu."
      },
      {
        q: "Quelle propriété permet de définir la couleur du texte d'un élément ?",
        options: ["background-color", "text-style", "color", "font-color"],
        answer: 2,
        explain: "color définit la couleur du texte ; background-color celle du fond."
      },
      {
        q: "Comment cible-t-on en CSS un élément portant class=\"carte\" ?",
        options: ["#carte", ".carte", "carte", "*carte"],
        answer: 1,
        explain: "Une classe se cible avec un point : .carte."
      },
      {
        q: "Quelle est la méthode recommandée pour lier du CSS à une page HTML dans un vrai projet ?",
        options: [
          "CSS en ligne (attribut style)",
          "CSS interne (balise <style>)",
          "CSS externe (fichier séparé lié via <link>)",
          "Le CSS ne peut pas être lié au HTML"
        ],
        answer: 2,
        explain: "Le CSS externe via <link> est la méthode recommandée pour séparer structure et apparence."
      },
      {
        q: "Pourquoi le contraste entre couleur de texte et couleur de fond est-il important ?",
        options: [
          "Pour respecter une norme esthétique arbitraire",
          "Pour garantir que le contenu reste lisible par tous les visiteurs",
          "Ce n'est pas important tant que le site est joli",
          "Uniquement pour le référencement"
        ],
        answer: 1,
        explain: "Un contraste suffisant garantit la lisibilité du contenu pour tous les visiteurs."
      }
    ],
    passScore: 3
  },
  synthesis: [
    { t: "p", v: "Le CSS transforme la structure brute du HTML en une interface cohérente avec l'identité définie au Module 2. Les sélecteurs ciblent les éléments, color et background-color gèrent les couleurs, et le CSS externe reste la méthode la plus robuste pour lier style et structure." }
  ]
};