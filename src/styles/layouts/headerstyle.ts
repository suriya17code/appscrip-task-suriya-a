  export const iconImageStyle = { width: '15px', height: '15px', marginRight: '8px' }

  
  export const containerStyle=(isMobile:boolean): React.CSSProperties=>({
 maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 16px' : '0 20px'
  })

  export const bannerContentStyle=(isMobile:boolean): React.CSSProperties => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: isMobile ? '16px' : '32px',
    color: '#EB4C6B',
    fontSize: isMobile ? '11px' : '12px'
  })

    export const iconStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    color: '#333'
    }
  export const bannerSpanStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    whiteSpace: 'nowrap'
  }

  export const mainHeaderStyle: React.CSSProperties = {
    padding: '16px 0'
  }

  export const headerContentStyle=(isMobile:boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    flexDirection: isMobile ? 'row' : 'row',
    gap: isMobile ? '12px' : undefined
  })

  export const logoTextStyle=(isMobile:boolean): React.CSSProperties =>(
     isMobile ? {
        position: 'static',
        transform: 'none',
        textAlign: 'center',
        marginTop: '8px',
        fontSize: '24px',
        fontWeight: 800,
        letterSpacing: '1px',
        whiteSpace: 'nowrap'
      } : {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '24px',
        fontWeight: 800,
        letterSpacing: '1px',
        whiteSpace: 'nowrap'
      })

  export const headerActionsStyle=(isMobile:boolean): React.CSSProperties =>( {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '16px' : '24px'
  }
)
  export const iexportconStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    color: '#333'
  }

  export const languageSelectStyle: React.CSSProperties = {
    border: 'none',
    background: 'transparent',
    fontSize: '14px',
    cursor: 'pointer'
  }

  export const hideOnMobileStyle=(isMobile:boolean): React.CSSProperties =>( 
  isMobile ? { display: 'none' } : {}
)