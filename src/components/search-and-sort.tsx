"use client"

import { useState } from "react"
import { Search, ArrowUpDown, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function SearchAndSort() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-2 flex-1 sm:max-w-[17rem]">
        <Input
          placeholder="Enter prompts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-[#3d3d3f] text-gray-400 placeholder:text-[#909090] focus:border-slate-600 text-sm flex-1"
        />

        <div className="bg-white h-8 w-8 min-w-8 aspect-square flex items-center justify-center rounded">
          <Search className="text-slate-500 h-4 w-4" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Select defaultValue="brand-name">
          <SelectTrigger className="border-[#3d3d3f] text-white/60 focus-within:border-gray-300 cursor-pointer text-sm pr-8 relative bg-[#09090b] w-full sm:w-auto min-w-[120px]">
            <SelectValue />
            <span className="absolute right-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </span>
          </SelectTrigger>

          <SelectContent className="border-[#3d3d3f] text-gray-400 bg-[#09090b]">
            <SelectItem
              value="brand-name"
              className="text-gray-400 bg-transparent! focus:text-white cursor-pointer hover:bg-transparent!"
            >
              Brand Name
            </SelectItem>
            <SelectItem
              value="mentions"
              className="text-gray-400 bg-transparent! focus:text-white cursor-pointer hover:bg-transparent!"
            >
              Mentions
            </SelectItem>
            <SelectItem
              value="topics"
              className="text-gray-400 bg-transparent! focus:text-white cursor-pointer hover:bg-transparent!"
            >
              Topics found in
            </SelectItem>
            <SelectItem
              value="enriched"
              className="text-gray-400 bg-transparent! focus:text-white cursor-pointer hover:bg-transparent!"
            >
              Enriched
            </SelectItem>
            <SelectItem
              value="last-updated"
              className="text-gray-400 bg-transparent! focus:text-white cursor-pointer hover:bg-transparent!"
            >
              Last Updated
            </SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-100 border border-[#3d3d3f] bg-transparent! cursor-pointer"
        >
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
