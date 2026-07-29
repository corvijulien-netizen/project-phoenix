window.PHOENIX={
  project:{
    name:'Project Phoenix',
    owner:'Julien',
    start:'2026-07-29',
    end:'2027-07-28',
    day:1,
    totalDays:365,
    lastUpdate:'29 juillet 2026 à 20:55',
    scope:'Les statistiques officielles commencent le 29 juillet 2026. Les données du 28 juillet restent exclues.'
  },
  profile:{
    heightCm:183,
    goalWeightKg:80,
    startWeightKg:112.5
  },
  history:[
    {
      date:'2026-07-29',
      weightKg:112.5,
      bmi:33.6,
      bodyFatPct:34.1,
      leanMassKg:74.14,
      waistCm:108.3,
      steps:16617,
      distanceKm:13.53,
      activeKcal:1265,
      exerciseMin:130,
      walkingSpeedKmh:5.18,
      restingHR:74,
      walkingHR:119.5,
      maxHR:175,
      hrvMs:29.8,
      sleepHours:7.1784,
      sleepCoreMin:273,
      sleepDeepMin:54,
      sleepRemMin:103,
      awakeMin:15,
      score:94,
      loggedCaloriesKcal:null,
      proteinG:null,
      nutritionScore:null,
      mealCount:null,
      trophiesUnlocked:4,
      journalTitle:'Le point zéro officiel',
      journalText:'Pesée RENPHO, composition corporelle, tour de taille, sommeil et grande marche enregistrés.'
    }
  ],
  mainWalk:{
    date:'2026-07-29',
    start:'17:14',
    end:'19:19',
    distanceKm:9.86,
    steps:12390,
    exerciseMin:116,
    activeKcal:842
  },
  archiveTest:{
    date:'2026-07-28',
    label:'Journée test — hors statistiques officielles'
  },
  topics:{
    activite:{title:'Activité',icon:'♨',accent:'green',summary:'Pas, kilomètres, calories actives, exercice, vitesse et records.'},
    sommeil:{title:'Sommeil',icon:'☾',accent:'purple',summary:'Durée totale, phases, fréquence cardiaque et récupération.'},
    nutrition:{title:'Nutrition',icon:'♜',accent:'orange',summary:'Repas, calories consignées, protéines, équilibre et régularité.'},
    transformation:{title:'Transformation',icon:'▧',accent:'blue',summary:'Poids, composition corporelle, mensurations et évolution visuelle.'},
    sante:{title:'Santé & récupération',icon:'♥',accent:'coral',summary:'Fréquence cardiaque, HRV et signaux de récupération.'},
    journal:{title:'Journal',icon:'▤',accent:'cyan',summary:'Le contexte humain et les décisions derrière les chiffres.'},
    trophees:{title:'Trophées',icon:'♕',accent:'gold',summary:'Les jalons, records et étapes du challenge.'}
  }
};

/* Chargement des avatars Phoenix V1 sans exposer les exports Santé */
(()=>{
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='avatars.css?v=20260729-1';
  document.head.appendChild(css);
  const parts=[1,2,3,4].map(n=>fetch(`assets/avatar-sprite-${n}.txt?v=20260729-1`,{cache:'no-store'}).then(r=>{
    if(!r.ok)throw new Error(`Avatar part ${n}: ${r.status}`);
    return r.text();
  }));
  Promise.all(parts).then(chunks=>{
    const uri=`url("data:image/webp;base64,${chunks.join('')}")`;
    document.documentElement.style.setProperty('--phoenix-avatar-sprite',uri);
    document.documentElement.classList.add('phoenix-avatars-ready');
  }).catch(err=>console.error('Project Phoenix avatars:',err));
})();
