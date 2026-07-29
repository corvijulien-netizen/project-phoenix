window.PHOENIX_DATA = {
  deploymentRevision: "2026-07-29T13:36:00+02:00",
  profile: {
    name: "Julien",
    startDate: "2026-07-28",
    updatedAt: "2026-07-29T13:17:00+02:00",
    heightCm: 186,
    startWeightKg: 115,
    currentWeightKg: 115,
    goalWeightKg: 80,
    weightStatus: "Poids provisoire avant la première pesée RENPHO"
  },
  today: {
    score: 52,
    status: "Journée en cours",
    steps: 1539,
    distanceKm: 1.18,
    activeCaloriesKcal: 116,
    exerciseMinutes: 5,
    restingHeartRateBpm: 77,
    hrvMs: 30.8,
    sleepHours: 7.18,
    deepSleepHours: 0.90,
    remSleepHours: 1.72,
    coreSleepHours: 4.56,
    awakeHours: 0.25
  },
  nutrition: {
    date: "2026-07-29",
    caloriesLogged: 1100,
    proteinGrams: 90,
    carbohydratesGrams: 80,
    fatGrams: 42,
    fiberGrams: 7,
    qualityScore: 8.5,
    confidence: "Moyenne",
    mealTitle: "Déjeuner riche en protéines",
    mealDescription: "Filet de poulet grillé, pommes de terre rôties, 3 œufs durs, fromage blanc nature et eau.",
    analysis: "Repas très rassasiant et riche en protéines. L’incertitude principale concerne la quantité d’huile des pommes de terre et le type de fromage blanc.",
    estimated: true
  },
  weightHistory: [
    { date: "2026-07-28", weightKg: 115, label: "Départ provisoire" }
  ],
  journal: {
    date: "2026-07-29",
    title: "Premier repas photographié",
    text: "Le déjeuner du jour a été analysé depuis une photo et ajouté au suivi Phoenix.",
    highlights: [
      "Environ 1 100 kcal enregistrées",
      "Environ 90 g de protéines",
      "Poulet grillé, pommes de terre rôties et 3 œufs",
      "Fromage blanc nature et eau",
      "Qualité nutritionnelle estimée : 8,5/10"
    ]
  },
  trophies: [
    { icon: "🔥", title: "Project lancé", description: "Le système Phoenix est opérationnel.", unlocked: true },
    { icon: "👟", title: "10 000 pas", description: "Objectif franchi dès le Jour 1.", unlocked: true },
    { icon: "🗺️", title: "Première grande marche", description: "Environ 9 km pour lancer l’aventure.", unlocked: true },
    { icon: "🍽️", title: "Premier repas analysé", description: "Une photo transformée en données nutritionnelles.", unlocked: true },
    { icon: "⚖️", title: "Pesée officielle", description: "À débloquer avec la balance RENPHO.", unlocked: false },
    { icon: "🏆", title: "–5 kg", description: "Premier grand palier de poids.", unlocked: false }
  ]
};

(function applyPhoenixMobileFix(){
  const style = document.createElement('style');
  style.id = 'phoenix-mobile-fix';
  style.textContent = `
    html, body { max-width: 100%; overflow-x: hidden; }
    .wrap, .hero, .stats, .grid2, .health, .journal, .photos, .trophies,
    .card, .stat, .score, .hero > *, .grid2 > *, .health > *, .journal > * {
      min-width: 0;
      max-width: 100%;
    }
    img, svg { max-width: 100%; height: auto; }
    .lead, .meta, .score p, .foot, .caption, .privacy p, h1, h2, h3 {
      overflow-wrap: anywhere;
      word-break: normal;
    }
    @media (max-width: 680px) {
      .wrap { width: calc(100% - 18px) !important; }
      .hero {
        width: 100% !important;
        grid-template-columns: minmax(0,1fr) !important;
        padding: 42px 20px 28px !important;
        gap: 28px !important;
      }
      .hero > div { width: 100%; min-width: 0; }
      .hero h1 {
        font-size: clamp(34px, 10.5vw, 46px) !important;
        line-height: 1.06 !important;
        letter-spacing: -0.045em !important;
      }
      .lead { font-size: 16px !important; }
      .actions { width: 100%; }
      .btn { width: 100%; display: block; }
      .meta { white-space: normal !important; }
      .score {
        width: 100% !important;
        max-width: none !important;
        display: grid !important;
        grid-template-columns: 112px minmax(0,1fr) !important;
        align-items: center !important;
        gap: 16px !important;
        padding: 18px !important;
        text-align: left !important;
      }
      .ring {
        width: 112px !important;
        height: 112px !important;
        margin: 0 !important;
      }
      .ring strong { font-size: 34px !important; }
      .score > small, .score > h3, .score > p { grid-column: 2; }
      .score > small { align-self: end; }
      .score > h3 { margin: -4px 0 0 !important; }
      .score > p { margin-top: 2px !important; }
      .stats { margin: 12px 0 0 !important; width: 100% !important; }
      .stat { width: 100% !important; }
      .foot { flex-wrap: wrap; }
      .topline, .sleeplegend, .minis, .activity, .bodydata { min-width: 0; }
      .topline > *, .sleeplegend > *, .minis > *, .activity > *, .bodydata > * { min-width: 0; }
      .ctitle { flex-wrap: wrap; }
      .privacy { align-items: flex-start; }
      footer { gap: 10px; }
    }
  `;
  document.head.appendChild(style);
})();