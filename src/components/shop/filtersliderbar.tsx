'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Product } from '@/lib/types'
import { useCategories } from '@/hooks/useproduct'
import {
  checkboxLabelStyle,
  chevronStyle,
  expandedChevronStyle,
  filterSectionStyle,
  getFilterSidebarStyle,
  lastFilterSectionStyle,
  priceInputsStyle, 
  sectionContentStyle,
  sectionHeaderStyle
} from '@/styles/components/filterSidebarStyles'
import { useIsMobile } from '@/hooks/useIsmobile'

interface FilterSidebarProps {
  products: Product[]
  onFilterChange: (filtered: Product[]) => void
}

export default function FilterSidebar({ products, onFilterChange }: FilterSidebarProps) {
  const { categories } = useCategories()
  const isMobile = useIsMobile()

  const [filters, setFilters] = useState({
    customizable: false,
    categories: new Set<string>(),
    priceRange: [0, 1000],
    ratings: new Set<number>()
  })

  const [expandedSections, setExpandedSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    
    let filtered = products

    // Filter by customizable
    if (newFilters.customizable) {
      // You can add real logic here if needed
      filtered = filtered.filter(p => p.title.toLowerCase().includes('custom'))
    }

    // Filter by category
    if (newFilters.categories.size > 0) {
      filtered = filtered.filter(product =>
        newFilters.categories.has(product.category)
      )
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= newFilters.priceRange[0] &&
      product.price <= newFilters.priceRange[1]
    )

    // Filter by ratings
    if (newFilters.ratings.size > 0) {
      filtered = filtered.filter(product =>
        Array.from(newFilters.ratings).some(r => product.rating.rate >= r)
      )
    }

    onFilterChange(filtered)
  }

  const toggleCategory = (category: string) => {
    const newSet = new Set(filters.categories)
    if (newSet.has(category)) newSet.delete(category)
    else newSet.add(category)
    handleFilterChange({ ...filters, categories: newSet })
  }

  const toggleRating = (rating: number) => {
    const newSet = new Set(filters.ratings)
    if (newSet.has(rating)) newSet.delete(rating)
    else newSet.add(rating)
    handleFilterChange({ ...filters, ratings: newSet })
  }

  return (
    <div style={getFilterSidebarStyle(isMobile)}>

      {/* Customizable */}
      <div style={filterSectionStyle}>
        <label style={checkboxLabelStyle}>
          <input
            type="checkbox"
            checked={filters.customizable}
            onChange={(e) => handleFilterChange({
              ...filters,
              customizable: e.target.checked
            })}
          />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      {/* Categories */}
      <div style={filterSectionStyle}>
        <button
          onClick={() => toggleSection('idealFor')}
          style={sectionHeaderStyle}
        >
          <span>CATEGORY</span>
          <ChevronDown style={{
            ...chevronStyle,
            ...(expandedSections.idealFor ? expandedChevronStyle : {})
          }} />
        </button>

        {expandedSections.idealFor && (
          <div style={sectionContentStyle}>
            {categories.map(category => (
              <label key={category} style={checkboxLabelStyle}>
                <input
                  type="checkbox"
                  checked={filters.categories.has(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span style={{ textTransform: 'capitalize' }}>{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div style={filterSectionStyle}>
        <button
          onClick={() => toggleSection('occasion')}
          style={sectionHeaderStyle}
        >
          <span>PRICE RANGE</span>
          <ChevronDown style={{
            ...chevronStyle,
            ...(expandedSections.occasion ? expandedChevronStyle : {})
          }} />
        </button>

        {expandedSections.occasion && (
          <div style={sectionContentStyle}>
            <div style={priceInputsStyle}>
              <input
                type="number"
                placeholder="Min"
                value={filters.priceRange[0]}
                onChange={(e) => handleFilterChange({
                  ...filters,
                  priceRange: [Number(e.target.value), filters.priceRange[1]]
                })}
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange({
                  ...filters,
                  priceRange: [filters.priceRange[0], Number(e.target.value)]
                })}
              />
            </div>
          </div>
        )}
      </div>

      {/* Rating */}
      <div style={lastFilterSectionStyle}>
        <button
          onClick={() => toggleSection('work')}
          style={sectionHeaderStyle}
        >
          <span>MINIMUM RATING</span>
          <ChevronDown style={{
            ...chevronStyle,
            ...(expandedSections.work ? expandedChevronStyle : {})
          }} />
        </button>

        {expandedSections.work && (
          <div style={sectionContentStyle}>
            {[1, 2, 3, 4, 5].map(rating => (
              <label key={rating} style={checkboxLabelStyle}>
                <input
                  type="checkbox"
                  checked={filters.ratings.has(rating)}
                  onChange={() => toggleRating(rating)}
                />
                <span>{`${rating}+ Stars`}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}