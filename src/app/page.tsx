"use client"

import { useState, useMemo } from "react"
import { Header } from "../components/header"
import { SearchAndSort } from "../components/search-and-sort"
import { BrandsTable } from "../components/brands-table"
import { Pagination } from "../components/pagination"

interface DataItem {
  name: string
  mentions: number
  topics: number
  enriched: boolean
  lastUpdated: string
}

const brandData: DataItem[] = [
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

// Mock data for different filters
const topicsData: DataItem[] = [
  { name: "Luxury Travel", mentions: 120, topics: 8, enriched: true, lastUpdated: "1st April 2025" },
  { name: "Business Travel", mentions: 95, topics: 6, enriched: false, lastUpdated: "2nd April 2025" },
  { name: "Family Vacation", mentions: 80, topics: 12, enriched: true, lastUpdated: "3rd April 2025" },
  { name: "Adventure Tourism", mentions: 65, topics: 9, enriched: true, lastUpdated: "4th April 2025" },
  { name: "Eco Tourism", mentions: 45, topics: 7, enriched: false, lastUpdated: "5th April 2025" },
]

const promptsData: DataItem[] = [
  { name: "Hotel Booking", mentions: 150, topics: 15, enriched: true, lastUpdated: "1st April 2025" },
  { name: "Restaurant Reviews", mentions: 130, topics: 12, enriched: false, lastUpdated: "2nd April 2025" },
  { name: "Travel Planning", mentions: 110, topics: 18, enriched: true, lastUpdated: "3rd April 2025" },
  { name: "Flight Booking", mentions: 90, topics: 10, enriched: true, lastUpdated: "4th April 2025" },
  { name: "Car Rental", mentions: 70, topics: 8, enriched: false, lastUpdated: "5th April 2025" },
]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("brands")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  // Get data based on active filter
  const getCurrentData = (): DataItem[] => {
    switch (activeFilter) {
      case "topics":
        return topicsData
      case "prompts":
        return promptsData
      default:
        return brandData
    }
  }

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let data = getCurrentData()

    // Filter by search query
    if (searchQuery) {
      data = data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Sort data
    data = [...data].sort((a, b) => {
      let aValue: string | number | boolean
      let bValue: string | number | boolean

      // Get values based on sort field
      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case "mentions":
          aValue = a.mentions
          bValue = b.mentions
          break
        case "topics":
          aValue = a.topics
          bValue = b.topics
          break
        case "enriched":
          aValue = a.enriched ? 1 : 0
          bValue = b.enriched ? 1 : 0
          break
        case "lastUpdated":
          aValue = a.lastUpdated.toLowerCase()
          bValue = b.lastUpdated.toLowerCase()
          break
        default:
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
      }

      // Compare values
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0
      }
    })

    return data
  }, [activeFilter, searchQuery, sortBy, sortOrder])

  const totalRows = filteredAndSortedData.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  // Reset page when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1)
    setSearchQuery("")
  }

  // Reset page when search changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  // Reset page when sort changes
  const handleSortChange = (sort: string) => {
    setSortBy(sort)
    setCurrentPage(1)
  }

  const handleSortOrderToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    setCurrentPage(1)
  }

  const getFilterTitle = () => {
    switch (activeFilter) {
      case "topics":
        return "All Topics"
      case "prompts":
        return "All Prompts"
      default:
        return "All Brands"
    }
  }

  return (
    <div className="min-h-screen bg-[#09090b]">
      <Header activeFilter={activeFilter} onFilterChange={handleFilterChange} />

      <div className="bg-[#09090b] min-h-screen px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#909090]">
            {getFilterTitle()}
          </h2>
          <SearchAndSort
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
            sortOrder={sortOrder}
            onSortOrderToggle={handleSortOrderToggle}
          />
          <BrandsTable brandData={filteredAndSortedData} currentPage={currentPage} rowsPerPage={rowsPerPage} />
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
