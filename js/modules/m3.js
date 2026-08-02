// Module 3 — Notions HTML
window.COURSE_MODULE_3 = {
  id: 3,
  slug: "html",
  title: "Avoir des notions en HTML",
  subtitle: "La structure de vos pages",
  emoji: "🧱",
  durée: "2h30 – 3h",
  prerequis: "Modules 1 et 2 terminés",
  hasSandbox: true,
  sandbox: {
    label: "Bac à sable HTML",
    html: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Mon exercice HTML</title>\n</head>\n<body>\n  <h1>Mon titre de page</h1>\n  <p>Modifiez ce code et observez le résultat à droite.</p>\n  <a href=\"https://exemple.com\">Un lien</a>\n  <img src=\"https://picsum.photos/200/120\" alt=\"Image d'exemple\">\n</body>\n</html>",
    css: ""
  },
  objectifs: [
    "Expliquer ce qu'est le HTML et à quoi il sert",
    "Identifier les outils nécessaires pour écrire du HTML",
    "Reconnaître les composantes essentielles d'une page HTML",
    "Comprendre la logique du balisage (tags / balises)",
    "Utiliser quelques balises HTML courantes pour structurer une page simple"
  ],
  lessons: [
    {
      id: "3.1",
      title: "C'est quoi le HTML ?",
      blocks: [
        { t: "p", v: "HTML signifie HyperText Markup Language, littéralement « langage de balisage hypertexte ». Ce n'est pas, à proprement parler, un langage de programmation (il ne contient pas de logique, de calculs ou de conditions) : c'est un langage de structuration de contenu." },
        { t: "p", v: "Concrètement, le HTML permet de dire à un navigateur web : « ceci est un titre », « ceci est un paragraphe », « ceci est une image », « ceci est un lien vers une autre page ». Le navigateur (Chrome, Firefox, Safari...) lit ces instructions et les affiche à l'écran sous une forme visuelle compréhensible." },
        { t: "tip", v: "Astuce : imaginez le HTML comme le squelette d'un corps humain. Le squelette donne la structure (où sont la tête, les bras, les jambes), mais ce n'est pas lui qui donne l'apparence finale — ce sera le rôle du CSS (Module 4) — ni le mouvement, celui des langages comme JavaScript (Module 5)." }
      ]
    },
    {
      id: "3.2",
      title: "À quoi ça sert ?",
      blocks: [
        { t: "p", v: "Le HTML sert à structurer et donner du sens au contenu d'une page web, afin que :" },
        { t: "ul", v: [
          "Le navigateur sache comment l'afficher (un titre en gros, une liste avec des puces, une image à sa place).",
          "Les moteurs de recherche (comme Google) comprennent la hiérarchie et l'importance du contenu, ce qui influence le référencement.",
          "Les technologies d'assistance (lecteurs d'écran) puissent interpréter correctement la page."
        ] },
        { t: "p", v: "Sans HTML, un navigateur ne recevrait qu'un bloc de texte brut, sans distinction entre un titre, un paragraphe ou un lien." },
        { t: "h", v: "Pourquoi apprendre le HTML si l'IA peut le générer à ma place ?" },
        { t: "p", v: "Une réponse tient en une phrase : vous n'avez pas besoin de savoir écrire tout le HTML vous-même, mais vous devez être capable de le lire pour vérifier que ce que l'IA a produit correspond à votre intention, et de le corriger pour de petits ajustements sans reprompter à chaque fois. C'est l'objectif de ce module : assez de bases pour rester acteur de votre projet, sans devenir développeur professionnel." }
      ]
    },
    {
      id: "3.3",
      title: "De quoi a-t-on besoin pour faire du HTML ?",
      blocks: [
        { t: "p", v: "Contrairement à beaucoup de compétences techniques, se lancer en HTML demande très peu de matériel :" },
        { t: "ul", v: [
          "Un éditeur de texte ou de code. N'importe quel éditeur fonctionne, mais un éditeur dédié au code (comme Visual Studio Code, gratuit) facilite le travail : coloration syntaxique, autocomplétion, suggestions.",
          "Un navigateur web, pour visualiser le résultat : ouvrez votre fichier .html dans Chrome, Firefox ou tout autre navigateur.",
          "Un fichier avec l'extension .html. Le HTML ne nécessite ni compilation ni installation : un simple fichier texte suffit."
        ] },
        { t: "p", v: "Il n'y a donc aucune barrière matérielle à l'apprentissage du HTML : un ordinateur basique suffit." }
      ]
    },
    {
      id: "3.4",
      title: "Composantes d'une page HTML",
      blocks: [
        { t: "p", v: "Toute page HTML respecte une structure de base, un squelette minimal sur lequel vient ensuite s'ajouter le contenu :" },
        { t: "code", lang: "html", title: "structure.html", v: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Titre de ma page</title>\n</head>\n<body>\n    <!-- Le contenu visible de la page va ici -->\n</body>\n</html>" },
        { t: "h", v: "Décomposons chaque élément :" },
        { t: "ul", v: [
          "<!DOCTYPE html> : indique au navigateur qu'il s'agit d'un document HTML moderne (HTML5). Toujours la première ligne.",
          "<html> : la balise « racine », qui englobe tout le contenu. L'attribut lang=\"fr\" précise la langue.",
          "<head> : la « tête » de la page, qui contient des informations invisibles mais essentielles (titre de l'onglet, encodage, liens CSS).",
          "<meta charset=\"UTF-8\"> : précise l'encodage des caractères (accents, ç, à...).",
          "<title> : le titre qui apparaît dans l'onglet du navigateur — à ne pas confondre avec un titre visible.",
          "<body> : le « corps », qui contient tout ce que le visiteur voit réellement."
        ] }
      ]
    },
    {
      id: "3.5",
      title: "Notions de balisage",
      blocks: [
        { t: "p", v: "Le HTML fonctionne par un système de balises (ou tags) qui viennent « marquer » un contenu pour lui donner du sens." },
        { t: "p", v: "La règle générale : une balise s'ouvre avec <nom> et se ferme avec </nom> (notez le slash /)." },
        { t: "code", lang: "html", title: "Un paragraphe", v: "<p>Ceci est un paragraphe.</p>" },
        { t: "p", v: "Les balises peuvent s'imbriquer ; comme des poupées russes :" },
        { t: "code", lang: "html", title: "Imbrication", v: "<p>Voici un texte avec un mot <strong>important</strong> à l'intérieur.</p>" },
        { t: "p", v: "La règle d'or de l'imbrication : une balise ouverte en dernier doit être fermée en premier. Certaines balises n'ont pas de fermeture (auto-fermantes), comme l'image (<img>) ou le saut de ligne (<br>)." },
        { t: "p", v: "Les attributs ajoutent des informations supplémentaires à une balise, à l'intérieur du chevron ouvrant :" },
        { t: "code", lang: "html", title: "Un lien avec attribut href", v: "<a href=\"https://exemple.com\">Visitez ce site</a>" },
        { t: "p", v: "Un attribut s'écrit toujours nom=\"valeur\"." }
      ]
    },
    {
      id: "3.6",
      title: "Quelques balises utiles",
      blocks: [
        { t: "p", v: "Voici les balises les plus fréquemment utilisées :" },
        { t: "table", head: ["Balise", "Rôle"], rows: [
          ["<h1> à <h6>", "Titres, du plus important (h1) au moins important (h6) — une page ne devrait avoir qu'un seul <h1>"],
          ["<p>", "Paragraphe de texte"],
          ["<a href=\"...\">", "Lien hypertexte vers une autre page ou un site"],
          ["<img src=\"...\" alt=\"...\">", "Image — l'attribut alt décrit l'image pour l'accessibilité et le référencement"],
          ["<div>", "Conteneur générique, pour regrouper et organiser des sections"],
          ["<ul> / <ol> / <li>", "Liste à puces (ul) ou numérotée (ol), chaque élément étant un <li>"],
          ["<button>", "Bouton cliquable"],
          ["<form>", "Conteneur pour un formulaire (voir Module 5)"],
          ["<input>", "Champ de saisie à l'intérieur d'un formulaire"],
          ["<nav>", "Zone de navigation (menu du site)"],
          ["<footer>", "Pied de page"]
        ] },
        { t: "tip", v: "Astuce mémo : les titres (h1 à h6) fonctionnent comme un sommaire — respectez toujours l'ordre logique (ne passez pas d'un h1 à un h4 sans raison) pour garder une structure claire." }
      ]
    }
  ],
  exercise: {
    intro: [
      { t: "p", v: "Concevez une page HTML simple : écrivez-la dans le bac à sable ci-dessous, qui affiche le résultat en temps réel." }
    ],
    consigne: {
      t: "ul",
      v: [
        "Un titre principal (<h1>) pour la page.",
        "Un lien hypertexte vers l'adresse malkiabcosmetics.vercel.com.",
        "Une image (vous pouvez utiliser n'importe quelle image disponible, ou une adresse d'image trouvée en ligne)."
      ]
    },
    checklist: [
      "Mon fichier commence bien par <!DOCTYPE html>",
      "J'ai un <h1> unique et visible",
      "Mon lien utilise bien l'attribut href avec l'adresse complète (https://...)",
      "Mon image utilise bien un attribut alt décrivant son contenu",
      "J'ai ouvert mon fichier dans un navigateur pour vérifier le rendu"
    ]
  },
  quiz: {
    questions: [
      {
        q: "Que signifie HTML ?",
        options: [
          "High Text Modern Language",
          "HyperText Markup Language",
          "Home Tool Making Language",
          "Hyper Transfer Machine Learning"
        ],
        answer: 1,
        explain: "HTML = HyperText Markup Language, le langage de balisage hypertexte."
      },
      {
        q: "Le HTML est-il un langage de programmation au sens strict ?",
        options: [
          "Oui, il contient des boucles et des conditions",
          "Non, c'est un langage de structuration / balisage de contenu",
          "Oui, mais uniquement pour les formulaires",
          "Non, ce n'est pas un langage du tout"
        ],
        answer: 1,
        explain: "Le HTML ne contient pas de logique, de boucles ou de conditions : il structure le contenu."
      },
      {
        q: "Où place-t-on le contenu visible d'une page HTML (textes, images...) ?",
        options: [
          "Dans la balise <head>",
          "Dans la balise <title>",
          "Dans la balise <body>",
          "Dans la balise <!DOCTYPE html>"
        ],
        answer: 2,
        explain: "Le <body> contient tout ce que le visiteur voit à l'écran ; le <head> contient les métas."
      },
      {
        q: "Comment ferme-t-on correctement une balise <p> ?",
        options: ["<p/>", "<end p>", "</p>", "On ne ferme jamais une balise <p>"],
        answer: 2,
        explain: "Une balise se ferme avec un slash : </p>."
      },
      {
        q: "À quoi sert l'attribut alt sur une balise <img> ?",
        options: [
          "À changer la taille de l'image",
          "À décrire l'image pour l'accessibilité et le référencement",
          "À ajouter un lien sur l'image",
          "À la rendre cliquable"
        ],
        answer: 1,
        explain: "alt décrit l'image, ce qui sert à l'accessibilité et au référencement."
      }
    ],
    passScore: 3
  },
  synthesis: [
    { t: "p", v: "Le HTML donne une structure et du sens au contenu : titres, paragraphes, liens, images. Il ne nécessite aucun matériel particulier, et sa logique de balises est simple une fois les bases posées. Ce module vous donne de quoi voir, comprendre et ajuster le code que l'IA générera." }
  ]
};