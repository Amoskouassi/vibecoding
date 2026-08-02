// Module 1 — Brainstorming
window.COURSE_MODULE_1 = {
  id: 1,
  slug: "brainstorming",
  title: "Brainstorming",
  subtitle: "De l'idée au projet structuré",
  emoji: "💡",
  durée: "2h30 – 3h",
  prerequis: "Aucun",
  objectifs: [
    "Formuler des objectifs clairs et mesurables pour un projet vibecodé",
    "Identifier les ressources nécessaires avant de commencer à coder",
    "Structurer un projet de façon logique (arborescence, pages, flux)",
    "Établir un cahier des charges fonctionnel minimal",
    "Esquisser une première réflexion UI/UX avant la phase de conception"
  ],
  lessons: [
    {
      id: "1.1",
      title: "Établissez vos objectifs",
      blocks: [
        { t: "p", v: "Avant d'ouvrir un outil d'IA ou un éditeur de code, il faut répondre à une question simple, mais que la plupart des débutants sautent : pourquoi ce projet existe-t-il ?" },
        { t: "p", v: "C'est le problème, une erreur extrêmement fréquente en vibecoding : on ouvre Claude ou ChatGPT, on tape « fais-moi un site pour vendre mes produits », et on regarde ce qui sort. Le problème, c'est que l'IA va combler tous les vides avec des choix par défaut — et ces choix ne correspondent presque jamais à ce que vous vouliez réellement. Plus votre objectif est flou en entrant dans le projet, plus vous devrez recommencer, corriger, reprompter. Le temps « gagné » en sautant la réflexion se paie plus tard, avec intérêts." },
        { t: "h", v: "Les trois critères d'un bon objectif" },
        { t: "ul", v: [
          "Spécifique. « Créer un site » ne dit rien. « Créer un site vitrine pour présenter et vendre des cosmétiques faits main à des clientes en Côte d'Ivoire » dit énormément de choses : le secteur, le public, la fonction (vitrine + vente), la zone géographique. Chacun de ces éléments influencera plus tard vos choix de structure, de fonctionnalités, de ton visuel.",
          "Mesurable. Un objectif sans critère de réussite ne permet jamais de savoir si le projet est « fini » ou « bon ». Demandez-vous : concrètement, à quoi verrai-je que ça marche ? Exemples de critères mesurables : « un visiteur peut passer une commande en moins de 3 clics », « le formulaire de contact envoie bien un email de confirmation », « le site s'affiche correctement sur mobile ».",
          "Limité dans le temps. Un projet sans échéance a tendance à s'étirer indéfiniment, surtout en solo. Fixez-vous une date, même approximative (« prototype fonctionnel dans 2 semaines »), pour créer une pression saine qui vous pousse à avancer plutôt qu'à peaufiner sans fin."
        ] },
        { t: "h", v: "Pourquoi c'est encore plus important avec l'IA qu'avec le code « à la main » ?" },
        { t: "p", v: "Quand vous codez manuellement, chaque ligne vous force à réfléchir : vous ne pouvez pas avancer sans savoir ce que vous construisez. Avec le vibecoding, l'IA peut produire des dizaines de lignes de code en quelques secondes — ce qui veut dire qu'elle peut aussi vous éloigner de votre vision initiale tout aussi vite, si cette vision n'était pas claire dès le départ. Un objectif bien formulé devient donc votre boussole : à chaque réponse de l'IA, vous pouvez vous demander « est-ce que ça sert mon objectif ? » plutôt que de suivre passivement ce qui est généré." },
        { t: "tip", v: "Astuce pratique : écrivez votre objectif en une seule phrase, et gardez-la affichée (dans un fichier texte, un post-it, peu importe) pendant toute la durée du projet. Si vous n'arrivez pas à la formuler en une phrase, c'est le signe que le projet n'est pas encore assez clair dans votre tête — et il vaut mieux continuer à y réfléchir plutôt que de commencer à coder." },
        { t: "h", v: "Exemple concret — du flou au clair" },
        { t: "table", head: ["Version floue", "Version travaillée"], rows: [
          ["« Je veux un site pour mon business »", "« Je veux un site vitrine à une page qui présente mes 3 services de coaching, avec un formulaire de prise de rendez-vous, destiné à des clients qui me découvrent via Instagram »"]
        ] },
        { t: "p", v: "Remarquez que la version travaillée répond déjà, en creux, à plusieurs questions que vous vous poseriez plus tard : combien de pages (une), quelles fonctionnalités (présentation + prise de RDV), quel public (venant d'Instagram, donc probablement sur mobile)." }
      ]
    },
    {
      id: "1.2",
      title: "Listez ce dont vous aurez besoin pour les atteindre",
      blocks: [
        { t: "p", v: "Une fois l'objectif clarifié, l'étape suivante consiste à inventorier ce qu'il faudra réunir pour l'atteindre. Beaucoup de projets s'arrêtent en cours de route non pas parce que l'idée était mauvaise, mais parce qu'une ressource essentielle manquait et n'avait pas été anticipée (un logo, un texte de présentation, un nom de domaine disponible...)." },
        { t: "p", v: "On distingue généralement quatre catégories de besoins :" },
        { t: "h", v: "a) Besoins techniques" },
        { t: "p", v: "Ce sont les outils et infrastructures nécessaires pour que le site existe et soit accessible :" },
        { t: "ul", v: [
          "Un nom de domaine (l'adresse du site, ex. monsite.com)",
          "Un hébergement (le « terrain » où le site est stocké et servi aux visiteurs — des plateformes comme Vercel ou Netlify sont souvent utilisées en vibecoding car gratuites pour démarrer)",
          "Un outil d'IA pour coder (Claude, ChatGPT, Copilot, DeepSeek — voir Module 5)",
          "Un éditeur de code (même basique) pour organiser les fichiers générés"
        ] },
        { t: "h", v: "b) Besoins de contenu" },
        { t: "p", v: "C'est souvent la ressource la plus sous-estimée par les débutants : le contenu réel qui remplira le site." },
        { t: "ul", v: [
          "Textes (descriptions, titres, mentions légales)",
          "Images (photos de produits, logo, icônes)",
          "Informations de contact (email, téléphone, adresse)"
        ] },
        { t: "trap", v: "Piège fréquent : commencer à coder le site avant d'avoir le moindre contenu réel, et finir avec un site rempli de texte de remplissage et d'images génériques qui ne seront jamais remplacées. Rassemblez au minimum vos textes et images clés avant de lancer la phase de construction." },
        { t: "h", v: "c) Besoins en compétences" },
        { t: "p", v: "Certaines compétences seront nécessaires même en vibecoding, parce qu'elles vous permettent de comprendre, vérifier et ajuster ce que l'IA produit :" },
        { t: "ul", v: [
          "Notions de base en HTML/CSS (Modules 3 et 4) — pour lire et corriger le code généré",
          "Notions d'UI/UX (Module 2) — pour juger si ce que l'IA propose est réellement utilisable",
          "Savoir formuler des instructions précises à l'IA (Module 5)"
        ] },
        { t: "h", v: "d) Besoin en temps" },
        { t: "p", v: "C'est une ressource qu'on oublie souvent de « lister » alors qu'elle conditionne tout le reste. Combien d'heures par semaine pouvez-vous réellement consacrer au projet ? Un objectif ambitieux avec très peu de temps disponible devra soit être réduit, soit être étalé sur une durée plus longue — mieux vaut le savoir dès le départ que le découvrir à mi-parcours." },
        { t: "h", v: "Méthode pratique : le tableau des besoins" },
        { t: "p", v: "Avant de commencer un projet, il est utile de remplir un tableau à quatre colonnes (technique / contenu / compétences / temps) et de noter si chaque ressource est déjà disponible ou si elle reste à obtenir. Cela transforme une angoisse vague (« j'espère que j'aurai tout ce qu'il faut ») en une liste d'actions concrètes et cochables." }
      ]
    },
    {
      id: "1.3",
      title: "Établissez une structure claire",
      blocks: [
        { t: "p", v: "La structure d'un site, c'est son squelette : quelles pages existent, comment elles s'articulent, et comment un visiteur passe de l'une à l'autre. C'est une étape que beaucoup de débutants négligent parce qu'elle ne « se voit pas » — contrairement aux couleurs ou aux images, une bonne structure est invisible quand elle fonctionne bien, et très visible (sous forme de confusion) quand elle est absente." },
        { t: "h", v: "Pourquoi la structure doit précéder le code ?" },
        { t: "p", v: "Quand vous demandez à une IA de générer du code sans lui donner un plan, elle improvise une structure à votre place — et cette structure improvisée reflète des patterns génériques, pas votre projet spécifique. Résultat fréquent : des pages qui se chevauchent en contenu, des liens qui ne mènent nulle part, ou une hiérarchie de navigation qui n'a pas de sens pour votre public." },
        { t: "h", v: "Exemple pour un site vitrine e-commerce" },
        { t: "code", lang: "texte", title: "Arborescence", v: "Accueil\n ├── Nos produits\n │     └── Fiche produit (détail d'un article)\n ├── À propos\n ├── Contact\n └── Connexion / Inscription" },
        { t: "p", v: "Chaque page de cette arborescence a une fonction précise et ne devrait pas dupliquer le rôle d'une autre. Par exemple, la page « Accueil » ne doit pas essayer de montrer tout en détail (ce serait le rôle des « Fiches produit ») — elle doit plutôt donner envie et orienter vers les bonnes sections." },
        { t: "p", v: "Deux pièges fréquents chez les débutants en vibecoding :" },
        { t: "ul", v: [
          "Demander à l'IA de « faire un site » sans plan. L'IA produit alors une structure plausible mais générique, qui ne correspond pas forcément à votre logique. Vous passerez ensuite plus de temps à reformuler la structure qu'il n'en aurait fallu pour la définir en amont.",
          "Ajouter des pages au fur et à mesure, sans vue d'ensemble. Chaque nouvelle demande à l'IA (« ajoute aussi une page Blog », « et une page FAQ ») sans les relier à une arborescence pensée en amont finit par créer un site en patchwork, où le visiteur ne comprend plus où aller."
        ] },
        { t: "h", v: "Comment dessiner une arborescence en pratique :" },
        { t: "ol", v: [
          "Listez toutes les pages dont vous avez besoin (reprenez votre objectif du 1.1).",
          "Regroupez les pages qui appartiennent à la même thématique sous une page « parente » (ex. toutes les fiches produits sous « Nos produits »).",
          "Vérifiez qu'aucune page n'est « orpheline » : chaque page doit être accessible depuis au moins un lien de navigation.",
          "Limitez la profondeur : au-delà de 2-3 niveaux (Accueil → Catégorie → Sous-catégorie → Produit), la navigation devient fatigante, surtout sur mobile."
        ] }
      ]
    },
    {
      id: "1.4",
      title: "Listez les fonctionnalités que vous voulez implémenter",
      blocks: [
        { t: "p", v: "Une fonctionnalité, c'est une action que l'utilisateur peut réaliser sur le site : s'inscrire, filtrer des produits, envoyer un message, ajouter un article au panier. C'est différent du contenu (c'est ce que le site permet de faire) — la fonctionnalité, c'est ce que le site permet de réaliser." },
        { t: "h", v: "Pourquoi prioriser plutôt que tout lister en vrac ?" },
        { t: "p", v: "En vibecoding, il est tentant de demander à l'IA d'ajouter fonctionnalité après fonctionnalité, parce que chaque ajout semble « rapide » à générer. Or chaque fonctionnalité ajoute de la complexité, des risques de bugs, et du temps de test. Un projet qui tente de tout faire dès la première version prend souvent plus de temps — et est plus fragile — qu'un projet qui se concentre d'abord sur l'essentiel." },
        { t: "h", v: "Méthode recommandée : le tri MoSCoW" },
        { t: "p", v: "Cette méthode consiste à classer chaque fonctionnalité dans une des quatre catégories suivantes :" },
        { t: "ul", v: [
          "Must have (indispensable) : sans cette fonctionnalité, le site ne remplit pas son objectif de base. Exemple : pour un site de vente, la possibilité de voir les produits et d'être contacté.",
          "Should have (important, mais pas bloquant) : améliore nettement l'expérience, mais le site peut fonctionner sans, au moins temporairement. Exemple : un système de filtres.",
          "Could have (bonus, si le temps le permet) : agréable, mais clairement secondaire. Exemple : un mode sombre.",
          "Won't have (pas pour cette version) : explicitement mis de côté, pour éviter la tentation d'y revenir en cours de route. Exemple : une application mobile dédiée."
        ] },
        { t: "h", v: "Pourquoi le « Won't have » est aussi important que le « Must have » ?" },
        { t: "p", v: "Lister ce que vous ne ferez pas dans cette version est presque aussi utile que lister ce que vous ferez : cela vous protège contre la dérive (« tant qu'on y est, on pourrait aussi ajouter... ») qui rallonge indéfiniment les projets. Un « Won't have » n'est pas un renoncement définitif — c'est une fonctionnalité pour une future version, explicitement repoussée." },
        { t: "trap", v: "Piège classique du débutant vibecodeur : vouloir tout implémenter dès la V1, parce que « l'IA peut le faire vite ». Un site simple qui fonctionne intégralement vaut toujours mieux qu'un site ambitieux à moitié cassé. Les utilisateurs pardonnent la simplicité ; ils ne pardonnent pas les bugs." }
      ]
    },
    {
      id: "1.5",
      title: "Planifiez la structure UI et UX",
      blocks: [
        { t: "p", v: "Cette dernière étape du brainstorming ne consiste pas encore à dessiner quoi que ce soit (ce sera l'objet du Module 2) — il s'agit ici de poser les grandes intentions qui guideront la conception visuelle et l'expérience utilisateur." },
        { t: "p", v: "Trois questions à se poser :" },
        { t: "ul", v: [
          "Qui utilisera ce site ? Un public débutant en informatique n'a pas les mêmes attentes qu'un public technophile. Un usage majoritairement mobile (ex. trafic venant d'Instagram) impose des contraintes différentes d'un usage majoritairement desktop (ex. un logiciel professionnel B2B).",
          "Quel est le parcours idéal de l'utilisateur ? De son arrivée sur le site jusqu'à son objectif final (acheter, s'inscrire, contacter...), quelles étapes doit-il traverser ? Moins il y a d'étapes inutiles, plus vous avez de chances qu'il aille au bout.",
          "Quelle impression le site doit-il donner ? Professionnelle et sobre ? Chaleureuse et artisanale ? Ludique et colorée ? Cette intention influencera directement les choix de couleurs, de typographie et de mise en page que vous ferez au Module 2."
        ] },
        { t: "p", v: "Cette réflexion, encore légère à ce stade, sera reprise et approfondie concrètement lors du Module 2, où vous passerez de l'intention à la conception (wireframe puis prototype)." }
      ]
    }
  ],
  exercise: {
    intro: [
      { t: "p", v: "Vous allez brainstormer un projet réel que vous pourrez utiliser tout au long de la formation (idéalement le même projet sera repris aux modules 3, 4 et 5)." }
    ],
    consigne: {
      t: "ol",
      v: [
        "Rédigez en une phrase l'objectif de votre futur site.",
        "Listez au moins 5 ressources dont vous aurez besoin.",
        "Dessinez (sur papier ou dans un fichier texte) l'arborescence de votre site avec au moins 4 pages.",
        "Classez au moins 6 fonctionnalités selon la méthode MoSCoW.",
        "En 3 phrases, décrivez le profil type de votre utilisateur et l'impression que le site doit donner."
      ]
    },
    checklist: [
      "Mon objectif tient en une phrase et répond à « pourquoi ce projet ? »",
      "J'ai identifié des besoins techniques ET de contenu",
      "Mon arborescence a une page d'accueil claire et pas de page orpheline",
      "J'ai au moins un « Must have » et un « Won't have »",
      "Je sais qui utilisera mon site"
    ]
  },
  quiz: {
    questions: [
      {
        q: "Un objectif de projet bien formulé doit être :",
        options: [
          "Vague et ouvert à toutes les possibilités",
          "Spécifique, mesurable et limité dans le temps",
          "Défini uniquement après avoir codé le site",
          "Identique pour tous les projets"
        ],
        answer: 1,
        explain: "Un objectif efficace est spécifique, mesurable et limité dans le temps : on sait ainsi ce qu'on construit et quand considérer que c'est réussi."
      },
      {
        q: "Que signifie « Must have » dans la méthode MoSCoW ?",
        options: [
          "Une fonctionnalité optionnelle",
          "Une fonctionnalité indispensable",
          "Une fonctionnalité à exclure définitivement",
          "Une fonctionnalité pour la version mobile uniquement"
        ],
        answer: 1,
        explain: "« Must have » désigne une fonctionnalité indispensable : sans elle, le site ne remplit pas son objectif de base."
      },
      {
        q: "Pourquoi établir une structure / arborescence avant de coder ?",
        options: [
          "Ce n'est pas nécessaire avec l'IA",
          "Pour éviter une navigation confuse et un résultat incohérent",
          "Uniquement pour les gros projets",
          "Pour respecter une norme légale"
        ],
        answer: 1,
        explain: "Sans structure définie en amont, l'IA improvise un plan générique qui peut mener à des pages qui se chevauchent et une navigation confuse."
      },
      {
        q: "Quel est le principal risque pour un débutant vibecodeur lors du choix des fonctionnalités ?",
        options: [
          "Ne choisir aucune fonctionnalité",
          "Vouloir tout implémenter dès la V1",
          "Trop utiliser le tri de priorité",
          "Ne pas utiliser d'outil d'IA"
        ],
        answer: 1,
        explain: "Le risque le plus fréquent est d'en demander trop dès la V1, ce qui ralentit le projet et le fragilise."
      },
      {
        q: "La réflexion UI/UX au stade du brainstorming sert principalement à :",
        options: [
          "Choisir les couleurs définitives du site",
          "Créer le prototype final sur Figma",
          "Cerner l'utilisateur cible et le parcours souhaité, avant la conception détaillée",
          "Écrire le code CSS"
        ],
        answer: 2,
        explain: "Au brainstorming, on détermine qui utilisera le site et quel parcours privilégier. Les choix visuels détaillés (wireframe, prototype) viennent au Module 2."
      }
    ],
    passScore: 3
  },
  synthesis: [
    { t: "p", v: "Le brainstorming n'est pas une étape « perdue » avant le vrai travail : c'est elle qui détermine si le reste du projet ira vite (avec l'IA) ou si vous passerez votre temps à corriger des incohérences. Un objectif clair, une structure définie et des fonctionnalités priorisées forment une base solide pour les modules suivants." }
  ]
};