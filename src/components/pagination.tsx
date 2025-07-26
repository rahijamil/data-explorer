"use client"

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PaginationProps {
  currentPage: number
  totalPages: number
  rowsPerPage: number
  totalRows: number
  onPageChange: (page: number) => void
  onRowsPerPageChange: (rows: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  rowsPerPage,
  totalRows,
  onPageChange,
  onRowsPerPageChange,
}: PaginationProps) {
  const startRow = (currentPage - 1) * rowsPerPage + 1
  const endRow = Math.min(currentPage * rowsPerPage, totalRows)

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
      <div className="text-sm text-gray-400 order-2 sm:order-1">
        Showing {startRow}-{endRow} rows out of {totalRows}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 sm:order-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300 whitespace-nowrap">Rows per page</span>
          <Select value={rowsPerPage.toString()} onValueChange={(value) => onRowsPerPageChange(Number(value))}>
            <SelectTrigger className="border-[#3d3d3f] text-white/60 focus-within:border-gray-300 cursor-pointer text-sm pr-8 relative w-16">
              <SelectValue />
              <span className="absolute right-2 pointer-events-none">
                <ChevronsUpDown className="h-4 w-4 text-gray-400" />
              </span>
            </SelectTrigger>
            <SelectContent className="bg-[#09090b] border-gray-700 text-gray-100">
              <SelectItem value="10" className="text-gray-400 bg-transparent! focus:text-white cursor-pointer">
                10
              </SelectItem>
              <SelectItem value="20" className="text-gray-400 bg-transparent! focus:text-white cursor-pointer">
                20
              </SelectItem>
              <SelectItem value="50" className="text-gray-400 bg-transparent! focus:text-white cursor-pointer">
                50
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400 whitespace-nowrap">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              className="h-8 w-8 text-gray-400 hover:text-gray-100 hover:bg-gray-800 disabled:opacity-30 border border-gray-700 bg-transparent!"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-8 w-8 text-gray-400 hover:text-gray-100 hover:bg-gray-800 disabled:opacity-30 border border-gray-700 bg-transparent!"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="h-8 w-8 text-gray-400 hover:text-gray-100 hover:bg-gray-800 disabled:opacity-30 border border-gray-700 cursor-pointer bg-transparent!"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              className="h-8 w-8 text-gray-400 hover:text-gray-100 hover:bg-gray-800 disabled:opacity-30 border border-gray-700 cursor-pointer bg-transparent!"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
