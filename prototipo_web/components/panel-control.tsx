"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, Users, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function PanelControl() {
  const stats = [
    { label: "Torneos Activos", value: "6", icon: Trophy, color: "text-emerald-600" },
    { label: "Partidos Hoy", value: "5", icon: Calendar, color: "text-blue-600" },
    { label: "Equipos Inscritos", value: "44", icon: Users, color: "text-purple-600" },
    { label: "Partidos Completados", value: "48", icon: TrendingUp, color: "text-indigo-600" },
  ]

  const proximosPartidos = [
    { hora: "16:00", equipoLocal: "Sevilla Rugby", equipoVisitante: "Málaga Rugby", lugar: "Estadio Municipal" },
    { hora: "18:00", equipoLocal: "Unicaja", equipoVisitante: "Real Madrid", lugar: "Pabellón Martín Carpena" },
    { hora: "19:30", equipoLocal: "FC Barcelona", equipoVisitante: "Valencia CF", lugar: "Camp Nou" },
    {
      hora: "20:00",
      equipoLocal: "Rincón Fertilidad",
      equipoVisitante: "Cazoo Baskonia",
      lugar: "Palacio de Deportes",
    },
    { hora: "21:00", equipoLocal: "Carlos Alcaraz", equipoVisitante: "Rafael Nadal", lugar: "Pista Central" },
  ]

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Panel de Control</h1>
        <p className="text-muted-foreground mt-1">Vista general del sistema de gestión de torneos</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Próximos Partidos */}
      <Card>
        <CardHeader>
          <CardTitle>Próximos Partidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {proximosPartidos.map((partido, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">{partido.hora}</p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {partido.equipoLocal} <span className="text-muted-foreground">vs</span> {partido.equipoVisitante}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{partido.lugar}</p>
                  </div>
                </div>
                <Badge variant="outline">Hoy</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
