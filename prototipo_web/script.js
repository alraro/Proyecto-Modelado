// ==================== DATOS ====================

const torneos = [
  {
    id: 1,
    nombre: "Liga Premier 2025",
    deporte: "Fútbol",
    categoria: "Senior",
    equipos: 12,
    estado: "Activo",
    fecha: "2025-01-15",
    nivel: "Nacional",
    sede: "Madrid",
  },
  {
    id: 2,
    nombre: "Torneo Nacional Basketball",
    deporte: "Baloncesto",
    categoria: "Junior",
    equipos: 8,
    estado: "Activo",
    fecha: "2025-02-01",
    nivel: "Nacional",
    sede: "Barcelona",
  },
  {
    id: 3,
    nombre: "Copa Rugby España",
    deporte: "Rugby",
    categoria: "Senior",
    equipos: 6,
    estado: "Activo",
    fecha: "2025-03-10",
    nivel: "Nacional",
    sede: "Sevilla",
  },
  {
    id: 4,
    nombre: "Campeonato Volleyball",
    deporte: "Volleyball",
    categoria: "Senior",
    equipos: 6,
    estado: "Activo",
    fecha: "2025-02-20",
    nivel: "Nacional",
    sede: "Valencia",
  },
  {
    id: 5,
    nombre: "Open de Tenis",
    deporte: "Tenis",
    categoria: "Senior",
    equipos: 16,
    estado: "Activo",
    fecha: "2025-04-05",
    nivel: "Internacional",
    sede: "Madrid",
  },
  {
    id: 6,
    nombre: "Circuito Padel Pro",
    deporte: "Padel",
    categoria: "Senior",
    equipos: 8,
    estado: "Activo",
    fecha: "2025-03-15",
    nivel: "Nacional",
    sede: "Málaga",
  },
]

