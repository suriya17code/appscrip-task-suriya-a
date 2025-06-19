
'use client'

interface SortSelectProps {
  onSortChange: (sortType: string) => void
}

export default function SortSelect({ onSortChange }: SortSelectProps) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value)
  }

  return (
    <select className="sort-select" onChange={handleSortChange}>
      <option value="recommended">RECOMMENDED</option>
      <option value="newest">NEWEST FIRST</option>
      <option value="popular">POPULAR</option>
      <option value="price-high">PRICE: HIGH TO LOW</option>
      <option value="price-low">PRICE: LOW TO HIGH</option>
      <option value="rating">HIGHEST RATED</option>
    </select>
  )
}