'use client'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { styles } from '@/styles/components/productcardstyles'
import { useIsMobile } from '@/hooks/useIsmobile'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew = product.id <= 5
  const outOfStock = product.rating.count < 10
  const isMobile = useIsMobile()
  const [liked, setLiked] = useState(false)

  return (
    <div
      style={styles.card(isMobile)}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div style={styles.imageContainer as React.CSSProperties}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={styles.image as React.CSSProperties}
          onMouseEnter={(e) => {
            const img = e.currentTarget as HTMLImageElement
            img.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            const img = e.currentTarget as HTMLImageElement
            img.style.transform = 'scale(1)'
          }}
        />

        {isNew && (
          <span style={{ ...styles.badgeBase, ...styles.newBadge } as React.CSSProperties}>
            NEW PRODUCT
          </span>
        )}
        {outOfStock && (
          <span style={{ ...styles.badgeBase, ...styles.stockBadge } as React.CSSProperties}>
            OUT OF STOCK
          </span>
        )}
      </div>

      <div style={styles.productInfo}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={styles.title}>{product.title}</h3>
          <button
            style={{
              ...styles.favoriteBtn,
              position: 'static',
              opacity: 1,
              marginLeft: '8px',
              backgroundColor: 'transparent',
              transform: 'none'
            }}
            onClick={() => setLiked((prev) => !prev)}
          >
            <Heart
              style={{
                ...styles.heartIcon,
                color: liked ? '#EB4C6B' : '#aaa',
                fill: liked ? '#EB4C6B' : 'none',
                transition: 'all 0.3s ease'
              }}
            />
          </button>
        </div>

        <p style={styles.actions}>
          <span style={styles.actionLink}>Sign in</span> or{' '}
          <span style={styles.actionLink}>Create an account</span> to see pricing
        </p>

        <div style={styles.rating}>
          <span>★ {product.rating.rate}</span>
          <span>({product.rating.count})</span>
        </div>
      </div>
    </div>
  )
}
