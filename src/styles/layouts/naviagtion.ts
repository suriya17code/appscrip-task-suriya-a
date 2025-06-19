// styles/navigationStyles.ts

export const navigationStyle: React.CSSProperties = {
  borderTop: '1px solid #e5e5e5',
  backgroundColor: '#fff'
}

export const containerStyle = (isMobile: boolean): React.CSSProperties => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: isMobile ? '0 16px' : '0 20px'
})

export const navLinksStyle = (isMobile: boolean): React.CSSProperties => ({
  display: 'flex',
  justifyContent: 'center',
  gap: isMobile ? '24px' : '48px',
  padding: '16px 0',
  fontSize: isMobile ? '12px' : '14px'
})

export const getLinkStyle = (href: string, currentPath: string, isMobile: boolean): React.CSSProperties => ({
  fontSize: isMobile ? '12px' : '14px',
  fontWeight: 500,
  color: currentPath === href ? '#000' : '#333',
  textDecoration: 'none',
  transition: 'color 0.3s ease'
})
