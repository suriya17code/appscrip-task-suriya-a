'use client'
import { useState, useEffect } from 'react'
import ProductCard from './productcard'
import FilterSidebar from './filtersliderbar'
import SortSelect from './sortselect'
import { useProducts } from '@/hooks/useproduct'
import { Product } from '@/lib/types'
import { useIsMobile } from '@/hooks/useIsmobile'
import { getProductGridStyles } from '@/styles/components/productgridstyle'

export default function ProductGrid() {
  const { products, loading, error } = useProducts()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [showFilters, setShowFilters] = useState(true)
const isMobile = useIsMobile()
const styles = getProductGridStyles(isMobile) 

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  const handleSort = (sortType: string) => {
    let sorted = [...filteredProducts]
    switch (sortType) {
      case 'price-high': sorted.sort((a, b) => b.price - a.price); break
      case 'price-low': sorted.sort((a, b) => a.price - b.price); break
      case 'rating': sorted.sort((a, b) => b.rating.rate - a.rating.rate); break
      case 'popular': sorted.sort((a, b) => b.rating.count - a.rating.count); break
      case 'newest': sorted.sort((a, b) => b.id - a.id); break
      default: sorted = sorted.sort(() => Math.random() - 0.5)
    }
    setFilteredProducts(sorted)
  }

  if (loading) return <div style={styles.loading}>Loading products...</div>
  if (error) return <div style={styles.error}>Error: {error}</div>

  return (
    <div style={styles.layoutWrapper}>
      {/* Sticky header at the top */}
      <div style={styles.productsHeader}>
        <div style={styles.productsInfo}>
          <span style={styles.itemsCount}>{filteredProducts.length} ITEMS</span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={styles.filterToggle}
          >
            {showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>
        <SortSelect onSortChange={handleSort} />
      </div>

      {/* Main body layout: filter + products */}
      <div style={styles.productGridContainer}>
        {showFilters && (
          <div style={styles.filtersSidebar}>
            <FilterSidebar
              products={products}
              onFilterChange={setFilteredProducts}
            />
          </div>
        )}

        <div style={styles.productsArea}>
          <div style={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
