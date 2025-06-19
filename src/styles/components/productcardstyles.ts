// styles/productCardStyles.ts
export const styles = {
  card: (isMobile: boolean): React.CSSProperties => ({
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    marginBottom: isMobile ? '20px' : undefined
  }),

  imageContainer: {
    position: 'relative',
    aspectRatio: '1 / 1.2',
    marginBottom: '16px',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px'
  },

  image: {
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },

  badgeBase: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    fontSize: '10px',
    fontWeight: 600,
    padding: '4px 8px',
    borderRadius: '4px',
    textTransform: 'uppercase'
  },

  newBadge: {
    backgroundColor: '#000',
    color: '#fff'
  },

  stockBadge: {
    backgroundColor: '#666',
    color: '#fff',
    top: '36px' // Adjusted for stacking under new badge
  },

  favoriteBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '8px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50%',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    cursor: 'pointer'
  },

  heartIcon: {
    width: '16px',
    height: '16px'
  },

  productInfo: {
    padding: '0 4px'
  },

  title: {
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '8px',
    lineHeight: 1.4,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical' as const
  },

  price: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#000'
  },

  actions: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px'
  },

  actionLink: {
    textDecoration: 'underline',
    cursor: 'pointer',
    color: '#000'
  },

  rating: {
    fontSize: '12px',
    color: '#666',
    display: 'flex',
    gap: '8px'
  }
}
 
