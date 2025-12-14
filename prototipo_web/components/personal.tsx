"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export function Personal() {
  const arbitros = [
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
  ]

  const entrenadores = [
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
  ]

  const narradores = [
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
  ]

  const renderPersonalTable = (personal: typeof arbitros) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Nombre</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Categoría Habilitada</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Deporte</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          {personal.map((persona, index) => (
            <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
              <td className="py-3 px-4 font-medium">{persona.nombre}</td>
              <td className="py-3 px-4">
                <Badge variant="outline">{persona.categoria}</Badge>
              </td>
              <td className="py-3 px-4">{persona.deporte}</td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <Switch checked={persona.disponible} />
                  <span className="text-sm text-muted-foreground">
                    {persona.disponible ? "Disponible" : "No disponible"}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Personal y Árbitros</h1>
        <p className="text-muted-foreground mt-1">Gestiona árbitros, entrenadores y narradores</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal del Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="arbitros" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="arbitros">Árbitros</TabsTrigger>
              <TabsTrigger value="entrenadores">Entrenadores</TabsTrigger>
              <TabsTrigger value="narradores">Narradores</TabsTrigger>
            </TabsList>
            <TabsContent value="arbitros" className="mt-6">
              {renderPersonalTable(arbitros)}
            </TabsContent>
            <TabsContent value="entrenadores" className="mt-6">
              {renderPersonalTable(entrenadores)}
            </TabsContent>
            <TabsContent value="narradores" className="mt-6">
              {renderPersonalTable(narradores)}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
