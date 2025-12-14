"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { PanelControl } from "@/components/panel-control"
import { GestionTorneos } from "@/components/gestion-torneos"
import { DetalleTorneo } from "@/components/detalle-torneo"
import { DetalleEquipo } from "@/components/detalle-equipo"
import { Personal } from "@/components/personal"
import { SettingsPanel } from "@/components/settings-panel"

export type Section = "dashboard" | "torneos" | "detalle-torneo" | "equipos" | "personal" | "settings"

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>("dashboard")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium")
  const [highContrast, setHighContrast] = useState(false)

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const savedFontSize = localStorage.getItem("fontSize") as "small" | "medium" | "large" | null
    const savedHighContrast = localStorage.getItem("highContrast") === "true"

    if (savedTheme) setTheme(savedTheme)
    if (savedFontSize) setFontSize(savedFontSize)
    setHighContrast(savedHighContrast)
  }, [])

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  // Apply font size to document
  useEffect(() => {
    document.documentElement.classList.remove("text-small", "text-medium", "text-large")
    document.documentElement.classList.add(`text-${fontSize}`)
    localStorage.setItem("fontSize", fontSize)
  }, [fontSize])

  // Apply high contrast to document
  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast)
    localStorage.setItem("highContrast", String(highContrast))
  }, [highContrast])

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-y-auto">
        {activeSection === "dashboard" && <PanelControl />}
        {activeSection === "torneos" && <GestionTorneos />}
        {activeSection === "detalle-torneo" && <DetalleTorneo />}
        {activeSection === "equipos" && <DetalleEquipo />}
        {activeSection === "personal" && <Personal />}
        {activeSection === "settings" && (
          <SettingsPanel
            theme={theme}
            setTheme={setTheme}
            fontSize={fontSize}
            setFontSize={setFontSize}
            highContrast={highContrast}
            setHighContrast={setHighContrast}
          />
        )}
      </main>
    </div>
  )
}
