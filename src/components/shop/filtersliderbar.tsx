'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Product } from '@/lib/types'
import { useCategories } from '@/hooks/useproduct' 
import { checkboxLabelStyle, chevronStyle, expandedChevronStyle, expandedChevronStyle1, expandedChevronStyle2, filterSectionStyle, getFilterSidebarStyle, lastFilterSectionStyle, priceInputsStyle, radioLabelStyle, sectionContentStyle, sectionHeaderStyle } from '@/styles/components/filterSidebarStyles'
import { useIsMobile } from '@/hooks/useIsmobile'

interface FilterSidebarProps {
  products: Product[]
  onFilterChange: (filtered: Product[]) => void
}

export default function FilterSidebar({ products, onFilterChange }: FilterSidebarProps) {
  const { categories } = useCategories()
  const [filters, setFilters] = useState({
    customizable: false,
    category: 'all',
    priceRange: [0, 1000],
    rating: 0
  })
  
  const [expandedSections, setExpandedSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false
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

    // Filter by category
    if (newFilters.category !== 'all') {
      filtered = filtered.filter(product => product.category === newFilters.category)
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= newFilters.priceRange[0] && 
      product.price <= newFilters.priceRange[1]
    )

    // Filter by rating
    if (newFilters.rating > 0) {
      filtered = filtered.filter(product => product.rating.rate >= newFilters.rating)
    }

    onFilterChange(filtered)
  }
  
  const isMobile = useIsMobile()

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
             <ChevronDown style={{ ...chevronStyle, ...(expandedSections.idealFor ? expandedChevronStyle : {}) }} />
    
        </button>
        {expandedSections.idealFor && (
          <div style={sectionContentStyle}>
            <label style={radioLabelStyle}>
              <input
                type="radio"
                name="category"
                value="all"
                checked={filters.category === 'all'}
                onChange={(e) => handleFilterChange({
                  ...filters,
                  category: e.target.value
                })}
              />
              <span>All</span>
            </label>
            {categories.map(category => (
              <label key={category} style={radioLabelStyle}>
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={(e) => handleFilterChange({
                    ...filters,
                    category: e.target.value
                  })}
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
          <ChevronDown style={{ ...chevronStyle, ...(expandedSections.idealFor ? expandedChevronStyle1 : {}) }} />
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
           <ChevronDown style={{ ...chevronStyle, ...(expandedSections.idealFor ? expandedChevronStyle2 : {}) }} />
        </button>
        {expandedSections.work && (
          <div style={sectionContentStyle}>
            {[0, 1, 2, 3, 4].map(rating => (
              <label key={rating} style={radioLabelStyle}>
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={filters.rating === rating}
                  onChange={(e) => handleFilterChange({
                    ...filters,
                    rating: Number(e.target.value)
                  })}
                />
                <span>{rating === 0 ? 'All' : `${rating}+ Stars`}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}