const dataTorneos = {
  0: {
    // Fútbol
    clasificacion: [
      { pos: 1, equipo: "Real Madrid CF", pj: 15, pg: 12, pe: 2, pp: 1, gf: 38, gc: 12, dif: 26, pts: 38 },
      { pos: 2, equipo: "FC Barcelona", pj: 15, pg: 10, pe: 3, pp: 2, gf: 35, gc: 15, dif: 20, pts: 33 },
      { pos: 3, equipo: "Atlético de Madrid", pj: 15, pg: 9, pe: 4, pp: 2, gf: 28, gc: 14, dif: 14, pts: 31 },
      { pos: 4, equipo: "Sevilla FC", pj: 15, pg: 8, pe: 3, pp: 4, gf: 26, gc: 18, dif: 8, pts: 27 },
      { pos: 5, equipo: "Real Betis", pj: 15, pg: 7, pe: 5, pp: 3, gf: 24, gc: 19, dif: 5, pts: 26 },
      { pos: 6, equipo: "Valencia CF", pj: 15, pg: 7, pe: 4, pp: 4, gf: 22, gc: 20, dif: 2, pts: 25 },
      { pos: 7, equipo: "Athletic Bilbao", pj: 15, pg: 6, pe: 5, pp: 4, gf: 21, gc: 18, dif: 3, pts: 23 },
      { pos: 8, equipo: "Real Sociedad", pj: 15, pg: 6, pe: 4, pp: 5, gf: 20, gc: 19, dif: 1, pts: 22 },
      { pos: 9, equipo: "Villarreal CF", pj: 15, pg: 5, pe: 6, pp: 4, gf: 19, gc: 18, dif: 1, pts: 21 },
      { pos: 10, equipo: "Getafe CF", pj: 15, pg: 5, pe: 4, pp: 6, gf: 16, gc: 20, dif: -4, pts: 19 },
      { pos: 11, equipo: "Osasuna", pj: 15, pg: 4, pe: 5, pp: 6, gf: 15, gc: 22, dif: -7, pts: 17 },
      { pos: 12, equipo: "Espanyol", pj: 15, pg: 3, pe: 4, pp: 8, gf: 14, gc: 26, dif: -12, pts: 13 },
    ],
    calendario: [
      {
        jornada: 16,
        partidos: [
          {
            local: "Real Madrid CF",
            visitante: "Sevilla FC",
            fecha: "2025-01-18",
            hora: "20:00",
            lugar: "Santiago Bernabéu",
            resultado: "3-1",
            estado: "Finalizado",
          },
          {
            local: "FC Barcelona",
            visitante: "Real Betis",
            fecha: "2025-01-18",
            hora: "18:30",
            lugar: "Camp Nou",
            estado: "Pendiente",
          },
        ],
      },
      {
        jornada: 17,
        partidos: [
          {
            local: "Athletic Bilbao",
            visitante: "Real Madrid CF",
            fecha: "2025-01-25",
            hora: "21:00",
            lugar: "San Mamés",
            estado: "Pendiente",
          },
        ],
      },
    ],
    equipos: [
      "Real Madrid CF",
      "FC Barcelona",
      "Atlético de Madrid",
      "Sevilla FC",
      "Real Betis",
      "Valencia CF",
      "Athletic Bilbao",
      "Real Sociedad",
      "Villarreal CF",
      "Getafe CF",
      "Osasuna",
      "Espanyol",
    ],
  },
  1: {
    // Baloncesto
    clasificacion: [
      { pos: 1, equipo: "Real Madrid Baloncesto", pj: 12, pg: 10, pp: 2, pf: 985, pc: 890, dif: 95, pts: 22 },
      { pos: 2, equipo: "FC Barcelona Basket", pj: 12, pg: 9, pp: 3, pf: 960, pc: 910, dif: 50, pts: 21 },
      { pos: 3, equipo: "Baskonia", pj: 12, pg: 8, pp: 4, pf: 945, pc: 920, dif: 25, pts: 20 },
      { pos: 4, equipo: "Valencia Basket", pj: 12, pg: 7, pp: 5, pf: 920, pc: 905, dif: 15, pts: 19 },
      { pos: 5, equipo: "Unicaja Málaga", pj: 12, pg: 6, pp: 6, pf: 900, pc: 900, dif: 0, pts: 18 },
      { pos: 6, equipo: "Joventut Badalona", pj: 12, pg: 5, pp: 7, pf: 880, pc: 920, dif: -40, pts: 17 },
      { pos: 7, equipo: "Gran Canaria", pj: 12, pg: 4, pp: 8, pf: 865, pc: 940, dif: -75, pts: 16 },
      { pos: 8, equipo: "Zaragoza", pj: 12, pg: 3, pp: 9, pf: 850, pc: 970, dif: -120, pts: 15 },
    ],
    calendario: [
      {
        jornada: 13,
        partidos: [
          {
            local: "Real Madrid Baloncesto",
            visitante: "Valencia Basket",
            fecha: "2025-02-08",
            hora: "18:00",
            lugar: "WiZink Center",
            resultado: "89-85",
            estado: "Finalizado",
          },
          {
            local: "FC Barcelona Basket",
            visitante: "Baskonia",
            fecha: "2025-02-08",
            hora: "20:30",
            lugar: "Palau Blaugrana",
            estado: "Pendiente",
          },
        ],
      },
      {
        jornada: 14,
        partidos: [
          {
            local: "Unicaja Málaga",
            visitante: "Real Madrid Baloncesto",
            fecha: "2025-02-15",
            hora: "19:00",
            lugar: "Martín Carpena",
            estado: "Pendiente",
          },
        ],
      },
    ],
    equipos: [
      "Real Madrid Baloncesto",
      "FC Barcelona Basket",
      "Baskonia",
      "Valencia Basket",
      "Unicaja Málaga",
      "Joventut Badalona",
      "Gran Canaria",
      "Zaragoza",
    ],
  },
  2: {
    // Rugby
    clasificacion: [
      { pos: 1, equipo: "Alcobendas Rugby", pj: 10, pg: 8, pe: 1, pp: 1, pf: 285, pc: 165, dif: 120, pts: 33 },
      { pos: 2, equipo: "CR La Vila", pj: 10, pg: 7, pe: 0, pp: 3, pf: 268, pc: 198, dif: 70, pts: 28 },
      { pos: 3, equipo: "Valladolid RAC", pj: 10, pg: 6, pe: 1, pp: 3, pf: 245, pc: 210, dif: 35, pts: 26 },
      { pos: 4, equipo: "Ciencias Sevilla", pj: 10, pg: 5, pe: 0, pp: 5, pf: 220, pc: 225, dif: -5, pts: 20 },
      { pos: 5, equipo: "UE Santboiana", pj: 10, pg: 3, pe: 1, pp: 6, pf: 190, pc: 240, dif: -50, pts: 14 },
      { pos: 6, equipo: "Aparejadores Burgos", pj: 10, pg: 1, pe: 1, pp: 8, pf: 155, pc: 285, dif: -130, pts: 6 },
    ],
    calendario: [
      {
        jornada: 11,
        partidos: [
          {
            local: "Alcobendas Rugby",
            visitante: "Valladolid RAC",
            fecha: "2025-03-15",
            hora: "17:00",
            lugar: "Las Terrazas",
            estado: "Pendiente",
          },
          {
            local: "CR La Vila",
            visitante: "Ciencias Sevilla",
            fecha: "2025-03-15",
            hora: "18:00",
            lugar: "Pla de Nazaret",
            resultado: "28-21",
            estado: "Finalizado",
          },
        ],
      },
    ],
    equipos: [
      "Alcobendas Rugby",
      "CR La Vila",
      "Valladolid RAC",
      "Ciencias Sevilla",
      "UE Santboiana",
      "Aparejadores Burgos",
    ],
  },
  3: {
    // Volleyball
    clasificacion: [
      { pos: 1, equipo: "Unicaja Almería", pj: 14, pg: 12, pp: 2, sf: 38, sc: 15, dif: 23, pts: 36 },
      { pos: 2, equipo: "Teruel Voleibol", pj: 14, pg: 10, pp: 4, sf: 35, sc: 20, dif: 15, pts: 30 },
      { pos: 3, equipo: "CV Guaguas", pj: 14, pg: 9, pp: 5, sf: 32, sc: 24, dif: 8, pts: 27 },
      { pos: 4, equipo: "Feel Volley Alcobendas", pj: 14, pg: 7, pp: 7, sf: 28, sc: 28, dif: 0, pts: 21 },
      { pos: 5, equipo: "Ushuaïa Ibiza", pj: 14, pg: 4, pp: 10, sf: 20, sc: 34, dif: -14, pts: 12 },
      { pos: 6, equipo: "Manacor", pj: 14, pg: 2, pp: 12, sf: 15, sc: 37, dif: -22, pts: 6 },
    ],
    calendario: [
      {
        jornada: 15,
        partidos: [
          {
            local: "Unicaja Almería",
            visitante: "CV Guaguas",
            fecha: "2025-02-22",
            hora: "19:00",
            lugar: "Moisés Ruiz",
            resultado: "3-1",
            estado: "Finalizado",
          },
          {
            local: "Teruel Voleibol",
            visitante: "Feel Volley Alcobendas",
            fecha: "2025-02-22",
            hora: "18:30",
            lugar: "Los Planos",
            estado: "Pendiente",
          },
        ],
      },
    ],
    equipos: ["Unicaja Almería", "Teruel Voleibol", "CV Guaguas", "Feel Volley Alcobendas", "Ushuaïa Ibiza", "Manacor"],
  },
  4: {
    // Tenis
    clasificacion: [
      { pos: 1, equipo: "Carlos Alcaraz", pj: 8, pg: 7, pp: 1, sf: 21, sc: 5, dif: 16, pts: 21 },
      { pos: 2, equipo: "Rafael Nadal", pj: 8, pg: 6, pp: 2, sf: 19, sc: 8, dif: 11, pts: 18 },
      { pos: 3, equipo: "Pablo Carreño", pj: 8, pg: 6, pp: 2, sf: 18, sc: 9, dif: 9, pts: 18 },
      { pos: 4, equipo: "Roberto Bautista", pj: 8, pg: 5, pp: 3, sf: 17, sc: 11, dif: 6, pts: 15 },
      { pos: 5, equipo: "Alejandro Davidovich", pj: 8, pg: 5, pp: 3, sf: 16, sc: 12, dif: 4, pts: 15 },
      { pos: 6, equipo: "Jaume Munar", pj: 8, pg: 4, pp: 4, sf: 14, sc: 14, dif: 0, pts: 12 },
      { pos: 7, equipo: "Albert Ramos", pj: 8, pg: 3, pp: 5, sf: 12, sc: 16, dif: -4, pts: 9 },
      { pos: 8, equipo: "Pedro Martínez", pj: 8, pg: 3, pp: 5, sf: 11, sc: 17, dif: -6, pts: 9 },
      { pos: 9, equipo: "Bernabé Zapata", pj: 8, pg: 2, pp: 6, sf: 9, sc: 18, dif: -9, pts: 6 },
      { pos: 10, equipo: "Nicola Kuhn", pj: 8, pg: 2, pp: 6, sf: 8, sc: 19, dif: -11, pts: 6 },
    ],
    calendario: [
      {
        jornada: 9,
        partidos: [
          {
            local: "Carlos Alcaraz",
            visitante: "Roberto Bautista",
            fecha: "2025-04-08",
            hora: "16:00",
            lugar: "Pista Central",
            estado: "Pendiente",
          },
          {
            local: "Rafael Nadal",
            visitante: "Alejandro Davidovich",
            fecha: "2025-04-08",
            hora: "18:00",
            lugar: "Pista Central",
            resultado: "6-4, 7-5",
            estado: "Finalizado",
          },
        ],
      },
    ],
    equipos: [
      "Carlos Alcaraz",
      "Rafael Nadal",
      "Pablo Carreño",
      "Roberto Bautista",
      "Alejandro Davidovich",
      "Jaume Munar",
      "Albert Ramos",
      "Pedro Martínez",
      "Bernabé Zapata",
      "Nicola Kuhn",
    ],
  },
  5: {
    // Padel
    clasificacion: [
      { pos: 1, equipo: "Díaz/Gutiérrez", pj: 10, pg: 8, pp: 2, sets: "24-8", pts: 24 },
      { pos: 2, equipo: "Martín/Sánchez", pj: 10, pg: 7, pp: 3, sets: "22-12", pts: 21 },
      { pos: 3, equipo: "López/Fernández", pj: 10, pg: 7, pp: 3, sets: "21-13", pts: 21 },
      { pos: 4, equipo: "García/Rodríguez", pj: 10, pg: 6, pp: 4, sets: "19-15", pts: 18 },
      { pos: 5, equipo: "Pérez/Jiménez", pj: 10, pg: 5, pp: 5, sets: "17-17", pts: 15 },
      { pos: 6, equipo: "Ruiz/Moreno", pj: 10, pg: 4, pp: 6, sets: "15-19", pts: 12 },
      { pos: 7, equipo: "Navarro/Muñoz", pj: 10, pg: 3, pp: 7, sets: "12-22", pts: 9 },
      { pos: 8, equipo: "Romero/Alonso", pj: 10, pg: 2, pp: 8, sets: "10-24", pts: 6 },
    ],
    calendario: [
      {
        jornada: 1,
        partidos: [
          {
            local: "Díaz/Gutiérrez",
            visitante: "Martín/Sánchez",
            fecha: "15/03/2025",
            hora: "10:00",
            resultado: "6-4, 6-3",
            estado: "Finalizado",
          },
          {
            local: "López/Fernández",
            visitante: "García/Rodríguez",
            fecha: "15/03/2025",
            hora: "11:30",
            resultado: "7-5, 6-4",
            estado: "Finalizado",
          },
        ],
      },
      {
        jornada: 2,
        partidos: [
          {
            local: "Martín/Sánchez",
            visitante: "López/Fernández",
            fecha: "22/03/2025",
            hora: "10:00",
            resultado: "6-2, 7-5",
            estado: "Finalizado",
          },
          {
            local: "García/Rodríguez",
            visitante: "Díaz/Gutiérrez",
            fecha: "22/03/2025",
            hora: "11:30",
            estado: "Pendiente",
          },
        ],
      },
      {
        jornada: 3,
        partidos: [
          {
            local: "Díaz/Gutiérrez",
            visitante: "López/Fernández",
            fecha: "29/03/2025",
            hora: "10:00",
            estado: "Pendiente",
          },
          {
            local: "Pérez/Jiménez",
            visitante: "Navarro/Muñoz",
            fecha: "29/03/2025",
            hora: "13:00",
            estado: "Pendiente",
          },
        ],
      },
    ],
    equipos: [
      "Díaz/Gutiérrez",
      "Martín/Sánchez",
      "López/Fernández",
      "García/Rodríguez",
      "Pérez/Jiménez",
      "Ruiz/Moreno",
      "Navarro/Muñoz",
      "Romero/Alonso",
    ],
  },
}

