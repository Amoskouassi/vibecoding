// Module 2 — UI x UX
window.COURSE_MODULE_2 = {
  id: 2,
  slug: "ui-ux",
  title: "UI x UX",
  subtitle: "Tout ce qui compte avant le pixel",
  emoji: "🎨",
  durée: "3h – 4h",
  prerequis: "Module 1 terminé",
  objectifs: [
    "Différencier clairement l'UX (expérience utilisateur) de l'UI (interface utilisateur)",
    "Appliquer les grands principes de bonnes pratiques UI/UX à un projet concret",
    "Comprendre pourquoi la simplicité prime sur la démonstration technique",
    "Réaliser un wireframe (maquette basse fidélité) avec Stitch",
    "Réaliser un prototype (maquette interactive haute fidélité) avec Figma"
  ],
  lessons: [
    {
      id: "2.1",
      title: "Comprendre l'UX (User Experience)",
      blocks: [
        { t: "p", v: "L'UX, ou expérience utilisateur, désigne tout ce que ressent une personne lorsqu'elle utilise votre site : est-ce agréable, est-ce frustrant, est-ce que ça répond à son besoin rapidement, est-ce qu'elle a envie de revenir ?" },
        { t: "p", v: "L'UX ne se limite pas à l'apparence — elle concerne l'ensemble du parcours : la facilité à trouver une information, la logique de navigation, la rapidité de chargement, la clarté des messages d'erreur, ou encore la sensation de confiance que le site inspire. On peut avoir un site magnifique visuellement mais avec une très mauvaise UX (boutons introuvables, parcours d'achat interminable, informations mal organisées)." },
        { t: "h", v: "Les piliers classiques de l'UX :" },
        { t: "ul", v: [
          "Utilité : le site répond-il à un vrai besoin de l'utilisateur ?",
          "Facilité d'usage (usabilité) : l'utilisateur comprend-il comment interagir sans effort ni formation préalable ?",
          "Trouvabilité : l'utilisateur trouve-t-il rapidement ce qu'il cherche ?",
          "Accessibilité : le site est-il utilisable par des personnes aux capacités variées (vue, motricité, matériel...) ?",
          "Crédibilité : l'utilisateur fait-il confiance à ce qu'il voit (informations claires, cohérentes, professionnelles) ?",
          "Désirabilité : le design suscite-t-il une émotion positive ?"
        ] },
        { t: "h", v: "Pourquoi l'UX doit se penser avant l'UI ?" },
        { t: "p", v: "Un piège très courant, y compris chez des concepteurs expérimentés, est de commencer par choisir des couleurs et des polices avant même de savoir ce que l'utilisateur doit accomplir sur chaque page. Or l'UI n'est que l'habillage de décisions qui devraient déjà avoir été prises au niveau de l'UX : quel parcours, quelles étapes, quelles informations à quel moment. Concevoir l'UI avant l'UX, c'est décorer une maison avant d'avoir posé les murs." }
      ]
    },
    {
      id: "2.2",
      title: "Comprendre l'UI (User Interface)",
      blocks: [
        { t: "p", v: "L'UI, ou interface utilisateur, désigne la partie visuelle et interactive avec laquelle l'utilisateur interagit concrètement : les boutons, les couleurs, les typographies, les icônes, les espacements, l'agencement des éléments à l'écran." },
        { t: "p", v: "Si l'UX répond à la question « est-ce que ça fonctionne bien pour l'utilisateur ? », l'UI répond à la question « est-ce que c'est agréable, clair et cohérent à regarder et à manipuler ? »." },
        { t: "h", v: "Les composantes principales de l'UI :" },
        { t: "ul", v: [
          "Typographie : le choix des polices, tailles et graisses de texte, qui doit garantir une lecture confortable et une hiérarchie claire (un titre doit se distinguer immédiatement d'un texte courant).",
          "Couleurs : au-delà de l'esthétique, les couleurs communiquent du sens (le rouge signale souvent une alerte ou une erreur, le vert une validation) et doivent respecter un contraste suffisant pour rester lisibles.",
          "Espacement (whitespace) : l'espace vide entre les éléments n'est pas du gaspillage — il aide l'œil à respirer et à distinguer les groupes d'informations.",
          "Composants : boutons, champs de formulaire, menus, cartes — leur apparence doit rester cohérente sur tout le site, pour que l'utilisateur reconnaisse instantanément à quoi sert chaque élément.",
          "Iconographie : des icônes cohérentes et reconnaissables réduisent la charge cognitive (l'utilisateur comprend au premier coup d'œil plutôt qu'en lisant un texte)."
        ] },
        { t: "p", v: "UX et UI travaillent ensemble, mais ne sont pas interchangeables. Une bonne UI ne sauve pas une mauvaise UX (un site magnifique mais au parcours d'achat incompréhensible reste un échec), et inversement, une excellente UX avec une UI négligée (couleurs illisibles, boutons mal alignés) donnera une impression d'amateurisme qui nuira à la confiance." }
      ]
    },
    {
      id: "2.3",
      title: "Comprendre les bonnes pratiques d'UI et d'UX",
      blocks: [
        { t: "p", v: "Certaines règles reviennent dans quasiment tous les projets de conception, quel que soit le secteur :" },
        { t: "h", v: "a) La cohérence" },
        { t: "p", v: "Un bouton « Valider » ne doit pas changer de couleur ou de forme d'une page à l'autre sans raison. La cohérence réduit l'effort mental de l'utilisateur : une fois appris à utiliser un élément, il doit pouvoir réutiliser cette connaissance partout." },
        { t: "h", v: "b) La hiérarchie visuelle" },
        { t: "p", v: "Tous les éléments d'une page n'ont pas la même importance. Un titre principal doit être plus imposant qu'un sous-titre, qui doit lui-même dominer le texte courant. Sans hiérarchie claire, l'utilisateur ne sait pas où poser le regard en premier." },
        { t: "h", v: "c) Le retour utilisateur (feedback)" },
        { t: "p", v: "Chaque action de l'utilisateur doit produire une réaction visible : un bouton cliqué doit changer d'apparence, un formulaire envoyé afficher une confirmation, une erreur être signalée clairement. L'absence de feedback laisse l'utilisateur dans l'incertitude (« est-ce que ça a marché ? »)." },
        { t: "h", v: "d) La loi de proximité" },
        { t: "p", v: "Les éléments liés entre eux doivent être visuellement proches (un libellé et son champ de formulaire, par exemple), tandis que les groupes non liés doivent être séparés par de l'espace." },
        { t: "h", v: "e) La règle des 3 clics (à nuancer)" },
        { t: "p", v: "On dit souvent qu'un utilisateur doit atteindre n'importe quelle information en 3 clics maximum. Ce n'est pas une loi absolue, mais un bon rappel : plus le chemin est long, plus on risque de perdre l'utilisateur en route." },
        { t: "h", v: "f) L'accessibilité comme standard, pas comme option" },
        { t: "p", v: "Prévoir des contrastes suffisants, des textes alternatifs pour les images, une navigation possible au clavier — ce ne sont pas des « bonus », mais des pratiques qui élargissent votre audience." }
      ]
    },
    {
      id: "2.4",
      title: "Préférer la simplicité à la performance",
      blocks: [
        { t: "p", v: "C'est un piège très spécifique aux débutants qui viennent de découvrir de nouvelles capacités (notamment grâce à l'IA) : la tentation de multiplier les effets, animations, options et fonctionnalités pour « montrer ce qu'on sait faire »." },
        { t: "h", v: "Pourquoi ce réflexe est contre-productif :" },
        { t: "ul", v: [
          "Il détourne l'attention de l'objectif. L'utilisateur n'est pas venu admirer vos animations : il est venu accomplir une tâche. Chaque élément superflu est un obstacle potentiel.",
          "Il ralentit le site. Des animations lourdes, des images non optimisées ou des scripts excessifs augmentent le temps de chargement.",
          "Il complexifie la maintenance. Plus il y a d'éléments, plus il y a de choses à corriger."
        ] },
        { t: "p", v: "Un principe directeur : la simplicité perçue comme une qualité, pas comme un manque. Les interfaces les plus utilisées au monde (moteurs de recherche, applications de messagerie) sont souvent d'une grande sobriété visuelle." },
        { t: "tip", v: "Astuce : à chaque fois que vous voulez ajouter un élément « parce que ce serait joli » ou « parce que l'IA peut le faire facilement », demandez-vous s'il sert directement l'objectif de l'utilisateur défini au Module 1. Si la réponse est non, gardez l'idée pour une version future." }
      ]
    },
    {
      id: "2.5",
      title: "Concevoir un wireframe avec Stitch",
      blocks: [
        { t: "p", v: "Un wireframe est une maquette « basse fidélité » : un squelette visuel de vos pages, sans couleurs définitives, sans typographie soignée, sans images finales. Son but est de valider l'agencement — où va le menu, où le titre, où le bouton — avant d'investir dans les détails." },
        { t: "h", v: "Pourquoi passer par un wireframe avant un prototype détaillé ?" },
        { t: "p", v: "Modifier l'agencement général à l'étape du wireframe prend quelques secondes ; le même changement une fois le design final réalisé prend beaucoup plus de temps. Le wireframe valide donc les décisions structurelles à moindre coût." },
        { t: "h", v: "Étapes pratiques avec Stitch :" },
        { t: "ol", v: [
          "Reprenez l'arborescence définie au Module 1 et sélectionnez la première page à travailler (généralement la page d'accueil).",
          "Dans Stitch, créez un nouveau cadre correspondant à la taille d'écran ciblée (mobile ou desktop, selon votre public).",
          "Placez les blocs génériques dans l'ordre logique de lecture : en-tête/navigation, contenu principal, appel à l'action, pied de page.",
          "Utilisez des formes simples (rectangles, lignes, texte générique) plutôt que du contenu final.",
          "Vérifiez la hiérarchie : l'élément le plus important doit être le plus visible, même en version basse fidélité.",
          "Répétez l'exercice pour chaque page clé de votre arborescence."
        ] }
      ]
    },
    {
      id: "2.6",
      title: "Concevoir un prototype avec Figma",
      blocks: [
        { t: "p", v: "Une fois le wireframe validé, l'étape suivante consiste à créer un prototype : une maquette haute fidélité, avec les couleurs, typographies, images et textes définitifs, et souvent avec des interactions simulées." },
        { t: "p", v: "Pourquoi prototyper avant de coder ? Un prototype permet de tester le parcours sans écrire une seule ligne de code — et donc sans dépendre de l'IA pour visualiser chaque changement. C'est aussi un support précieux à fournir à l'IA lors du codage." },
        { t: "h", v: "Étapes pratiques avec Figma :" },
        { t: "ol", v: [
          "Reprenez votre wireframe Stitch comme base structurelle.",
          "Appliquez votre identité visuelle : palette de couleurs (2-3 maximum pour rester cohérent), typographie (une police titres / une police texte), logo.",
          "Remplacez les éléments génériques par du contenu réel dans la mesure du possible.",
          "Créez des composants réutilisables (boutons, champs) une seule fois puis dupliquez-les — cela garantit la cohérence.",
          "Reliez les écrans entre eux (prototypage) pour simuler et tester le parcours.",
          "Testez le prototype vous-même, ou avec un tiers : le parcours est-il compréhensible sans explication ?"
        ] }
      ]
    }
  ],
  exercise: {
    intro: [
      { t: "p", v: "Reprenez le projet brainstormé au Module 1 pour lancer la conception de son interface." }
    ],
    consigne: {
      t: "ol",
      v: [
        "Réalisez un wireframe (avec Stitch, ou sur papier) de votre page d'accueil et d'une deuxième page de votre choix.",
        "Une fois le wireframe validé (agencement logique, hiérarchie claire), transformez-le en prototype Figma avec vos couleurs, votre typographie et du contenu réel.",
        "Reliez au moins deux écrans de votre prototype Figma avec une interaction cliquable.",
        "Listez 3 éléments que vous avez volontairement choisi de ne PAS ajouter, en expliquant pourquoi (application directe du point 2.4)."
      ]
    },
    checklist: [
      "Ma page d'accueil a une hiérarchie visuelle claire",
      "Mon wireframe est simple (formes, pas de détail final)",
      "Mon prototype Figma reprend mon wireframe",
      "J'ai relié au moins deux écrans par une interaction",
      "J'ai identifié au moins 3 éléments volontairement exclus, en justifiant pourquoi"
    ]
  },
  quiz: {
    questions: [
      {
        q: "L'UX (expérience utilisateur) concerne principalement :",
        options: [
          "Les couleurs et polices du site",
          "Le ressenti global et la facilité d'usage du parcours utilisateur",
          "Le code JavaScript utilisé",
          "Le choix de l'hébergeur"
        ],
        answer: 1,
        explain: "L'UX désigne tout ce que ressent l'utilisateur et sa facilité d'usage : elle dépasse les couleurs et polices."
      },
      {
        q: "Pourquoi doit-on réfléchir à l'UX avant l'UI ?",
        options: [
          "L'UI n'a aucune importance",
          "Parce que l'UI n'est que l'habillage visuel de décisions qui relèvent de l'UX",
          "Parce que Figma l'exige techniquement",
          "Ce n'est pas nécessaire, les deux sont indépendants"
        ],
        answer: 1,
        explain: "L'UI habille des décisions (parcours, étapes, informations) qui doivent d'abord être posées au niveau de l'UX."
      },
      {
        q: "Le feedback utilisateur (retour visuel après une action) sert à :",
        options: [
          "Ralentir volontairement le site",
          "Rassurer l'utilisateur que son action a bien été prise en compte",
          "Remplacer la navigation",
          "Décorer la page"
        ],
        answer: 1,
        explain: "Le feedback est une réaction visible qui confirme à l'utilisateur que son action a bien été prise en compte."
      },
      {
        q: "Pourquoi éviter de multiplier les effets et fonctionnalités « pour montrer ce qu'on sait faire » ?",
        options: [
          "Parce que cela détourne l'attention de l'objectif et alourdit le site",
          "Parce que l'IA ne sait pas générer d'animations",
          "Parce que c'est interdit par la loi",
          "Ce n'est pas un problème réel"
        ],
        answer: 0,
        explain: "Multiplier les effets détourne l'attention de l'objectif de l'utilisateur et alourdit le site : la simplicité prime."
      },
      {
        q: "Quelle est la différence principale entre un wireframe et un prototype ?",
        options: [
          "Il n'y a aucune différence",
          "Le wireframe est une version basse fidélité de l'agencement, le prototype une version haute fidélité avec le design et des interactions",
          "Le wireframe se fait en HTML, le prototype en CSS",
          "Le prototype précède toujours le wireframe"
        ],
        answer: 1,
        explain: "Le wireframe valide l'agencement basse fidélité ; le prototype ajoute le design final et les interactions."
      }
    ],
    passScore: 3
  },
  synthesis: [
    { t: "p", v: "L'UX pose les fondations (le parcours, la logique), l'UI habille ces fondations (les couleurs, les formes, la typographie). Travailler dans cet ordre — et rester sobre plutôt que de chercher à impressionner — permet de construire des interfaces compréhensibles d'emblée. Le wireframe et le prototype valident ces choix avant d'investir dans le code." }
  ]
};