import { FilterButtons } from "./filter-buttons"

export function Header() {
  return (
    <header className="bg-[#151517] p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <h1 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#909090]">
          Data Explorer
        </h1>
        <div className="hidden sm:block text-[#909090] text-3xl font-thin">|</div>
        <span className="text-[#909090] text-sm font-medium">Similar Brands:</span>
      </div>

      <p className="text-white text-sm">Marketing copy to be inserted here.</p>

      <FilterButtons />
    </header>
  )
}
