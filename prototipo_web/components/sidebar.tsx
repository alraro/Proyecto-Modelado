"use client"

import { LayoutDashboard, Trophy, Users, UserCog, Settings } from "lucide-react"
import type { Section } from "@/app/page"

interface SidebarProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const menuItems = [
    { id: "dashboard" as Section, label: "Panel de Control", icon: LayoutDashboard },
    { id: "torneos" as Section, label: "Torneos", icon: Trophy },
    { id: "equipos" as Section, label: "Equipos y Plantillas", icon: Users },
    { id: "personal" as Section, label: "Personal y Árbitros", icon: UserCog },
    { id: "settings" as Section, label: "Configuración", icon: Settings },
  ]

  return (
    <aside className="w-64 border-r border-border bg-sidebar flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">Sistema de Gestión</h1>
        <p className="text-sm text-sidebar-foreground/60 mt-1">Torneos Deportivos</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
