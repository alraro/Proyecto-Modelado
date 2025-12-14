"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, MapPin, Clock, Castle as Whistle, Edit, Users, Trophy } from "lucide-react"

export function DetalleTorneo() {
  const [activeTab, setActiveTab] = useState("clasificacion")

  const torneo = {
    nombre: "Liga Endesa 2024",
    deporte: "Baloncesto",
    categoria: "Senior",
    nivel: "Nacional",
    temporada: "2024",
    estado: "Activo",
    equipos: "4/4",
    progreso: "50%",
    sede: "Málaga, España",
  }

  const clasificacion = [
    { pos: 1, equipo: "Unicaja Málaga", puntos: 12, pj: 6, pg: 6, pp: 0 },
    { pos: 2, equipo: "Rincón Basket", puntos: 10, pj: 6, pg: 5, pp: 1 },
    { pos: 3, equipo: "Real Madrid", puntos: 8, pj: 6, pg: 4, pp: 2 },
    { pos: 4, equipo: "FC Barcelona", puntos: 6, pj: 6, pg: 3, pp: 3 },
  ]

  const calendario = [
    {
      jornada: 1,
      partidos: [
        {
          fecha: "20 Mayo",
          hora: "18:00",
          equipoLocal: "Unicaja Málaga",
          equipoVisitante: "Real Madrid",
          resultado: "85-78",
          lugar: "Pabellón Martín Carpena",
          arbitro: "Carlos Pérez",
          estado: "Finalizado",
        },
        {
          fecha: "20 Mayo",
          hora: "20:30",
          equipoLocal: "Rincón Basket",
          equipoVisitante: "FC Barcelona",
          resultado: "92-88",
          lugar: "Polideportivo Sur",
          arbitro: "Juan García",
          estado: "Finalizado",
        },
      ],
    },
    {
      jornada: 2,
      partidos: [
        {
          fecha: "27 Mayo",
          hora: "18:00",
          equipoLocal: "Real Madrid",
          equipoVisitante: "Rincón Basket",
          resultado: null,
          lugar: "WiZink Center",
          arbitro: "Miguel Sánchez",
          estado: "Pendiente",
        },
        {
          fecha: "27 Mayo",
          hora: "20:00",
          equipoLocal: "FC Barcelona",
          equipoVisitante: "Unicaja Málaga",
          resultado: null,
          lugar: "Palau Blaugrana",
          arbitro: "Luis Fernández",
          estado: "Pendiente",
        },
      ],
    },
  ]

  const equipos = [
    {
      nombre: "Unicaja Málaga",
      capitan: "Alberto Díaz",
      titulares: "5/5",
      suplentes: "7/7",
      logo: "🏀",
    },
    {
      nombre: "Rincón Basket",
      capitan: "Pablo Ramos",
      titulares: "5/5",
      suplentes: "6/7",
      logo: "⛹️",
    },
    {
      nombre: "Real Madrid",
      capitan: "Sergio Llull",
      titulares: "5/5",
      suplentes: "7/7",
      logo: "👑",
    },
    {
      nombre: "FC Barcelona",
      capitan: "Nikola Mirotic",
      titulares: "5/5",
      suplentes: "7/7",
      logo: "🔵",
    },
  ]

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">{torneo.nombre}</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-emerald-600 hover:bg-emerald-700">{torneo.deporte}</Badge>
            <Badge variant="outline">{torneo.categoria}</Badge>
            <Badge variant="outline">Nivel: {torneo.nivel}</Badge>
            <Badge variant="outline" className="gap-1">
              <MapPin className="w-3 h-3" />
              {torneo.sede}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <span>
              <strong>Equipos:</strong> {torneo.equipos}
            </span>
            <span>
              <strong>Progreso:</strong> {torneo.progreso}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Edit className="w-4 h-4" />
            Editar Torneo
          </Button>
          <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-4 h-4" />
            Programar Partido
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="clasificacion">Clasificación</TabsTrigger>
          <TabsTrigger value="calendario">Calendario</TabsTrigger>
          <TabsTrigger value="equipos">Equipos</TabsTrigger>
        </TabsList>

        {/* Clasificación Tab */}
        <TabsContent value="clasificacion" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-emerald-600" />
                Tabla de Clasificación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Pos</TableHead>
                    <TableHead>Equipo</TableHead>
                    <TableHead className="text-center">Puntos</TableHead>
                    <TableHead className="text-center">PJ</TableHead>
                    <TableHead className="text-center">PG</TableHead>
                    <TableHead className="text-center">PP</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clasificacion.map((team) => (
                    <TableRow key={team.pos}>
                      <TableCell className="font-bold">{team.pos}</TableCell>
                      <TableCell className="font-semibold">{team.equipo}</TableCell>
                      <TableCell className="text-center">
                        <span className="text-emerald-600 font-bold">{team.puntos}</span>
                      </TableCell>
                      <TableCell className="text-center">{team.pj}</TableCell>
                      <TableCell className="text-center">{team.pg}</TableCell>
                      <TableCell className="text-center">{team.pp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Calendario Tab */}
        <TabsContent value="calendario" className="mt-6 space-y-6">
          {calendario.map((jornada) => (
            <div key={jornada.jornada}>
              <h3 className="text-lg font-bold mb-3">Jornada {jornada.jornada}</h3>
              <div className="space-y-4">
                {jornada.partidos.map((partido, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        {/* Date & Time */}
                        <div className="text-center min-w-[100px]">
                          <div className="text-sm text-muted-foreground">{partido.fecha}</div>
                          <div className="text-2xl font-bold text-emerald-600 flex items-center justify-center gap-1">
                            <Clock className="w-5 h-5" />
                            {partido.hora}
                          </div>
                        </div>

                        {/* Match */}
                        <div className="flex-1">
                          <div className="flex items-center justify-center gap-4">
                            <div className="text-right flex-1">
                              <p className="text-lg font-bold">{partido.equipoLocal}</p>
                            </div>
                            {partido.resultado ? (
                              <div className="px-4 py-2 bg-accent rounded-lg">
                                <p className="text-xl font-bold">{partido.resultado}</p>
                              </div>
                            ) : (
                              <div className="text-2xl font-bold text-muted-foreground">vs</div>
                            )}
                            <div className="text-left flex-1">
                              <p className="text-lg font-bold">{partido.equipoVisitante}</p>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{partido.lugar}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Whistle className="w-4 h-4" />
                              <span>{partido.arbitro}</span>
                            </div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div>
                          {partido.estado === "Finalizado" ? (
                            <Badge variant="secondary">Finalizado</Badge>
                          ) : (
                            <Badge variant="outline">Pendiente</Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Equipos Tab */}
        <TabsContent value="equipos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {equipos.map((equipo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{equipo.logo}</div>
                      <div>
                        <h3 className="text-xl font-bold">{equipo.nombre}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Users className="w-3 h-3" />
                          Capitán: {equipo.capitan}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <Badge variant="outline" className="text-xs">
                            Titulares: {equipo.titulares}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Suplentes: {equipo.suplentes}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
