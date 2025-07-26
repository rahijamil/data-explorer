"use client"

import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface BrandsTableProps {
  brandData: Array<{
    name: string
    mentions: number
    topics: number
    enriched: boolean
    lastUpdated: string
  }>
  currentPage: number
  rowsPerPage: number
}

export function BrandsTable({ brandData, currentPage, rowsPerPage }: BrandsTableProps) {
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const currentData = brandData.slice(startIndex, endIndex)

  return (
    <div className="border border-[#3d3d3f] rounded-lg overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow className="border-[#3d3d3f] hover:bg-transparent">
              <TableHead className="text-gray-400 text-sm h-12 px-6">Brand Name</TableHead>
              <TableHead className="text-gray-400 text-sm h-12 px-6">Mentions</TableHead>
              <TableHead className="text-gray-400 text-sm h-12 px-6">Topics found in</TableHead>
              <TableHead className="text-gray-400 text-sm h-12 px-6">Enriched</TableHead>
              <TableHead className="text-gray-400 text-sm h-12 px-6">Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((brand, index) => (
              <TableRow key={index} className="border-[#3d3d3f] hover:bg-[#3d3d3f]/30">
                <TableCell className="text-slate-100 font-medium h-14 px-6">{brand.name}</TableCell>
                <TableCell className="text-slate-300 h-14 px-6">{brand.mentions}</TableCell>
                <TableCell className="text-slate-300 h-14 px-6">{brand.topics}</TableCell>
                <TableCell className="h-14 px-6">
                  <Badge
                    variant="secondary"
                    className={`text-xs font-medium px-2 py-0.5 rounded-xl ${
                      brand.enriched ? "bg-green-900/50 text-green-400" : "bg-red-900/50 text-red-400"
                    }`}
                  >
                    {brand.enriched ? "Yes" : "No"}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-300 h-14 px-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{brand.lastUpdated}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 p-4">
        {currentData.map((brand, index) => (
          <div key={index} className="bg-[#1a1a1c] border border-[#3d3d3f] rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-100 font-medium text-lg">{brand.name}</h3>
              <Badge
                variant="secondary"
                className={`text-xs font-medium px-2 py-0.5 rounded-xl ${
                  brand.enriched ? "bg-green-900/50 text-green-400" : "bg-red-900/50 text-red-400"
                }`}
              >
                {brand.enriched ? "Yes" : "No"}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Mentions:</span>
                <span className="text-slate-300 ml-2">{brand.mentions}</span>
              </div>
              <div>
                <span className="text-gray-400">Topics:</span>
                <span className="text-slate-300 ml-2">{brand.topics}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400">Last Updated:</span>
              <span className="text-slate-300">{brand.lastUpdated}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
