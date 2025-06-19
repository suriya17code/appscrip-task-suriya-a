// styles/filterSidebarStyles.ts
import type { CSSProperties } from 'react'

export const getFilterSidebarStyle = (isMobile: boolean): CSSProperties => ({
  backgroundColor: '#fff',
  padding: isMobile ? '16px' : '24px',
  borderRadius: '8px',
  border: '1px solid #e5e5e5'
})

export const filterSectionStyle: CSSProperties = {
  marginBottom: '24px',
  paddingBottom: '20px',
  borderBottom: '1px solid #f0f0f0'
}

export const lastFilterSectionStyle: CSSProperties = {
  borderBottom: 'none',
  marginBottom: 0
}

export const checkboxLabelStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  marginBottom: '8px'
}

export const radioLabelStyle = checkboxLabelStyle

export const sectionHeaderStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  background: 'none',
  border: 'none',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  padding: 0,
  marginBottom: '12px'
}

export const chevronStyle: CSSProperties = {
  width: '16px',
  height: '16px',
  transition: 'transform 0.3s ease'
}

export const expandedChevronStyle: CSSProperties = {
  transform: 'rotate(180deg)'
}
export const expandedChevronStyle1: CSSProperties = {
  transform: 'rotate(180deg)'
}
export const expandedChevronStyle2: CSSProperties = {
  transform: 'rotate(180deg)'
}

export const sectionContentStyle: CSSProperties = {
  marginLeft: '4px'
}

export const priceInputsStyle: CSSProperties = {
  display: 'flex',
  gap: '12px'
}

export const priceInputFieldStyle: CSSProperties = {
  flex: 1,
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '14px'
}

export const priceInputFocusStyle: CSSProperties = {
  outline: 'none',
  borderColor: '#000'
}

export const inputBoxStyle: CSSProperties = {
  width: '16px',
  height: '16px'
}
