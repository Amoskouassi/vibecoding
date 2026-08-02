// Module 5 — Vibecoder
window.COURSE_MODULE_5 = {
  id: 5,
  slug: "vibecoder",
  title: "Vibecoder",
  subtitle: "De l'idée (avec l'IA) au site en ligne",
  emoji: "🚀",
  durée: "3h30 – 4h30",
  prerequis: "Modules 1 à 4 terminés",
  hasSandbox: true,
  sandbox: {
    label: "Bac à sable : votre formulaire",
    html: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Formulaire vibecodé</title>\n</head>\n<body>\n  <h1>Inscription / Connexion</h1>\n  <form>\n    <label>Nom <input name=\"nom\" required></label><br>\n    <label>Prénom <input name=\"prenom\" required></label><br>\n    <label>Contact <input name=\"contact\" required></label><br>\n    <label>Email <input type=\"email\" name=\"email\" required></label><br>\n    <label>Profession <input name=\"profession\"></label><br>\n    <label>Ville <input name=\"ville\"></label><br>\n    <button type=\"submit\" name=\"action\" value=\"inscription\">Inscription</button>\n    <button type=\"submit\" name=\"action\" value=\"connexion\">Connexion</button>\n  </form>\n</body>\n</html>",
    css: "form {\n    max-width: 320px;\n    margin: 0 auto;\n    background: #f6f7f8;\n    padding: 20px;\n    border-radius: 8px;\n}"
  },
  objectifs: [
    "Identifier plusieurs outils d'IA utiles au codage et leurs spécificités",
    "Formuler des instructions (prompts) efficaces pour obtenir un code exploitable",
    "Lire et analyser un code fourni par une IA pour l'ajuster ou détecter une erreur",
    "Réaliser, avec l'aide de l'IA, un formulaire web responsive et fonctionnel"
  ],
  lessons: [
    {
      id: "5.1",
      title: "Outils IA utiles : Claude, ChatGPT, Copilot, DeepSeek",
      blocks: [
        { t: "p", v: "Le « vibecoding » désigne une façon de développer en s'appuyant fortement sur des IA génératives pour produire, corriger et faire évoluer du code, en formulant des demandes en langage naturel plutôt qu'en écrivant chaque ligne soi-même." },
        { t: "ul", v: [
          "Claude (Anthropic) : reconnu pour la qualité et lisibilité du code généré et sa capacité à tenir compte du contexte d'une longue présentation. Adapté pour construire un projet de A à Z en discutant de la logique avant de coder.",
          "ChatGPT (OpenAI) : très polyvalent, large base de connaissances, bonne capacité à expliquer le code produit — un bon compagnon d'apprentissage.",
          "GitHub Copilot : s'intègre dans un éditeur de code (ex. Visual Studio Code) et suggère du code au fil de la frappe, plutôt que de fonctionner comme un chat.",
          "DeepSeek : une alternative reconnue pour ses capacités en programmation et en raisonnement, à un coût souvent plus accessible."
        ] },
        { t: "p", v: "Il n'existe pas un « meilleur » outil universel : le bon choix dépend de votre façon de travailler, et rien n'empêche de combiner plusieurs outils." },
        { t: "trap", v: "Point de vigilance : quel que soit l'outil choisi, il reste un assistant, pas un remplaçant de votre jugement. C'est la raison d'être des Modules 1 à 4 : sans objectifs clairs, sans compréhension UX/UI, et sans notions de HTML/CSS, l'IA produit du code que vous ne pouvez ni évaluer ni corriger." }
      ]
    },
    {
      id: "5.2",
      title: "Prompter normalement (formuler des instructions efficaces)",
      blocks: [
        { t: "p", v: "Un « prompt » est simplement l'instruction que vous donnez à l'IA. La qualité du résultat dépend directement de la qualité de cette instruction." },
        { t: "h", v: "Les caractéristiques d'un bon prompt pour du code :" },
        { t: "ul", v: [
          "Le contexte. Précisez le projet dans lequel s'inscrit la demande, son objectif, son style visuel.",
          "La précision. « Fais un formulaire de contact » est vague ; « Crée un formulaire avec les champs Nom, Email et Message avec vérification » est exploitable.",
          "Les contraintes techniques. Précisez le langage ou la structure attendue (ex. HTML/CSS séparé)",
          "Les références visuelles. Décrivez votre prototype ou partagez une capture : cela réduit les allers-retours.",
          "L'itération. Procédez par étapes vérifiables plutôt que de tout demander d'un seul coup."
        ] },
        { t: "p", v: "Exemple de prompt peu efficace :" },
        { t: "code", lang: "texte", title: "Prompt peu efficace", v: "« Fais-moi un site pour vendre des cosmétiques. »" },
        { t: "p", v: "Exemple de prompt efficace, construit sur les modules précédents :" },
        { t: "code", lang: "texte", title: "Prompt efficace", v: "« Crée la page d'accueil en HTML et CSS séparés d'un site vitrine pour une marque de cosmétiques faits main. La page doit contenir un en-tête avec le nom de la marque, une section de présentation courte, une grille de 3 produits avec image/nom/prix, et un pied de page avec les informations de contact. Palette : #2C3E50 pour le texte, #F4D03F en accent. Design sobre, sans animations superflues. »" },
        { t: "p", v: "Ce second prompt mobilise vos acquis : objectif clair (Module 1), structure définie (Module 1), couleurs issues du prototype (Module 2), consigne de sobriété (Module 2), vocabulaire HTML/CSS (Modules 3 et 4)." }
      ]
    },
    {
      id: "5.3",
      title: "Lire et analyser le code fourni",
      blocks: [
        { t: "p", v: "Recevoir du code généré par une IA n'est utile que si vous pouvez, au moins partiellement, comprendre ce qu'il fait. Une méthode simple de lecture, en trois passes :" },
        { t: "ol", v: [
          "Repérer la structure globale. Identifiez dans le HTML les grandes zones (<header>, <nav>, <main>, <footer>...) avant d'entrer dans les détails.",
          "Suivre les classes entre le HTML et le CSS. Repérez les attributs class, puis retrouvez les règles correspondantes (.nom-de-classe { ... }).",
          "Repérer les zones interactives. Les balises <form>, <button>, ou les atributs onclick signalent les zones à tester."
        ] },
        { t: "h", v: "Que faire face à du code qu'on ne comprend pas entièrement ?" },
        { t: "p", v: "C'est une situation normale et fréquente. Le réflexe : demandez à l'IA d'expliquer (« explique-moi ce que fait ce bloc, ligne par ligne ») plutôt que de l'accepter aveuglément ou de le supprimer." },
        { t: "p", v: "Savoir repérer les signaux d'alerte :" },
        { t: "ul", v: [
          "Des balises ouvertes sans être fermées — souvent source de mise en page cassée (Module 3).",
          "Des noms de classes utilisés dans le HTML mais absents du CSS (ou l'inverse).",
          "Des couleurs ou textes qui ne correspondent pas à la demande — reformulez votre prompt."
        ] }
      ]
    },
    {
      id: "5.4",
      title: "De la théorie à la pratique : construire avec l'IA",
      blocks: [
        { t: "p", v: "Ce dernier module boucle la formation : vous allez mobiliser l'ensemble des compétences acquises pour piloter une IA dans la réalisation d'une fonctionnalité complète et interactive : un formulaire web." },
        { t: "p", v: "Un bon formulaire ne se limite pas à des champs de saisie : il doit guider l'utilisateur, vérifier les données essentielles, et confirmer la réussite ou l'échec de l'action — un principe de feedback venu du Module 2." }
      ]
    }
  ],
  exercise: {
    intro: [
      { t: "p", v: "À l'aide d'un outil d'IA de votre choix, concevez un formulaire web responsive. Testez-le directement dans le bac à sable ci-dessous." }
    ],
    consigne: {
      t: "ul",
      v: [
        "Les champs suivants : Nom, Prénom, Email, Ville, Profession, Contact.",
        "Deux actions distinctes possibles : Inscription et Connexion, menant chacune vers une page différente une fois l'action effectuée.",
        "Une vérification empêchant l'envoi tant que tous les champs obligatoires ne sont pas remplis.",
        "Le formulaire doit rester utilisable et lisible sur mobile comme sur ordinateur."
      ]
    },
    checklist: [
      "Tous les champs demandés sont présents dans le formulaire",
      "Les actions Inscription et Connexion mènent bien vers des pages différentes",
      "Un envoi avec un champ vide est bien bloqué, avec un message clair",
      "Le formulaire reste lisible et utilisable sur un écran de taille mobile",
      "Je suis capable d'expliquer, avec mes propres mots, ce que fait au moins 80% du code obtenu"
    ]
  },
  quiz: {
    questions: [
      {
        q: "Que désigne le terme « vibecoding » ?",
        options: [
          "Une méthode de codage sans aucun outil informatique",
          "Une façon de développer en s'appuyant fortement sur des IA génératives pour produire et ajuster du code",
          "Un langage de programmation spécifique",
          "Une certification officielle en développement web"
        ],
        answer: 1,
        explain: "Le vibecoding consiste à développer en s'appuyant fortement sur des IA génératives."
      },
      {
        q: "Pourquoi un prompt précis donne-t-il généralement un meilleur résultat qu'un prompt vague ?",
        options: [
          "Ce n'est pas vrai, la précision n'a aucun effet",
          "Parce que l'IA comble les vides d'un prompt vague par des choix par défaut qui ne correspondent pas forcément à l'intention",
          "Parce que les IA refusent les prompts trop courts",
          "Parce que la longueur du prompt est le seul critère qui compte"
        ],
        answer: 1,
        explain: "Un prompt vague laisse l'IA combler les vides avec des choix par défaut, souvent éloignés de votre intention."
      },
      {
        q: "Face à une portion de code générée qu'on ne comprend pas, la meilleure attitude est de :",
        options: [
          "La supprimer immédiatement par précaution",
          "L'accepter sans vérification",
          "Demander à l'IA de l'expliquer ligne par ligne",
          "Abandonner le projet"
        ],
        answer: 2,
        explain: "Le bon réflexe est de demander une explication ligne par ligne plutôt que de supprimer ou accepter aveuglément."
      },
      {
        q: "Qu'est-ce qu'un formulaire « responsive » ?",
        options: [
          "Un formulaire qui répond automatiquement aux emails",
          "Un formulaire qui reste utilisable et lisible sur différentes tailles d'écran (mobile, ordinateur...)",
          "Un formulaire codé uniquement en CSS",
          "Un formulaire sans aucun champ obligatoire"
        ],
        answer: 1,
        explain: "Responsive signifie que le formulaire reste lisible et utilisable sur mobile comme sur ordinateur."
      },
      {
        q: "Pourquoi est-il recommandé de procéder par itérations plutôt que de tout demander en un seul prompt géant ?",
        options: [
          "Parce que les IA limitent la taille des prompts à quelques mots",
          "Parce que cela permet de vérifier et corriger à chaque étape, plutôt que de tout reprendre en cas d'erreur",
          "Ce n'est pas recommandé, un seul prompt complet est toujours préférable",
          "Parce que chaque prompt doit obligatoirement porter sur une seule balise HTML"
        ],
        answer: 1,
        explain: "Itérer par petites étapes vérifiables permet de corriger tôt, plutôt que de devoir tout reprendre."
      }
    ],
    passScore: 3
  },
  synthesis: [
    { t: "p", v: "Ce module referme la boucle ouverte au Module 1 : les objectifs, la réflexion UX/UI et les bases HTML/CSS se rejoignent dans la pratique du vibecoding. Bien prompter, savoir lire le code, itérer par petites étapes : voilà ce qui distingue un vibecodeur autonome et efficace." }
  ],
  conclusion: [
    { t: "p", v: "Vous disposez désormais d'un parcours complet, de l'idée initiale jusqu'à un site fonctionnel et interactif : clarifier un objectif et une structure (Module 1), concevoir une expérience et une interface pensées pour l'utilisateur (Module 2), comprendre la structure du contenu (Module 3) et son habillage visuel (Module 4), et enfin piloter une IA pour construire votre projet (Module 5)." },
    { t: "p", v: "La meilleure façon de consolider ces acquis reste la pratique : reprenez le projet développé au fil des exercices et poursuivez son développement au-delà de cette formation, en appliquant la même rigueur méthodologique." }
  ]
};