const equiposPorDeporte = {
  Fútbol: [
    { nombre: "Real Madrid CF", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "FC Barcelona", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Atlético de Madrid", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Sevilla FC", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Real Betis", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Valencia CF", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Athletic Bilbao", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Real Sociedad", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Villarreal CF", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Getafe CF", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Osasuna", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
    { nombre: "Espanyol", torneo: "Liga Premier 2025", titulares: 11, suplentes: 7 },
  ],
  Baloncesto: [
    { nombre: "Real Madrid Baloncesto", torneo: "Torneo Nacional Basketball", titulares: 5, suplentes: 7 },
    { nombre: "FC Barcelona Basket", torneo: "Torneo Nacional Basketball", titulares: 5, suplentes: 5 },
    { nombre: "Baskonia", torneo: "Torneo Nacional Basketball", titulares: 5, suplentes: 7 },
    { nombre: "Valencia Basket", torneo: "Torneo Nacional Basketball", titulares: 5, suplentes: 7 },
    { nombre: "Unicaja Málaga", torneo: "Torneo Nacional Basketball", titulares: 5, suplentes: 6 },
    { nombre: "Joventut Badalona", torneo: "Torneo Nacional Basketball", titulares: 5, suplentes: 7 },
    { nombre: "Gran Canaria", torneo: "Torneo Nacional Basketball", titulares: 5, suplentes: 6 },
    { nombre: "Zaragoza", torneo: "Torneo Nacional Basketball", titulares: 5, suplentes: 7 },
  ],
  Rugby: [
    { nombre: "Alcobendas Rugby", torneo: "Copa Rugby España", titulares: 15, suplentes: 8 },
    { nombre: "CR La Vila", torneo: "Copa Rugby España", titulares: 15, suplentes: 8 },
    { nombre: "Valladolid RAC", torneo: "Copa Rugby España", titulares: 15, suplentes: 8 },
    { nombre: "Ciencias Sevilla", torneo: "Copa Rugby España", titulares: 15, suplentes: 8 },
    { nombre: "UE Santboiana", torneo: "Copa Rugby España", titulares: 15, suplentes: 8 },
    { nombre: "Aparejadores Burgos", torneo: "Copa Rugby España", titulares: 15, suplentes: 8 },
  ],
  Volleyball: [
    { nombre: "Unicaja Almería", torneo: "Campeonato Volleyball", titulares: 6, suplentes: 6 },
    { nombre: "Teruel Voleibol", torneo: "Campeonato Volleyball", titulares: 6, suplentes: 6 },
    { nombre: "CV Guaguas", torneo: "Campeonato Volleyball", titulares: 6, suplentes: 6 },
    { nombre: "Feel Volley Alcobendas", torneo: "Campeonato Volleyball", titulares: 6, suplentes: 6 },
    { nombre: "Ushuaïa Ibiza", torneo: "Campeonato Volleyball", titulares: 6, suplentes: 6 },
    { nombre: "Manacor", torneo: "Campeonato Volleyball", titulares: 6, suplentes: 6 },
  ],
  Tenis: [
    { nombre: "Carlos Alcaraz", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Rafael Nadal", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Pablo Carreño", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Roberto Bautista", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Alejandro Davidovich", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Jaume Munar", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Albert Ramos", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Pedro Martínez", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Bernabé Zapata", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
    { nombre: "Nicola Kuhn", torneo: "Open de Tenis", titulares: 1, suplentes: 0 },
  ],
  Padel: [
    { nombre: "Díaz/Gutiérrez", torneo: "Circuito Padel Pro", titulares: 2, suplentes: 0 },
    { nombre: "Martín/Sánchez", torneo: "Circuito Padel Pro", titulares: 2, suplentes: 0 },
    { nombre: "López/Fernández", torneo: "Circuito Padel Pro", titulares: 2, suplentes: 0 },
    { nombre: "García/Rodríguez", torneo: "Circuito Padel Pro", titulares: 2, suplentes: 0 },
    { nombre: "Pérez/Jiménez", torneo: "Circuito Padel Pro", titulares: 2, suplentes: 0 },
    { nombre: "Ruiz/Moreno", torneo: "Circuito Padel Pro", titulares: 2, suplentes: 0 },
    { nombre: "Navarro/Muñoz", torneo: "Circuito Padel Pro", titulares: 2, suplentes: 0 },
    { nombre: "Romero/Alonso", torneo: "Circuito Padel Pro", titulares: 2, suplentes: 0 },
  ],
}

const proximosPartidos = [
  { hora: "16:00", equipoLocal: "Alcobendas Rugby", equipoVisitante: "Valladolid RAC", lugar: "Las Terrazas" },
  { hora: "18:00", equipoLocal: "Unicaja Almería", equipoVisitante: "CV Guaguas", lugar: "Moisés Ruiz" },
  { hora: "18:30", equipoLocal: "FC Barcelona", equipoVisitante: "Real Betis", lugar: "Camp Nou" },
  { hora: "19:00", equipoLocal: "Teruel Voleibol", equipoVisitante: "Feel Volley Alcobendas", lugar: "Los Planos" },
  { hora: "20:00", equipoLocal: "Carlos Alcaraz", equipoVisitante: "Roberto Bautista", lugar: "Pista Central" },
]

const personal = {
  arbitros: [
    { nombre: "Carlos Pérez", categoria: "Primera División", deporte: "Baloncesto", disponible: true },
    { nombre: "Juan García", categoria: "Segunda División", deporte: "Fútbol", disponible: true },
    { nombre: "Miguel Sánchez", categoria: "Primera División", deporte: "Baloncesto", disponible: false },
    { nombre: "Luis Fernández", categoria: "Primera División", deporte: "Fútbol", disponible: true },
    { nombre: "Antonio Martínez", categoria: "Primera División", deporte: "Volleyball", disponible: true },
    { nombre: "José Rodríguez", categoria: "Primera División", deporte: "Rugby", disponible: true },
    { nombre: "Francisco López", categoria: "Segunda División", deporte: "Baloncesto", disponible: true },
    { nombre: "Manuel González", categoria: "Primera División", deporte: "Fútbol", disponible: false },
    { nombre: "David Jiménez", categoria: "Internacional", deporte: "Tenis", disponible: true },
    { nombre: "Rafael Ruiz", categoria: "Primera División", deporte: "Volleyball", disponible: true },
    { nombre: "Alberto Sánchez", categoria: "Primera División", deporte: "Padel", disponible: true },
    { nombre: "Fernando Martín", categoria: "Primera División", deporte: "Padel", disponible: true },
  ],
  entrenadores: [
    { nombre: "Pablo Laso", categoria: "Nivel ACB", deporte: "Baloncesto", disponible: true },
    { nombre: "Diego Simeone", categoria: "UEFA Pro", deporte: "Fútbol", disponible: true },
    { nombre: "Sarunas Jasikevicius", categoria: "Nivel ACB", deporte: "Baloncesto", disponible: true },
    { nombre: "Carlo Ancelotti", categoria: "UEFA Pro", deporte: "Fútbol", disponible: false },
    { nombre: "Xavi Hernández", categoria: "UEFA Pro", deporte: "Fútbol", disponible: true },
    { nombre: "Juan Carlos Navarro", categoria: "Nivel ACB", deporte: "Baloncesto", disponible: true },
    { nombre: "Fernando Santos", categoria: "UEFA Pro", deporte: "Fútbol", disponible: true },
    { nombre: "Sergio Scariolo", categoria: "Nivel ACB", deporte: "Baloncesto", disponible: false },
    { nombre: "Javier Aguirre", categoria: "Nivel Nacional", deporte: "Rugby", disponible: true },
    { nombre: "Alberto Toril", categoria: "Nivel Nacional", deporte: "Volleyball", disponible: true },
    { nombre: "Juan García", categoria: "Nivel Nacional", deporte: "Padel", disponible: true },
    { nombre: "Miguel Torres", categoria: "Nivel Internacional", deporte: "Tenis", disponible: true },
  ],
  narradores: [
    { nombre: "Andrés Montes", categoria: "Profesional", deporte: "Baloncesto", disponible: true },
    { nombre: "Carlos Martínez", categoria: "Profesional", deporte: "Fútbol", disponible: false },
    { nombre: "Antonio Alcántara", categoria: "Profesional", deporte: "Baloncesto", disponible: true },
    { nombre: "Manolo Lama", categoria: "Profesional", deporte: "Fútbol", disponible: true },
    { nombre: "José Antonio Martín Petón", categoria: "Profesional", deporte: "Baloncesto", disponible: true },
    { nombre: "Manu Carreño", categoria: "Profesional", deporte: "Fútbol", disponible: false },
    { nombre: "Antoni Daimiel", categoria: "Profesional", deporte: "Baloncesto", disponible: true },
    { nombre: "Miguel Martín Talavera", categoria: "Profesional", deporte: "Tenis", disponible: true },
    { nombre: "Fernando Palomo", categoria: "Profesional", deporte: "Fútbol", disponible: true },
    { nombre: "José Ramón de la Morena", categoria: "Profesional", deporte: "Multi-deporte", disponible: true },
    { nombre: "Paco González", categoria: "Profesional", deporte: "Padel", disponible: true },
    { nombre: "Tomás Roncero", categoria: "Profesional", deporte: "Rugby", disponible: true },
  ],
}

// ==================== FUNCIONES DE INICIALIZACIÓN ====================

function initApp() {
  setupEventListeners()
  loadTheme()
  loadSettings()

  const page = window.location.pathname.split("/").pop() || "index.html"

  switch (page) {
    case "index.html":
    case "":
      initPanelControl()
      break
    case "torneos.html":
      initTorneos()
      break
    case "equipos.html":
      initEquipos()
      break
    case "calendario.html":
      initCalendario()
      break
    case "personal.html":
      initPersonal()
      break
    case "configuracion.html":
      initConfiguracion()
      break
  }
}

function setupEventListeners() {
  const menuToggle = document.getElementById("menuToggle")
  const sidebar = document.getElementById("sidebar")
  const themeToggle = document.getElementById("themeToggle")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")
    })
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
}

