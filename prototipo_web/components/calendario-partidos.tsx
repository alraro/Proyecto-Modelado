import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Clock, Castle as Whistle } from "lucide-react"

export function CalendarioPartidos() {
  const partidos = [
    {
      fecha: "20/05/2024",
      horaInicio: "18:00",
      horaFin: "20:00",
      equipoLocal: "Unicaja",
      equipoVisitante: "Rincón Fertilidad",
      lugar: "Pabellón Martín Carpena",
      arbitro: "Carlos Pérez",
      estado: "Pendiente",
      resultado: null,
    },
    {
      fecha: "20/05/2024",
      horaInicio: "19:00",
      horaFin: "21:00",
      equipoLocal: "Unicaja",
      equipoVisitante: "Real Madrid",
      lugar: "WiZink Center",
      arbitro: "Juan García",
      estado: "Pendiente",
      resultado: null,
    },
    {
      fecha: "21/05/2024",
      horaInicio: "20:00",
      horaFin: "22:00",
      equipoLocal: "FC Barcelona",
      equipoVisitante: "Valencia CF",
      lugar: "Camp Nou",
      arbitro: "Miguel Sánchez",
      estado: "En Juego",
      resultado: null,
    },
    {
      fecha: "19/05/2024",
      horaInicio: "17:00",
      horaFin: "19:00",
      equipoLocal: "Atlético Madrid",
      equipoVisitante: "Sevilla FC",
      lugar: "Wanda Metropolitano",
      arbitro: "Luis Fernández",
      estado: "Finalizado",
      resultado: "2-1",
    },
  ]

  const getEstadoBadge = (estado: string) => {
    if (estado === "Pendiente") return <Badge variant="outline">{estado}</Badge>
    if (estado === "En Juego") return <Badge className="bg-emerald-600 hover:bg-emerald-700">{estado}</Badge>
    return <Badge variant="secondary">{estado}</Badge>
  }

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Calendario de Partidos</h1>
        <p className="text-muted-foreground mt-1">Gestiona y visualiza todos los partidos programados</p>
      </div>

      <div className="grid gap-4">
        {partidos.map((partido, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-accent/30 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <p className="font-semibold text-sm">
                    {partido.fecha} | {partido.horaInicio} - {partido.horaFin}
                  </p>
                </div>
                {getEstadoBadge(partido.estado)}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center flex-1">
                      <p className="text-xl font-bold">{partido.equipoLocal}</p>
                    </div>
                    <div className="text-2xl font-bold text-muted-foreground">vs</div>
                    <div className="text-center flex-1">
                      <p className="text-xl font-bold">{partido.equipoVisitante}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{partido.lugar}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Whistle className="w-4 h-4" />
                      <span>Árbitro: {partido.arbitro}</span>
                    </div>
                  </div>

                  {partido.estado === "Finalizado" && partido.resultado && (
                    <div className="mt-4 p-3 bg-accent rounded-lg">
                      <p className="text-sm font-medium">
                        Resultado: <span className="text-lg font-bold text-emerald-600">{partido.resultado}</span>
                      </p>
                    </div>
                  )}

                  {partido.estado === "Finalizado" && !partido.resultado && (
                    <div className="mt-4">
                      <label className="text-sm font-medium">Ingresar Resultado:</label>
                      <Input placeholder="Ej: 2-1" className="mt-1 max-w-xs" />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
