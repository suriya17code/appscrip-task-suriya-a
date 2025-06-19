
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { Product } from '@/lib/types' 
import {styles} from '@/styles/components/productcardstyles'
import { useIsMobile } from '@/hooks/useIsmobile'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew = product.id <= 5;
  const outOfStock = product.rating.count < 10;

  
  const isMobile = useIsMobile();

  return (
    <div
      style={styles.card(isMobile)}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div style={styles.imageContainer  as React.CSSProperties}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={styles.image  as React.CSSProperties}
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
          <span style={{ ...styles.badgeBase, ...styles.newBadge } as React.CSSProperties}>NEW PRODUCT</span>
        )}
        {outOfStock && (
          <span style={{ ...styles.badgeBase, ...styles.stockBadge } as React.CSSProperties}>OUT OF STOCK</span>
        )}

        <button
          style={styles.favoriteBtn as React.CSSProperties}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
        >
          <Heart style={styles.heartIcon} />
        </button>
      </div>

      <div style={styles.productInfo}>
        <h3 style={styles.title}>{product.title}</h3>
        {/* <p style={{ marginBottom: '8px' }}> */}
          {/* <span style={styles.price}>${product.price}</span> */}
        {/* </p> */}
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