// ==================== PANEL DE CONTROL ====================

function initPanelControl() {
  renderProximosPartidos()
  updateStats()
}

function updateStats() {
  // Calcular total de equipos
  let totalEquipos = 0
  Object.values(equiposPorDeporte).forEach((equipos) => {
    totalEquipos += equipos.length
  })

  document.getElementById("torneosActivos").textContent = torneos.length
  document.getElementById("partidosHoy").textContent = proximosPartidos.length
  document.getElementById("equiposInscritos").textContent = totalEquipos
}

function renderProximosPartidos() {
  const container = document.getElementById("proximosPartidos")
  if (!container) return

  container.innerHTML = proximosPartidos
    .map(
      (partido) => `
        <div class="partido-item">
            <div class="partido-time">
                <div class="hora">${partido.hora}</div>
            </div>
            <div class="partido-info">
                <div class="partido-teams">
                    ${partido.equipoLocal} <span style="color: var(--text-secondary)">vs</span> ${partido.equipoVisitante}
                </div>
                <div class="partido-lugar">📍 ${partido.lugar}</div>
            </div>
            <span class="badge">Hoy</span>
        </div>
    `,
    )
    .join("")
}

// ==================== TORNEOS ====================

let torneoSeleccionado = null

function initTorneos() {
  renderTorneosGrid()
  setupSearchTorneos()
}

