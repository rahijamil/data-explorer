"use client"

import { useState } from "react"
import { Header } from "../components/header"
import { SearchAndSort } from "../components/search-and-sort"
import { BrandsTable } from "../components/brands-table"
import { Pagination } from "../components/pagination"

const brandData = [
  {
    name: "Jetwing",
    mentions: 28,
    topics: 5,
    enriched: true,
    lastUpdated: "1st April 2025",
  },
  {
    name: "Aitken Spence",
    mentions: 34,
    topics: 7,
    enriched: false,
    lastUpdated: "1st April 2025",
  },
  {
    name: "Taj Hotels",
    mentions: 40,
    topics: 10,
    enriched: true,
    lastUpdated: "1st April 2025",
  },
  {
    name: "Cinnamon Hotels",
    mentions: 45,
    topics: 12,
    enriched: true,
    lastUpdated: "5th April 2025",
  },
  {
    name: "Hilton",
    mentions: 50,
    topics: 15,
    enriched: false,
    lastUpdated: "10th April 2025",
  },
  {
    name: "Marriott",
    mentions: 60,
    topics: 20,
    enriched: true,
    lastUpdated: "15th April 2025",
  },
  {
    name: "Radisson Blu",
    mentions: 55,
    topics: 18,
    enriched: false,
    lastUpdated: "20th April 2025",
  },
  {
    name: "Sheraton",
    mentions: 70,
    topics: 25,
    enriched: true,
    lastUpdated: "25th April 2025",
  },
  {
    name: "InterContinental",
    mentions: 65,
    topics: 22,
    enriched: true,
    lastUpdated: "1st May 2025",
  },
  {
    name: "Four Seasons",
    mentions: 75,
    topics: 30,
    enriched: false,
    lastUpdated: "5th May 2025",
  },
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const totalRows = brandData.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  return (
    <div className="min-h-screen bg-[#09090b]">
      <Header />

      <div className="bg-[#09090b] min-h-screen px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#909090]">
            All Brands
          </h2>
          <SearchAndSort />
          <BrandsTable brandData={brandData} currentPage={currentPage} rowsPerPage={rowsPerPage} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            rowsPerPage={rowsPerPage}
            totalRows={totalRows}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={(rows) => {
              setRowsPerPage(rows)
              setCurrentPage(1)
            }}
          />
        </div>
      </div>
    </div>
  )
}
