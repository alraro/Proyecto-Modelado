"use client"

import { Moon, Sun, Type, Contrast } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SettingsPanelProps {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
  fontSize: "small" | "medium" | "large"
  setFontSize: (size: "small" | "medium" | "large") => void
  highContrast: boolean
  setHighContrast: (value: boolean) => void
}

export function SettingsPanel({
  theme,
  setTheme,
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
}: SettingsPanelProps) {
  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="w-5 h-5" />
            Modo de Apariencia
          </CardTitle>
          <CardDescription>Cambia entre modo claro y oscuro</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            onClick={() => setTheme("light")}
            className="flex-1"
          >
            <Sun className="w-4 h-4 mr-2" />
            Claro
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            onClick={() => setTheme("dark")}
            className="flex-1"
          >
            <Moon className="w-4 h-4 mr-2" />
            Oscuro
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5" />
            Tamaño de Fuente
          </CardTitle>
          <CardDescription>Ajusta el tamaño del texto para mayor comodidad</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button
            variant={fontSize === "small" ? "default" : "outline"}
            onClick={() => setFontSize("small")}
            className="flex-1 text-sm"
          >
            Pequeño
          </Button>
          <Button
            variant={fontSize === "medium" ? "default" : "outline"}
            onClick={() => setFontSize("medium")}
            className="flex-1"
          >
            Mediano
          </Button>
          <Button
            variant={fontSize === "large" ? "default" : "outline"}
            onClick={() => setFontSize("large")}
            className="flex-1 text-lg"
          >
            Grande
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Contrast className="w-5 h-5" />
            Alto Contraste
          </CardTitle>
          <CardDescription>Mejora la legibilidad con colores más intensos</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button
            variant={!highContrast ? "default" : "outline"}
            onClick={() => setHighContrast(false)}
            className="flex-1"
          >
            Desactivado
          </Button>
          <Button
            variant={highContrast ? "default" : "outline"}
            onClick={() => setHighContrast(true)}
            className="flex-1"
          >
            Activado
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