function renderTorneosGrid() {
  const grid = document.getElementById("torneosGrid")
  if (!grid) return

  grid.innerHTML = torneos
    .map(
      (torneo, index) => `
        <div class="torneo-card" onclick="verDetalleTorneo(${index})">
            <h3>${torneo.nombre}</h3>
            <div class="badges">
                <span class="badge badge-primary">${torneo.deporte}</span>
                <span class="badge badge-secondary">${torneo.categoria}</span>
            </div>
            <div class="torneo-info">
                <div>⚽ Equipos: ${torneo.equipos}</div>
                <div>📍 Sede: ${torneo.sede}</div>
                <div>📅 ${torneo.fecha}</div>
                <div>🏆 ${torneo.nivel}</div>
            </div>
        </div>
    `,
    )
    .join("")
}

function setupSearchTorneos() {
  const searchInput = document.getElementById("searchTorneos")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase()
      const filtered = torneos.filter(
        (t) => t.nombre.toLowerCase().includes(term) || t.deporte.toLowerCase().includes(term),
      )
      renderFilteredTorneos(filtered)
    })
  }
}

function renderFilteredTorneos(filtered) {
  const grid = document.getElementById("torneosGrid")
  if (!grid) return

  grid.innerHTML = filtered
    .map((torneo, index) => {
      const originalIndex = torneos.findIndex((t) => t.id === torneo.id)
      return `
            <div class="torneo-card" onclick="verDetalleTorneo(${originalIndex})">
                <h3>${torneo.nombre}</h3>
                <div class="badges">
                    <span class="badge badge-primary">${torneo.deporte}</span>
                    <span class="badge badge-secondary">${torneo.categoria}</span>
                </div>
                <div class="torneo-info">
                    <div>⚽ Equipos: ${torneo.equipos}</div>
                    <div>📍 Sede: ${torneo.sede}</div>
                    <div>📅 ${torneo.fecha}</div>
                    <div>🏆 ${torneo.nivel}</div>
                </div>
            </div>
        `
    })
    .join("")
}

