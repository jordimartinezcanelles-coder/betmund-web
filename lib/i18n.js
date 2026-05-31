const translations = {
  en: {
    meta: {
      title: 'Betmund — Your World Cup. Your League.',
      description: 'Create a private league, predict the 2026 World Cup, and compete with friends — round by round, match by match.',
    },
    navbar: { download: 'Download' },
    banner: {
      desktop: '⚽ Gather your squad — the biggest World Cup ever is almost here.',
      mobile:  '⚽ The World Cup is coming!',
      kickoff: 'Kickoff · Jun 11, 2026',
      begun:   '🏆 It has begun!',
    },
    hero: {
      badge:     'World Cup 2026',
      h1a:       'Your World Cup.',
      h1b:       'Your League.',
      subtitle:  'Create a private league, predict the tournament, and compete with friends — round by round, match by match.',
      launching: 'App launching soon — be ready before the first kickoff.',
    },
    createLeague: {
      eyebrow:  'Get started',
      h2a:      'Start a league',
      h2b:      'in minutes',
      subtitle: 'Invite your friends, pick a mode, and add a bet to keep things interesting.',
      steps: [
        { emoji: '⚽', title: 'Name your league',  desc: 'Pick an icon, give it a name, and choose Free or Premium mode.' },
        { emoji: '📲', title: 'Invite with a link', desc: 'Share a single link. Your friends join instantly — no account needed to preview.' },
        { emoji: '🍔', title: 'Add a bet',          desc: 'Make it fun: winner chooses the restaurant, next round of drinks, or bragging rights for a year.' },
      ],
    },
    features: {
      eyebrow:  'Two ways to play',
      h2:       'Pick your game',
      free:     'Free',
      premium:  'Premium',
      profeta: {
        name: 'Profeta',
        desc: 'Make all your tournament predictions before the World Cup starts. Pick group qualifiers, the full knockout bracket, and award winners. Compete all summer long.',
        items: [
          'Group stage qualifiers (12 groups)',
          'Full knockout bracket picks',
          "Ballon d'Or, Golden Boot & more awards",
          'Season-long private league ranking',
        ],
      },
      arena: {
        name: 'Arena',
        desc: 'Go live during the tournament. Predict the exact score, goalscorers, and MVP for every match. Earn points in real time as games are played.',
        items: [
          'Live match score prediction',
          'Goalscorer picks (+3 pts each)',
          'MVP of the match (+5 pts)',
          'Real-time ranking updates',
        ],
      },
    },
    profeta: {
      badge: 'Profeta · Free',
      h2a:   'How Profeta',
      h2b:   'works',
      steps: [
        { n: '01', title: 'Pick your group qualifiers',  desc: 'For each of the 12 groups, select 2–3 teams you think will advance. The more you get right, the more points you earn.' },
        { n: '02', title: 'Build your knockout bracket', desc: 'Predict who makes it through R16, R8, QF and SF all the way to the champion. Points increase with each round.' },
        { n: '03', title: 'Pick the award winners',      desc: "Ballon d'Or, Golden Boot, Best Young Player, Fair Play team, and Revelation team — 6 pts each if you nail it." },
      ],
      scoringLabel: 'Points per correct pick',
      scoring: [
        { label: 'Group qualifier',     pts: 2  },
        { label: 'Round of 16',         pts: 4  },
        { label: 'Round of 8',          pts: 6  },
        { label: 'Quarterfinal',        pts: 10 },
        { label: 'Semifinal',           pts: 16 },
        { label: 'World Cup Champion',  pts: 26 },
        { label: 'Award winner (each)', pts: 6  },
      ],
    },
    arena: {
      badge: 'Arena · Premium',
      h2a:   'How Arena',
      h2b:   'works',
      steps: [
        { n: '01', title: 'Upgrade to Arena',        desc: 'League admins activate Arena in league settings. One upgrade covers all matches in the full tournament.' },
        { n: '02', title: 'Predict each match live',  desc: 'Before kickoff, pick the final score, which players will score, and the MVP. Predictions lock when the game starts.' },
        { n: '03', title: 'Earn real-time points',    desc: 'Points accumulate as goals are scored and matches end. A perfect prediction unlocks a bonus +5 pts.' },
      ],
      scoringLabel: 'Points per prediction',
      scoring: [
        { label: 'Exact score',         pts: 6 },
        { label: 'Correct result',      pts: 3 },
        { label: 'Goalscorer (each)',    pts: 3 },
        { label: 'MVP pick',            pts: 5 },
        { label: 'Perfect match bonus', pts: 5 },
      ],
    },
    download: {
      h2:        'Ready to play?',
      subtitle:  'Join your friends in a private league. The 2026 World Cup starts soon.',
      launching: 'App launching soon — be ready before the first kickoff.',
    },
    footer: {
      privacy:         'Privacy',
      terms:           'Terms',
      support:         'Support',
      accountDeletion: 'Account Deletion',
    },
  },

  es: {
    meta: {
      title: 'Betmund — Tu Copa del Mundo. Tu Liga.',
      description: 'Crea una liga privada, predice el Mundial 2026 y compite con tus amigos — ronda a ronda, partido a partido.',
    },
    navbar: { download: 'Descargar' },
    banner: {
      desktop: '⚽ Reúne a tu equipo — el mayor Mundial de la historia está a punto de llegar.',
      mobile:  '⚽ ¡El Mundial ya llega!',
      kickoff: 'Inicio · 11 Jun, 2026',
      begun:   '🏆 ¡Ha comenzado!',
    },
    hero: {
      badge:     'Copa del Mundo 2026',
      h1a:       'Tu Copa del Mundo.',
      h1b:       'Tu Liga.',
      subtitle:  'Crea una liga privada, predice el torneo y compite con tus amigos — ronda a ronda, partido a partido.',
      launching: 'La app llega pronto — prepárate antes del primer pitido.',
    },
    createLeague: {
      eyebrow:  'Empieza ya',
      h2a:      'Crea una liga',
      h2b:      'en minutos',
      subtitle: 'Invita a tus amigos, elige el modo y añade una apuesta para darle emoción.',
      steps: [
        { emoji: '⚽', title: 'Ponle nombre a tu liga', desc: 'Elige un icono, dale un nombre y elige el modo Gratis o Premium.' },
        { emoji: '📲', title: 'Invita con un enlace',   desc: 'Comparte un enlace. Tus amigos se unen al instante — sin cuenta para ver la previa.' },
        { emoji: '🍔', title: 'Añade una apuesta',       desc: 'Dale emoción: el ganador elige el restaurante, la siguiente ronda de copas o el orgullo eterno.' },
      ],
    },
    features: {
      eyebrow:  'Dos formas de jugar',
      h2:       'Elige tu modo',
      free:     'Gratis',
      premium:  'Premium',
      profeta: {
        name: 'Profeta',
        desc: 'Haz todas tus predicciones antes de que empiece el Mundial. Elige los clasificados de grupo, el cuadro eliminatorio y los ganadores de premios. Compite todo el verano.',
        items: [
          'Clasificados de fase de grupos (12 grupos)',
          'Cuadro eliminatorio completo',
          'Balón de Oro, Bota de Oro y más premios',
          'Ranking de liga privada durante toda la temporada',
        ],
      },
      arena: {
        name: 'Arena',
        desc: 'Juega en directo durante el torneo. Predice el marcador exacto, los goleadores y el MVP de cada partido. Gana puntos en tiempo real mientras se juegan los partidos.',
        items: [
          'Predicción del marcador del partido',
          'Picks de goleadores (+3 pts cada uno)',
          'MVP del partido (+5 pts)',
          'Ranking actualizado en tiempo real',
        ],
      },
    },
    profeta: {
      badge: 'Profeta · Gratis',
      h2a:   'Cómo funciona',
      h2b:   'Profeta',
      steps: [
        { n: '01', title: 'Elige los clasificados de grupo',     desc: 'Para cada uno de los 12 grupos, selecciona 2-3 equipos que crees que avanzarán. Cuantos más aciertes, más puntos ganas.' },
        { n: '02', title: 'Construye tu cuadro eliminatorio',    desc: 'Predice quién avanza en R16, R8, QF y SF hasta el campeón. Los puntos aumentan con cada ronda.' },
        { n: '03', title: 'Elige los ganadores de premios',      desc: 'Balón de Oro, Bota de Oro, Mejor Jugador Joven, Fair Play y Revelación — 6 pts cada uno si lo aciertas.' },
      ],
      scoringLabel: 'Puntos por pick correcto',
      scoring: [
        { label: 'Clasificado de grupo',   pts: 2  },
        { label: 'Octavos de final',       pts: 4  },
        { label: 'Ronda de 8',             pts: 6  },
        { label: 'Cuartos de final',       pts: 10 },
        { label: 'Semifinal',              pts: 16 },
        { label: 'Campeón del Mundial',    pts: 26 },
        { label: 'Premio acertado (c/u)',  pts: 6  },
      ],
    },
    arena: {
      badge: 'Arena · Premium',
      h2a:   'Cómo funciona',
      h2b:   'Arena',
      steps: [
        { n: '01', title: 'Activa Arena',                        desc: 'Los administradores activan Arena en los ajustes de la liga. Una actualización cubre todos los partidos del torneo.' },
        { n: '02', title: 'Predice cada partido en directo',     desc: 'Antes del pitido inicial, elige el marcador final, los goleadores y el MVP. Las predicciones se bloquean al inicio del partido.' },
        { n: '03', title: 'Gana puntos en tiempo real',          desc: 'Los puntos se acumulan a medida que se marcan goles. Una predicción perfecta desbloquea un bonus de +5 pts.' },
      ],
      scoringLabel: 'Puntos por predicción',
      scoring: [
        { label: 'Marcador exacto',        pts: 6 },
        { label: 'Resultado correcto',     pts: 3 },
        { label: 'Goleador (c/u)',         pts: 3 },
        { label: 'Pick MVP',               pts: 5 },
        { label: 'Bonus partido perfecto', pts: 5 },
      ],
    },
    download: {
      h2:        '¿Listo para jugar?',
      subtitle:  'Únete a tus amigos en una liga privada. El Mundial 2026 empieza pronto.',
      launching: 'La app llega pronto — prepárate antes del primer pitido.',
    },
    footer: {
      privacy:         'Privacidad',
      terms:           'Términos',
      support:         'Soporte',
      accountDeletion: 'Eliminar cuenta',
    },
  },
}

export function getT(lang) {
  return translations[lang] ?? translations.en
}
