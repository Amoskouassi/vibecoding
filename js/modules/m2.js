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
        { t: "p", v: "Un wireframe est une maquette « basse fidélité » : un squelette visuel de vos pages, sans couleurs ou typographie définitives. Son but est uniquement de valider l'agencement — où va le menu, où le titre, où le bouton — avant d'investir du temps dans le détail." },
        { t: "h", v: "C'est quoi Stitch ?" },
        { t: "p", v: "Stitch (de Google Labs) est un outil de création d'interfaces 100 % en ligne et gratuit : vous décrivez en langage simple la page que vous voulez, et il en génère une version visuelle presque instantanément. Aucune connaissance en design n'est nécessaire : si vous savez décrire, Stitch peut le dessiner." },
        { t: "p", v: "Combien de fois un « wireframe » est-il une simple esquisse ? Avec l'IA, Stitch va plus loin que les rectangles : il vous donne directement une maquette structurée (zones, boutons, textes) que vous pouvez ensuite ajuster, dupliquer et relier entre écrans pour simuler un parcours." },
        { t: "h", v: "Comment y accéder (aucun prérequis)" },
        { t: "ol", v: [
          "Ouvrez votre navigateur et allez à l'adresse : stitch.withgoogle.com (le site officiel du produit).",
          "Connectez-vous avec un compte Google (gratuit). Aucune installation : tout se passe dans le navigateur.",
          "Au lancement, préciser si vous concevez pour Web (site) ou Mobile (application).",
          "Cliquez sur « Nouveau projet » pour ouvrir votre espace de travail (un grand canevas)."
        ] },
        { t: "tip", v: "Choisissez bien Web ou Mobile dès le départ : cela détermine la taille et la disposition des éléments générés. Un écran de téléphone n'a rien à voir avec un écran d'ordinateur !" },
        { t: "h", v: "Créer votre premier wireframe : un « prompt »" },
        { t: "p", v: "La langue de Stitch, c'est la description. Écrivez en phrase(s) simple(s) et précise(s) — exactement le principe de « prompter normalement » que vous approfondirez au Module 5. Nommez la page, son contenu, et l'ordre des sections." },
        { t: "code", lang: "texte", title: "Exemple de prompt (à personnaliser)", v: "Crée la page d'accueil d'un site vitrine pour une marque de cosmétiques faits main. Une barre de navigation avec le nom de la marque, une grande section d'accueil avec un slogan et un bouton « Découvrir », une grille de 3 produits (image, nom, prix), puis un pied de page avec les coordonnées. Design sobre et aéré." },
        { t: "p", v: "Appuyez sur le bouton de génération. En quelques dizaines de secondes, Stitch affiche une première version. Ne cherchez pas la perfection : ce n'est qu'un point de départ sur lequel on adjuste ensuite." },
        { t: "h", v: "Modifier le résultat" },
        { t: "ul", v: [
          "Renvoyez une phrase pour ajuster : « agrandis le titre », « passe les 3 produits en 2 », « change la couleur d'accent »… On recommence ou on raffine par petites étapes.",
          "Modifiez directement les textes en cliquant dessus et en tapant (nom de la marque, slogans de démonstration).",
          "Si vous avez dessiné une esquisse de votre wireframe au Module 1, Stitch permet de la téléverser (mode sketch / experimental) pour qu'il la retravaille en écran numérique."
        ] },
        { t: "h", v: "Relier les écrans : premier prototype" },
        { t: "p", v: "Créez plusieurs écrans (page d'accueil, fiche produit, contact…) puis reliez-les par des zones cliquables. Stitch détecte les boutons et propose des connexions automatiques. Lancez ensuite l'aperçu pour simuler le parcours d'un visiteur avant même d'écrire du code." },
        { t: "h", v: "Exporter et bonnes pratiques" },
        { t: "ul", v: [
          "Copier vers Figma : envoyez votre maquette dans Figma (coller avec Ctrl/Cmd+V) pour la suite du module.",
          "Code : l'onglet code permet de récupérer le HTML/CSS ; utile plus tard, mais pas obligatoire ici.",
          "Capture : enregistrez une image (PNG) de vos écrans — elle servira pour l'exercice ci-dessous.",
          "Petit à petit : validez l'agencement d'une page avant de passer à la suivante.",
          "Sobre et cohérent (Module 2.4) : ne multipliez pas les effets, gardez ce qui sert l'objectif du Module 1."
        ] },
        { t: "trap", v: "Stitch évolue vite (produit Google Labs) : les noms des boutons peuvent changer ou l'écran se présenter différemment. En cas de doute, regardez le canevas et le menu — les actions essentielles (nouveau projet, prompt, copie vers Figma, export) restent toujours accessibles." }
      ]
    },
    {
      id: "2.6",
      title: "Concevoir un prototype avec Figma",
      blocks: [
        { t: "p", v: "Une fois le wireframe validé (l'agencement est bon), on passe au « prototype » : une maquette haute fidélité avec les couleurs, la typographie, les images et des interactions cliquables. Figma est l'outil de référence pour ça, gratuit et 100 % en ligne." },
        { t: "h", v: "C'est quoi Figma, et pourquoi l'utiliser ?" },
        { t: "p", v: "Figma est un logiciel de design d'interfaces utilisé par des millions de professionnels. Sa version gratuite suffit largement pour cette formation. Il permet de dessiner un écran au pixel près, puis de le relier à d'autres écrans pour simuler de vraies missions cliquables — le résultat ressemble déjà à votre futur site, sans avoir écrit une ligne de code." },
        { t: "h", v: "Comment y accéder (compte gratuit)" },
        { t: "ol", v: [
          "Allez à figma.com.",
          "Créez un compte gratuit (email ou via votre Google).",
          "Vous pouvez travailler dans le navigateur ou installer l'application de bureau : les deux sont équivalents.",
          "Cliquez sur « + Nouveau fichier » / « Nouveau design » pour démarrer votre zone de travail."
        ] },
        { t: "h", v: "Repères en 30 secondes : l'écran Figma" },
        { t: "ul", v: [
          "Gauche : les outils (sélection, cadre/Frame, texte, dessin) — qui ressemblent à la boîte à outils.",
          "Au centre : le canevas où vous dessinez vos écrans.",
          "À droite : le panneau des propriétés (couleurs, tailles, style du texte, disposition) de l'élément sélectionné."
        ] },
        { t: "h", v: "1. Créer un cadre (Frame) — votre écran" },
        { t: "p", v: "Une Frame est une zone de votre écran. Choisissez l'outil Frame (raccourci F) et sélectionnez, dans le panneau de droite, une taille prédéfinie : par exemple « Desktop 1440 × 900 » pour un site, ou « iPhone 14 / Mobile 375 × 812 » pour un format mobile." },
        { t: "h", v: "2. Importer votre wireframe" },
        { t: "p", v: "Deux possibilités : si votre maquette vient de Stitch, utilisez « Copier vers Figma » puis collez (Ctrl/Cmd+V) — elle arrive structurée. Sinon, glissez-déposez votre capture ou votre dessin dans le canevas et utilisez-le comme référence à reproduire." },
        { t: "h", v: "3. Habiller votre prototype (couleurs, textes, composants)" },
        { t: "ul", v: [
          "Couleurs : sélectionnez un élément, puis dans le panneau de droite choisissez la couleur de remplissage. Reprenez les codes choisis au Module 2 (ex. #2C3E50, #F4D03F).",
          "Textes : avec l'outil Texte (T), remplacez les textes d'exemple par votre contenu réel (titre, produit, contact).",
          "Composants : créez un bouton une fois, puis dupliquez-le. Pour garder la cohérence (Module 2.3), transformez-le en composant (clic droit → « Créer un composant ») : modifier en un seul endroit mettra à jour toutes les copies."
        ] },
        { t: "h", v: "4. Relier les écrans par des interactions" },
        { t: "ol", v: [
          "Cliquez sur l'onglet « Prototype » en haut à droite.",
          "Sélectionnez un bouton ou une zone d'action, puis faites glisser la main vers l'écran de destination (une flèche se crée).",
          "Réglez le déclencheur : « Sur clic » → « Open/Aller à » l'écran choisi.",
          "Appuyez sur « Play / Lire » pour tester le parcours comme si vous étiez un visiteur."
        ] },
        { t: "h", v: "5. Exporter et partager" },
        { t: "ul", v: [
          "Partage : bouton « Partager » en haut à droite pour obtenir un lien et inviter qui vous voulez voir/tester.",
          "Export d'image : sélectionnez un écran → panneau de droite → « Export » → PNG. C'est cette image que vous pourrez téléverser dans l'exercice ci-dessous.",
          "Validez votre parcours (bonne pratique Module 2.3) : demandez à une tierce personne si elle comprend où cliquer sans explication."
        ] },
        { t: "tip", v: "Commencez petit : un écran accueil + un écran produit + un écran contact, reliés par vos boutons d'action. Trois écrans bien reliés valent mieux que dix écrans isolés." }
      ]
    }
  ],
  exercise: {
    intro: [
      { t: "p", v: "Reprenez le projet brainstormé au Module 1. Cette fois, vous le transformez en maquettes : d'abord un wireframe avec Stitch, puis un prototype avec Figma. À la fin, téléversez votre travail ci-dessous." }
    ],
    consigne: {
      t: "ol",
      v: [
        "Grâce à Stitch, créez le wireframe de votre page d'accueil puis d'une deuxième page (Stitch, ou sur papier si l'outil est indisponible).",
        "Reliez au moins deux écrans de votre maquette pour simuler un parcours.",
        "Transformez le wireframe en prototype Figma : appliquez vos couleurs, votre typographie et du contenu réel.",
        "Reliez au moins deux écrans de votre prototype Figma avec une interaction cliquable.",
        "Téléversez ci-dessous (upload) une image de votre wireframe et de votre prototype.",
        "Listez 3 éléments que vous avez volontairement choisi de ne PAS ajouter, en expliquant pourquoi (Module 2.4)."
      ]
    },
    uploads: [
      { id: "wireframe", label: "Mon wireframe", hint: "Image (PNG/JPG) de votre page d'accueil et de la seconde page réalisées dans Stitch." },
      { id: "prototype", label: "Mon prototype Figma", hint: "Image (PNG/JPG) d'un ou plusieurs de vos écrans reliés dans Figma." }
    ],
    checklist: [
      "J'ai réalisé un wireframe de l'accueil et d'une 2e page",
      "Mon wireframe est simple (zones, pas de détails finaux)",
      "Mon prototype Figma reprend le wireframe avec mon identité visuelle",
      "J'ai relié au moins deux écrans par une interaction (Figma)",
      "J'ai téléversé mon wireframe et mon prototype",
      "J'ai listé au moins 3 éléments volontairement exclus, en justifiant pourquoi"
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