function verDetalleTorneo(index) {
  torneoSeleccionado = index
  document.getElementById("torneosView").style.display = "none"
  document.getElementById("detalleView").style.display = "block"

  const torneo = torneos[index]
  const data = dataTorneos[index]

  document.getElementById("torneoNombre").textContent = torneo.nombre
  document.getElementById("torneoBadges").innerHTML = `
        <span class="badge badge-primary">${torneo.deporte}</span>
        <span class="badge badge-secondary">${torneo.categoria}</span>
        <span class="badge badge-secondary">Nivel: ${torneo.nivel}</span>
        <span class="badge badge-secondary">📍 ${torneo.sede}</span>
    `

  renderClasificacion(data.clasificacion, torneo.deporte)
  renderCalendarioTorneo(data.calendario)
  renderEquiposTorneo(data.equipos)
}

function volverATorneos() {
  document.getElementById("torneosView").style.display = "block"
  document.getElementById("detalleView").style.display = "none"
  torneoSeleccionado = null
}

function renderClasificacion(clasificacion, deporte) {
  const container = document.getElementById("tab-clasificacion")

  let headers = ""
  let rows = ""

  if (deporte === "Fútbol") {
    headers =
      '<th>Pos</th><th>Equipo</th><th class="center">PJ</th><th class="center">PG</th><th class="center">PE</th><th class="center">PP</th><th class="center">GF</th><th class="center">GC</th><th class="center">Dif</th><th class="center">Pts</th>'
    rows = clasificacion
      .map(
        (t) => `
            <tr>
                <td><strong>${t.pos}</strong></td>
                <td><strong>${t.equipo}</strong></td>
                <td class="center">${t.pj}</td>
                <td class="center">${t.pg}</td>
                <td class="center">${t.pe}</td>
                <td class="center">${t.pp}</td>
                <td class="center">${t.gf}</td>
                <td class="center">${t.gc}</td>
                <td class="center">${t.dif}</td>
                <td class="center"><strong style="color: var(--primary-color)">${t.pts}</strong></td>
            </tr>
        `,
      )
      .join("")
  } else if (deporte === "Baloncesto") {
    headers =
      '<th>Pos</th><th>Equipo</th><th class="center">PJ</th><th class="center">PG</th><th class="center">PP</th><th class="center">PF</th><th class="center">PC</th><th class="center">Dif</th><th class="center">Pts</th>'
    rows = clasificacion
      .map(
        (t) => `
            <tr>
                <td><strong>${t.pos}</strong></td>
                <td><strong>${t.equipo}</strong></td>
                <td class="center">${t.pj}</td>
                <td class="center">${t.pg}</td>
                <td class="center">${t.pp}</td>
                <td class="center">${t.pf}</td>
                <td class="center">${t.pc}</td>
                <td class="center">${t.dif}</td>
                <td class="center"><strong style="color: var(--primary-color)">${t.pts}</strong></td>
            </tr>
        `,
      )
      .join("")
  } else if (deporte === "Rugby") {
    headers =
      '<th>Pos</th><th>Equipo</th><th class="center">PJ</th><th class="center">PG</th><th class="center">PE</th><th class="center">PP</th><th class="center">PF</th><th class="center">PC</th><th class="center">Dif</th><th class="center">Pts</th>'
    rows = clasificacion
      .map(
        (t) => `
            <tr>
                <td><strong>${t.pos}</strong></td>
                <td><strong>${t.equipo}</strong></td>
                <td class="center">${t.pj}</td>
                <td class="center">${t.pg}</td>
                <td class="center">${t.pe}</td>
                <td class="center">${t.pp}</td>
                <td class="center">${t.pf}</td>
                <td class="center">${t.pc}</td>
                <td class="center">${t.dif}</td>
                <td class="center"><strong style="color: var(--primary-color)">${t.pts}</strong></td>
            </tr>
        `,
      )
      .join("")
  } else if (deporte === "Volleyball") {
    headers =
      '<th>Pos</th><th>Equipo</th><th class="center">PJ</th><th class="center">PG</th><th class="center">PP</th><th class="center">SF</th><th class="center">SC</th><th class="center">Dif</th><th class="center">Pts</th>'
    rows = clasificacion
      .map(
        (t) => `
            <tr>
                <td><strong>${t.pos}</strong></td>
                <td><strong>${t.equipo}</strong></td>
                <td class="center">${t.pj}</td>
                <td class="center">${t.pg}</td>
                <td class="center">${t.pp}</td>
                <td class="center">${t.sf}</td>
                <td class="center">${t.sc}</td>
                <td class="center">${t.dif}</td>
                <td class="center"><strong style="color: var(--primary-color)">${t.pts}</strong></td>
            </tr>
        `,
      )
      .join("")
  } else if (deporte === "Tenis") {
    headers =
      '<th>Pos</th><th>Jugador</th><th class="center">PJ</th><th class="center">PG</th><th class="center">PP</th><th class="center">SF</th><th class="center">SC</th><th class="center">Dif</th><th class="center">Pts</th>'
    rows = clasificacion
      .map(
        (t) => `
            <tr>
                <td><strong>${t.pos}</strong></td>
                <td><strong>${t.equipo}</strong></td>
                <td class="center">${t.pj}</td>
                <td class="center">${t.pg}</td>
                <td class="center">${t.pp}</td>
                <td class="center">${t.sf}</td>
                <td class="center">${t.sc}</td>
                <td class="center">${t.dif}</td>
                <td class="center"><strong style="color: var(--primary-color)">${t.pts}</strong></td>
            </tr>
        `,
      )
      .join("")
  } else if (deporte === "Padel") {
    headers =
      '<th>Pos</th><th>Pareja</th><th class="center">PJ</th><th class="center">PG</th><th class="center">PP</th><th class="center">Sets</th><th class="center">Pts</th>'
    rows = clasificacion
      .map(
        (t) => `
            <tr>
                <td><strong>${t.pos}</strong></td>
                <td><strong>${t.equipo}</strong></td>
                <td class="center">${t.pj}</td>
                <td class="center">${t.pg}</td>
                <td class="center">${t.pp}</td>
                <td class="center">${t.sets}</td>
                <td class="center"><strong style="color: var(--primary-color)">${t.pts}</strong></td>
            </tr>
        `,
      )
      .join("")
  }

  container.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3>🏆 Tabla de Clasificación</h3>
            </div>
            <div class="card-content">
                <table class="table">
                    <thead><tr>${headers}</tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>
    `
}

function renderCalendarioTorneo(calendario) {
  const container = document.getElementById("tab-calendario")

  container.innerHTML = calendario
    .map(
      (jornada) => `
        <div class="jornada-section">
            <h3>Jornada ${jornada.jornada}</h3>
            ${jornada.partidos
              .map(
                (partido) => `
                <div class="partido-card">
                    <div class="partido-header">
                        <div class="partido-datetime">
                            <span>📅 ${partido.fecha}</span>
                            <span>🕐 ${partido.hora}</span>
                        </div>
                        <span class="badge ${partido.estado === "Finalizado" ? "badge-secondary" : "badge-primary"}">
                            ${partido.estado}
                        </span>
                    </div>
                    <div class="partido-match">
                        <div class="partido-team">${partido.local}</div>
                        ${
                          partido.resultado
                            ? `<div class="partido-resultado">${partido.resultado}</div>`
                            : `<div class="partido-vs">vs</div>`
                        }
                        <div class="partido-team">${partido.visitante}</div>
                    </div>
                    ${
                      partido.lugar
                        ? `
                        <div class="partido-details">
                            <div>📍 ${partido.lugar}</div>
                        </div>
                    `
                        : ""
                    }
                </div>
            `,
              )
              .join("")}
        </div>
    `,
    )
    .join("")
}

function renderEquiposTorneo(equipos) {
  const container = document.getElementById("tab-equipos")

  container.innerHTML = `
        <div class="equipos-grid">
            ${equipos
              .map(
                (equipo) => `
                <div class="equipo-card">
                    <h4>${equipo}</h4>
                    <div class="equipo-meta">Inscrito en el torneo</div>
                </div>
            `,
              )
              .join("")}
        </div>
    `
}

function cambiarTab(tab) {
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))

  event.target.classList.add("active")
  document.getElementById(`tab-${tab}`).classList.add("active")
}

function crearTorneo() {
  alert("Funcionalidad de crear torneo - En desarrollo")
}

function editarTorneo() {
  alert("Funcionalidad de editar torneo - En desarrollo")
}

function programarPartido() {
  alert("Funcionalidad de programar partido - En desarrollo")
}

// ==================== EQUIPOS ====================

function initEquipos() {
  renderEquiposPorDeporte()
}

function renderEquiposPorDeporte() {
  const container = document.getElementById("equiposPorDeporte")
  if (!container) return

  container.innerHTML = Object.entries(equiposPorDeporte)
    .map(
      ([deporte, equipos]) => `
        <div class="deporte-section">
            <div class="deporte-header" onclick="toggleDeporte(this)">
                <h3>${getDeporteIcon(deporte)} ${deporte}</h3>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span class="deporte-count">${equipos.length} equipos</span>
                    <span class="chevron">▼</span>
                </div>
            </div>
            <div class="deporte-content">
                <div class="equipos-grid">
                    ${equipos
                      .map(
                        (equipo) => `
                        <div class="equipo-card">
                            <h4>${equipo.nombre}</h4>
                            <div class="equipo-meta">${equipo.torneo}</div>
                            <div class="equipo-stats">
                                <span class="badge badge-secondary">Titulares: ${equipo.titulares}</span>
                                ${equipo.suplentes > 0 ? `<span class="badge badge-secondary">Suplentes: ${equipo.suplentes}</span>` : ""}
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function toggleDeporte(element) {
  const content = element.nextElementSibling
  const chevron = element.querySelector(".chevron")

  content.classList.toggle("active")
  chevron.textContent = content.classList.contains("active") ? "▲" : "▼"
}

function getDeporteIcon(deporte) {
  const icons = {
    Fútbol: "⚽",
    Baloncesto: "🏀",
    Rugby: "🏉",
    Volleyball: "🏐",
    Tenis: "🎾",
    Padel: "🎾",
  }
  return icons[deporte] || "🏆"
}

// ==================== CALENDARIO ====================

function initCalendario() {
  renderCalendarioCompleto()
}

function renderCalendarioCompleto() {
  const container = document.getElementById("calendarioPartidos")
  if (!container) return

  // Reunir todos los partidos de todos los torneos
  const todosPartidos = []

  Object.values(dataTorneos).forEach((data, index) => {
    const torneo = torneos[index]
    data.calendario.forEach((jornada) => {
      jornada.partidos.forEach((partido) => {
        todosPartidos.push({
          ...partido,
          torneo: torneo.nombre,
          deporte: torneo.deporte,
          jornada: jornada.jornada,
        })
      })
    })
  })

  // Ordenar por fecha
  todosPartidos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))

  container.innerHTML = todosPartidos
    .map(
      (partido) => `
        <div class="partido-card">
            <div class="partido-header">
                <div class="partido-datetime">
                    <span>📅 ${partido.fecha}</span>
                    <span>🕐 ${partido.hora}</span>
                    <span>🏆 ${partido.torneo}</span>
                </div>
                <span class="badge ${partido.estado === "Finalizado" ? "badge-secondary" : "badge-primary"}">
                    ${partido.estado}
                </span>
            </div>
            <div class="partido-match">
                <div class="partido-team">${partido.local}</div>
                ${
                  partido.resultado
                    ? `<div class="partido-resultado">${partido.resultado}</div>`
                    : `<div class="partido-vs">vs</div>`
                }
                <div class="partido-team">${partido.visitante}</div>
            </div>
            ${
              partido.lugar
                ? `
                <div class="partido-details">
                    <div>📍 ${partido.lugar}</div>
                    ${partido.jornada ? `<div>Jornada ${partido.jornada}</div>` : ""}
                </div>
            `
                : ""
            }
        </div>
    `,
    )
    .join("")
}

// ==================== PERSONAL ====================

function initPersonal() {
  renderPersonalTable("arbitros")
}

function cambiarTabPersonal(tipo) {
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))

  event.target.classList.add("active")
  document.getElementById(`tab-${tipo}`).classList.add("active")

  renderPersonalTable(tipo)
}

function renderPersonalTable(tipo) {
  const container = document.getElementById(`tab-${tipo}`)
  if (!container) return

  const personas = personal[tipo]

  container.innerHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría Habilitada</th>
                    <th>Deporte</th>
                    <th>Disponibilidad</th>
                </tr>
            </thead>
            <tbody>
                ${personas
                  .map(
                    (persona) => `
                    <tr>
                        <td><strong>${persona.nombre}</strong></td>
                        <td><span class="badge badge-secondary">${persona.categoria}</span></td>
                        <td>${persona.deporte}</td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" ${persona.disponible ? "checked" : ""}>
                                <span class="slider"></span>
                            </label>
                            <span style="margin-left: 0.5rem; font-size: 0.875rem; color: var(--text-secondary)">
                                ${persona.disponible ? "Disponible" : "No disponible"}
                            </span>
                        </td>
                    </tr>
                `,
                  )
                  .join("")}
            </tbody>
        </table>
    `
}

// ==================== CONFIGURACIÓN ====================

function initConfiguracion() {
  setupConfigListeners()
}

function setupConfigListeners() {
  const darkModeSwitch = document.getElementById("darkModeSwitch")
  const highContrastSwitch = document.getElementById("highContrastSwitch")
  const fontSizeSelect = document.getElementById("fontSizeSelect")

  if (darkModeSwitch) {
    darkModeSwitch.checked = document.body.classList.contains("dark-mode")
    darkModeSwitch.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.classList.add("dark-mode")
        localStorage.setItem("theme", "dark")
      } else {
        document.body.classList.remove("dark-mode")
        localStorage.setItem("theme", "light")
      }
    })
  }

  if (highContrastSwitch) {
    highContrastSwitch.checked = document.body.classList.contains("high-contrast")
    highContrastSwitch.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.classList.add("high-contrast")
        localStorage.setItem("highContrast", "true")
      } else {
        document.body.classList.remove("high-contrast")
        localStorage.setItem("highContrast", "false")
      }
    })
  }

  if (fontSizeSelect) {
    const currentSize = localStorage.getItem("fontSize") || "medium"
    fontSizeSelect.value = currentSize
    fontSizeSelect.addEventListener("change", (e) => {
      document.body.classList.remove("font-small", "font-medium", "font-large")
      document.body.classList.add(`font-${e.target.value}`)
      localStorage.setItem("fontSize", e.target.value)
    })
  }
}

// ==================== TEMA Y CONFIGURACIÓN ====================

function toggleTheme() {
  document.body.classList.toggle("dark-mode")
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light"
  localStorage.setItem("theme", theme)

  const themeToggle = document.getElementById("themeToggle")
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙"
  }
}

function loadTheme() {
  const theme = localStorage.getItem("theme")
  if (theme === "dark") {
    document.body.classList.add("dark-mode")
    const themeToggle = document.getElementById("themeToggle")
    if (themeToggle) themeToggle.textContent = "☀️"
  }
}

function loadSettings() {
  const highContrast = localStorage.getItem("highContrast")
  if (highContrast === "true") {
    document.body.classList.add("high-contrast")
  }

  const fontSize = localStorage.getItem("fontSize") || "medium"
  document.body.classList.add(`font-${fontSize}`)
}

// ==================== INICIALIZACIÓN ====================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp)
} else {
  initApp()
}
