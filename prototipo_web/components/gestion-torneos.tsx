"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Calendar, Trophy, Users, MapPin, ArrowLeft } from "lucide-react"

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

const getTournamentData = (index: number) => {
  const tournamentDataMap: Record<number, any> = {
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
            },
            { local: "FC Barcelona", visitante: "Real Betis", fecha: "2025-01-18", hora: "18:30", lugar: "Camp Nou" },
            {
              local: "Atlético de Madrid",
              visitante: "Valencia CF",
              fecha: "2025-01-19",
              hora: "16:00",
              lugar: "Wanda Metropolitano",
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
            },
            { local: "Real Sociedad", visitante: "FC Barcelona", fecha: "2025-01-25", hora: "19:00", lugar: "Anoeta" },
            {
              local: "Villarreal CF",
              visitante: "Atlético de Madrid",
              fecha: "2025-01-26",
              hora: "17:00",
              lugar: "La Cerámica",
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
            },
            {
              local: "FC Barcelona Basket",
              visitante: "Baskonia",
              fecha: "2025-02-08",
              hora: "20:30",
              lugar: "Palau Blaugrana",
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
            },
            {
              local: "Joventut Badalona",
              visitante: "FC Barcelona Basket",
              fecha: "2025-02-15",
              hora: "21:00",
              lugar: "Olímpic de Badalona",
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
            },
            {
              local: "CR La Vila",
              visitante: "Ciencias Sevilla",
              fecha: "2025-03-15",
              hora: "18:00",
              lugar: "Pla de Nazaret",
            },
          ],
        },
        {
          jornada: 12,
          partidos: [
            {
              local: "UE Santboiana",
              visitante: "Alcobendas Rugby",
              fecha: "2025-03-22",
              hora: "16:30",
              lugar: "Baldiri Aleu",
            },
            {
              local: "Aparejadores Burgos",
              visitante: "CR La Vila",
              fecha: "2025-03-22",
              hora: "17:30",
              lugar: "El Plantío",
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
            },
            {
              local: "Teruel Voleibol",
              visitante: "Feel Volley Alcobendas",
              fecha: "2025-02-22",
              hora: "18:30",
              lugar: "Los Planos",
            },
          ],
        },
        {
          jornada: 16,
          partidos: [
            {
              local: "Ushuaïa Ibiza",
              visitante: "Unicaja Almería",
              fecha: "2025-03-01",
              hora: "20:00",
              lugar: "Es Viver",
            },
            {
              local: "Manacor",
              visitante: "Teruel Voleibol",
              fecha: "2025-03-01",
              hora: "19:30",
              lugar: "Na Capellera",
            },
          ],
        },
      ],
      equipos: [
        "Unicaja Almería",
        "Teruel Voleibol",
        "CV Guaguas",
        "Feel Volley Alcobendas",
        "Ushuaïa Ibiza",
        "Manacor",
      ],
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
            },
            {
              local: "Rafael Nadal",
              visitante: "Alejandro Davidovich",
              fecha: "2025-04-08",
              hora: "18:00",
              lugar: "Pista Central",
            },
            { local: "Pablo Carreño", visitante: "Jaume Munar", fecha: "2025-04-09", hora: "11:00", lugar: "Pista 1" },
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
        { posicion: 1, equipo: "Díaz/Gutiérrez", partidos: 10, ganados: 8, perdidos: 2, sets: "24-8", puntos: 24 },
        { posicion: 2, equipo: "Martín/Sánchez", partidos: 10, ganados: 7, perdidos: 3, sets: "22-12", puntos: 21 },
        { posicion: 3, equipo: "López/Fernández", partidos: 10, ganados: 7, perdidos: 3, sets: "21-13", puntos: 21 },
        { posicion: 4, equipo: "García/Rodríguez", partidos: 10, ganados: 6, perdidos: 4, sets: "19-15", puntos: 18 },
        { posicion: 5, equipo: "Pérez/Jiménez", partidos: 10, ganados: 5, perdidos: 5, sets: "17-17", puntos: 15 },
        { posicion: 6, equipo: "Ruiz/Moreno", partidos: 10, ganados: 4, perdidos: 6, sets: "15-19", puntos: 12 },
        { posicion: 7, equipo: "Navarro/Muñoz", partidos: 10, ganados: 3, perdidos: 7, sets: "12-22", puntos: 9 },
        { posicion: 8, equipo: "Romero/Alonso", partidos: 10, ganados: 2, perdidos: 8, sets: "10-24", puntos: 6 },
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
            {
              local: "Pérez/Jiménez",
              visitante: "Ruiz/Moreno",
              fecha: "15/03/2025",
              hora: "13:00",
              resultado: "6-3, 5-7, 6-2",
              estado: "Finalizado",
            },
            {
              local: "Navarro/Muñoz",
              visitante: "Romero/Alonso",
              fecha: "15/03/2025",
              hora: "14:30",
              resultado: "4-6, 6-3, 6-4",
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
            {
              local: "Ruiz/Moreno",
              visitante: "Navarro/Muñoz",
              fecha: "22/03/2025",
              hora: "13:00",
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
              local: "Martín/Sánchez",
              visitante: "García/Rodríguez",
              fecha: "29/03/2025",
              hora: "11:30",
              estado: "Pendiente",
            },
            {
              local: "Pérez/Jiménez",
              visitante: "Navarro/Muñoz",
              fecha: "29/03/2025",
              hora: "13:00",
              estado: "Pendiente",
            },
            {
              local: "Romero/Alonso",
              visitante: "Ruiz/Moreno",
              fecha: "29/03/2025",
              hora: "14:30",
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

  return tournamentDataMap[index] || tournamentDataMap[0]
}

export function GestionTorneos() {
  const [searchTerm, setSearchTerm] = useState("")
  const [createOpen, setCreateOpen] = useState(false)
  const [selectedTorneo, setSelectedTorneo] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("clasificacion")
  const [editingTorneoIndex, setEditingTorneoIndex] = useState<number | null>(null)
  const [schedulingTorneoIndex, setSchedulingTorneoIndex] = useState<number | null>(null)
  const [editOpen, setEditOpen] = useState(false)
  const [matchOpen, setMatchOpen] = useState(false)

  const filteredTorneos = torneos.filter(
    (torneo) =>
      torneo.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      torneo.deporte.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEditClick = () => {
    setEditingTorneoIndex(selectedTorneo)
    setEditOpen(true)
  }

  const handleScheduleClick = () => {
    setSchedulingTorneoIndex(selectedTorneo)
    setMatchOpen(true)
  }

  if (selectedTorneo !== null) {
    const torneo = torneos[selectedTorneo]
    const data = getTournamentData(selectedTorneo)

    return (
      <div className="p-8">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSelectedTorneo(null)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{torneo.nombre}</h1>
            <p className="text-muted-foreground mt-1">
              {torneo.deporte} • {torneo.categoria} • {torneo.sede}
            </p>
          </div>
        </div>

        {/* Tournament Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equipos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{torneo.equipos}</div>
              <p className="text-xs text-muted-foreground">Inscritos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Partidos</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data.calendario.reduce((acc: number, j: any) => acc + j.partidos.length, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Programados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jornadas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.calendario.length}</div>
              <p className="text-xs text-muted-foreground">Completadas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sede</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{torneo.sede}</div>
              <p className="text-xs text-muted-foreground">{torneo.nivel}</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <Button onClick={handleEditClick}>
            <Edit className="w-4 h-4 mr-2" />
            Editar Torneo
          </Button>
          <Button variant="outline" onClick={handleScheduleClick}>
            <Calendar className="w-4 h-4 mr-2" />
            Programar Partido
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList>
            <TabsTrigger value="clasificacion">Clasificación</TabsTrigger>
            <TabsTrigger value="calendario">Calendario</TabsTrigger>
            <TabsTrigger value="equipos">Equipos</TabsTrigger>
          </TabsList>

          <TabsContent value="clasificacion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tabla de Clasificación</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">Pos</TableHead>
                      <TableHead>Equipo</TableHead>
                      <TableHead className="text-center">PJ</TableHead>
                      {torneo.deporte === "Fútbol" && (
                        <>
                          <TableHead className="text-center">PG</TableHead>
                          <TableHead className="text-center">PE</TableHead>
                          <TableHead className="text-center">PP</TableHead>
                          <TableHead className="text-center">GF</TableHead>
                          <TableHead className="text-center">GC</TableHead>
                          <TableHead className="text-center">DIF</TableHead>
                        </>
                      )}
                      {torneo.deporte === "Baloncesto" && (
                        <>
                          <TableHead className="text-center">PG</TableHead>
                          <TableHead className="text-center">PP</TableHead>
                          <TableHead className="text-center">PF</TableHead>
                          <TableHead className="text-center">PC</TableHead>
                          <TableHead className="text-center">DIF</TableHead>
                        </>
                      )}
                      {torneo.deporte === "Rugby" && (
                        <>
                          <TableHead className="text-center">PG</TableHead>
                          <TableHead className="text-center">PE</TableHead>
                          <TableHead className="text-center">PP</TableHead>
                          <TableHead className="text-center">PF</TableHead>
                          <TableHead className="text-center">PC</TableHead>
                          <TableHead className="text-center">DIF</TableHead>
                        </>
                      )}
                      {torneo.deporte === "Volleyball" && (
                        <>
                          <TableHead className="text-center">PG</TableHead>
                          <TableHead className="text-center">PP</TableHead>
                          <TableHead className="text-center">SF</TableHead>
                          <TableHead className="text-center">SC</TableHead>
                          <TableHead className="text-center">DIF</TableHead>
                        </>
                      )}
                      {(torneo.deporte === "Tenis" || torneo.deporte === "Padel") && (
                        <>
                          <TableHead className="text-center">PG</TableHead>
                          <TableHead className="text-center">PP</TableHead>
                          <TableHead className="text-center">SF</TableHead>
                          <TableHead className="text-center">SC</TableHead>
                          <TableHead className="text-center">DIF</TableHead>
                        </>
                      )}
                      <TableHead className="text-center font-bold">PTS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.clasificacion.map((equipo: any) => (
                      <TableRow key={equipo.posicion || equipo.pos}>
                        <TableCell className="font-medium">{equipo.posicion || equipo.pos}</TableCell>
                        <TableCell className="font-medium">{equipo.equipo}</TableCell>
                        <TableCell className="text-center">{equipo.partidos || equipo.pj}</TableCell>
                        {torneo.deporte === "Fútbol" && (
                          <>
                            <TableCell className="text-center">{equipo.pg}</TableCell>
                            <TableCell className="text-center">{equipo.pe}</TableCell>
                            <TableCell className="text-center">{equipo.pp}</TableCell>
                            <TableCell className="text-center">{equipo.gf}</TableCell>
                            <TableCell className="text-center">{equipo.gc}</TableCell>
                            <TableCell className="text-center">
                              {equipo.dif > 0 ? `+${equipo.dif}` : equipo.dif}
                            </TableCell>
                          </>
                        )}
                        {torneo.deporte === "Baloncesto" && (
                          <>
                            <TableCell className="text-center">{equipo.pg}</TableCell>
                            <TableCell className="text-center">{equipo.pp}</TableCell>
                            <TableCell className="text-center">{equipo.pf}</TableCell>
                            <TableCell className="text-center">{equipo.pc}</TableCell>
                            <TableCell className="text-center">
                              {equipo.dif > 0 ? `+${equipo.dif}` : equipo.dif}
                            </TableCell>
                          </>
                        )}
                        {torneo.deporte === "Rugby" && (
                          <>
                            <TableCell className="text-center">{equipo.pg}</TableCell>
                            <TableCell className="text-center">{equipo.pe}</TableCell>
                            <TableCell className="text-center">{equipo.pp}</TableCell>
                            <TableCell className="text-center">{equipo.pf}</TableCell>
                            <TableCell className="text-center">{equipo.pc}</TableCell>
                            <TableCell className="text-center">
                              {equipo.dif > 0 ? `+${equipo.dif}` : equipo.dif}
                            </TableCell>
                          </>
                        )}
                        {torneo.deporte === "Volleyball" && (
                          <>
                            <TableCell className="text-center">{equipo.pg}</TableCell>
                            <TableCell className="text-center">{equipo.pp}</TableCell>
                            <TableCell className="text-center">{equipo.sf}</TableCell>
                            <TableCell className="text-center">{equipo.sc}</TableCell>
                            <TableCell className="text-center">
                              {equipo.dif > 0 ? `+${equipo.dif}` : equipo.dif}
                            </TableCell>
                          </>
                        )}
                        {(torneo.deporte === "Tenis" || torneo.deporte === "Padel") && (
                          <>
                            <TableCell className="text-center">{equipo.ganados || equipo.pg}</TableCell>
                            <TableCell className="text-center">{equipo.perdidos || equipo.pp}</TableCell>
                            <TableCell className="text-center">{equipo.sets || equipo.sf}</TableCell>
                            <TableCell className="text-center">{equipo.puntos || equipo.sc}</TableCell>
                            <TableCell className="text-center">
                              {equipo.dif > 0 ? `+${equipo.dif}` : equipo.dif}
                            </TableCell>
                          </>
                        )}
                        <TableCell className="text-center font-bold">{equipo.puntos || equipo.pts}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendario" className="mt-6">
            <div className="space-y-6">
              {data.calendario.map((jornada: any) => (
                <Card key={jornada.jornada}>
                  <CardHeader>
                    <CardTitle>Jornada {jornada.jornada}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {jornada.partidos.map((partido: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-semibold">{partido.local}</div>
                            <div className="text-sm text-muted-foreground">vs</div>
                            <div className="font-semibold">{partido.visitante}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{partido.fecha}</div>
                            <div className="text-sm text-muted-foreground">{partido.hora}</div>
                            {partido.lugar && <div className="text-sm text-muted-foreground">{partido.lugar}</div>}
                            {partido.resultado ? (
                              <div className="text-sm font-medium text-emerald-600">Resultado: {partido.resultado}</div>
                            ) : (
                              <div className="text-sm text-amber-600 font-medium">{partido.estado}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="equipos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.equipos.map((equipo: string, idx: number) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg">{equipo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Categoría:</span>
                        <Badge variant="outline">{torneo.categoria}</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Deporte:</span>
                        <span className="font-medium">{torneo.deporte}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Edit Tournament Dialog */}
        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Editar Torneo</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-nombre">Nombre del Torneo</Label>
                  <Input
                    id="edit-nombre"
                    defaultValue={editingTorneoIndex !== null ? torneos[editingTorneoIndex].nombre : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-deporte">Deporte</Label>
                  <Input
                    id="edit-deporte"
                    defaultValue={editingTorneoIndex !== null ? torneos[editingTorneoIndex].deporte : ""}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-categoria">Categoría</Label>
                  <Select
                    defaultValue={
                      editingTorneoIndex !== null ? torneos[editingTorneoIndex].categoria.toLowerCase() : ""
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="juvenil">Juvenil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-nivel">Nivel</Label>
                  <Select
                    defaultValue={editingTorneoIndex !== null ? torneos[editingTorneoIndex].nivel.toLowerCase() : ""}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local</SelectItem>
                      <SelectItem value="nacional">Nacional</SelectItem>
                      <SelectItem value="internacional">Internacional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-sede">Sede</Label>
                <Input
                  id="edit-sede"
                  defaultValue={editingTorneoIndex !== null ? torneos[editingTorneoIndex].sede : ""}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setEditOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setEditOpen(false)}>Guardar Cambios</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Schedule Match Dialog */}
        <Dialog open={matchOpen} onOpenChange={setMatchOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Programar Partido</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="equipo-local">Equipo Local</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar equipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {schedulingTorneoIndex !== null &&
                        getTournamentData(schedulingTorneoIndex).equipos.map((equipo: string, index: number) => (
                          <SelectItem key={index} value={equipo.toLowerCase().replace(/\s/g, "-")}>
                            {equipo}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="equipo-visitante">Equipo Visitante</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar equipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {schedulingTorneoIndex !== null &&
                        getTournamentData(schedulingTorneoIndex).equipos.map((equipo: string, index: number) => (
                          <SelectItem key={index} value={equipo.toLowerCase().replace(/\s/g, "-")}>
                            {equipo}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fecha">Fecha</Label>
                  <Input id="fecha" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hora">Hora</Label>
                  <Input id="hora" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jornada">Jornada</Label>
                  <Input id="jornada" type="number" placeholder="1" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lugar">Lugar</Label>
                <Input id="lugar" placeholder="Ej: Estadio Santiago Bernabéu" />
              </div>
              {torneo.deporte === "Padel" && (
                <div className="space-y-2">
                  <Label htmlFor="resultado">Resultado</Label>
                  <Input id="resultado" placeholder="Ej: 6-4, 6-3" />
                </div>
              )}
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setMatchOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setMatchOpen(false)}>Programar Partido</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestión de Torneos</h1>
          <p className="text-muted-foreground mt-1">Administra y organiza todos los torneos deportivos</p>
        </div>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Torneo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Torneo</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre del Torneo</Label>
                  <Input id="nombre" placeholder="Ej: Copa Nacional 2025" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deporte">Deporte</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar deporte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="futbol">Fútbol</SelectItem>
                      <SelectItem value="baloncesto">Baloncesto</SelectItem>
                      <SelectItem value="rugby">Rugby</SelectItem>
                      <SelectItem value="volleyball">Volleyball</SelectItem>
                      <SelectItem value="tenis">Tenis</SelectItem>
                      <SelectItem value="padel">Padel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoría</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="juvenil">Juvenil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nivel">Nivel</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local</SelectItem>
                      <SelectItem value="nacional">Nacional</SelectItem>
                      <SelectItem value="internacional">Internacional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sede">Sede</Label>
                <Input id="sede" placeholder="Ej: Madrid" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha de Inicio</Label>
                <Input id="fecha" type="date" />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setCreateOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setCreateOpen(false)}>Crear Torneo</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar torneos por nombre o deporte..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Tournaments Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Deporte</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Equipos</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha Inicio</TableHead>
                <TableHead>Nivel</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTorneos.map((torneo, index) => (
                <TableRow
                  key={torneo.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedTorneo(index)}
                >
                  <TableCell className="font-medium">{torneo.nombre}</TableCell>
                  <TableCell>{torneo.deporte}</TableCell>
                  <TableCell>{torneo.categoria}</TableCell>
                  <TableCell>{torneo.equipos}</TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-emerald-600">
                      {torneo.estado}
                    </Badge>
                  </TableCell>
                  <TableCell>{torneo.fecha}</TableCell>
                  <TableCell>{torneo.nivel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
