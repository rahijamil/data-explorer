"use client"

import { Building2, ListFilter, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const filters = [
  { id: "brands", label: "All Brands", icon: Building2, color: "#8352b5" },
  { id: "topics", label: "All Topics", icon: ListFilter, color: "#9fa5c2" },
  { id: "prompts", label: "All Prompts", icon: MessageSquare, color: "#b59fbc" },
]

interface FilterButtonsProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      {filters.map((filter) => {
        const Icon = filter.icon
        const isActive = activeFilter === filter.id

        return (
          <Button
            key={filter.id}
            variant="ghost"
            onClick={() => onFilterChange(filter.id)}
            className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded text-sm font-medium transition-colors cursor-pointer ${
              isActive
                ? "bg-white text-black hover:bg-white"
                : "bg-[#2d2d2f] text-slate-300 hover:bg-[#2d2d2f]/90 hover:text-white border border-[#3d3d3f]"
            }`}
          >
            <Icon className={`h-4 w-4`} style={{ color: isActive ? "#8352b5" : filter.color }} />
            <span className="whitespace-nowrap">{filter.label}</span>
          </Button>
        )
      })}
    </div>
  )
}
