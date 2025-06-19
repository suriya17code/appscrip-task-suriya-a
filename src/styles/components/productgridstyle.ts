// styles/components/productGridStyles.ts

type ProductGridStyles = {
  layoutWrapper: React.CSSProperties
  productGridContainer: React.CSSProperties;
  filtersSidebar: React.CSSProperties;
  productsArea: React.CSSProperties;
  productsHeader: React.CSSProperties;
  productsInfo: React.CSSProperties;
  itemsCount: React.CSSProperties;
  filterToggle: React.CSSProperties;
  productsGrid: React.CSSProperties;
  loading: React.CSSProperties;
  error: React.CSSProperties;
};

export const getProductGridStyles = (isMobile: boolean): ProductGridStyles => ({
  layoutWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
  },
  productsHeader: {
    position: 'sticky', // Or 'fixed' if you want it on entire screen
    top: 0,
    width: '100%',
    zIndex: 100,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'stretch' : 'center',
    flexDirection: isMobile ? 'column' : 'row',
    padding: '16px',
    borderBottom: '1px solid #e5e5e5',
    gap: isMobile ? '16px' : '0px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  productGridContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    overflow: 'hidden',
  },
  filtersSidebar: {
    width: isMobile ? '100%' : '250px',
    flexShrink: 0,
    overflowY: 'auto',
    height: '100%',
    position: isMobile ? 'relative' : 'sticky',
    top: isMobile ? undefined : 0,
    background: '#fff',
    padding: '16px',
    borderRight: '1px solid #eee',
    zIndex: 1
  },
  productsArea: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
  },
  productsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  itemsCount: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#000',
  },
  filterToggle: {
    fontSize: '12px',
    color: '#666',
    textDecoration: 'underline',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '160px' : '220px'}, 1fr))`,
    gap: isMobile ? '16px' : '24px',
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '16px',
  },
  error: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '16px',
    color: '#e74c3c',
  }
})
