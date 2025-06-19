// styles/components/productGridStyles.ts

type ProductGridStyles = {
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
  productGridContainer: {
    display: 'flex',
    gap: isMobile ? '20px' : '32px',
    flexDirection: isMobile ? 'column' : 'row'
  },
  filtersSidebar: {
    width: isMobile ? '100%' : '250px',
    flexShrink: 0
  },
  productsArea: {
    flex: 1
  },
  productsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'stretch' : 'center',
    flexDirection: isMobile ? 'column' : 'row',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e5e5e5',
    gap: isMobile ? '16px' : '0px'
  },
  productsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  itemsCount: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#000'
  },
  filterToggle: {
    fontSize: '12px',
    color: '#666',
    textDecoration: 'underline',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
 productsGrid: {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${isMobile ? '160px' : '220px'}, 1fr))`,
  gap: isMobile ? '16px' : '24px',
}
,
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '16px'
  },
  error: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '16px',
    color: '#e74c3c'
  }
});
