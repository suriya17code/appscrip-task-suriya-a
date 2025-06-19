'use client'; 
import { Search, Heart, ShoppingBag, User } from 'lucide-react';
import Logo from '@/components/common/logo';
import Navigation from './navigation';
import { bannerContentStyle, bannerSpanStyle, iconImageStyle, mainHeaderStyle, headerContentStyle, logoTextStyle, headerActionsStyle, hideOnMobileStyle, languageSelectStyle, iconStyle } from '@/styles/layouts/headerstyle';
import { containerStyle } from '@/styles/layouts/naviagtion';
import { useIsMobile } from '@/hooks/useIsmobile';

export default function Header() {
  
  const isMobile = useIsMobile()

  return (
    <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e5e5' }}>
      {/* Top banner */}
      <div style={{ backgroundColor: '#000', color: '#fff', fontSize: '12px', padding: '8px 0' }}>
        <div style={containerStyle(isMobile)}>
          <div style={bannerContentStyle(isMobile)}>
            <span style={bannerSpanStyle}>
              <img src="/images/logo/element-4.svg" style={iconImageStyle} alt="icon" />
              Lorem ipsum dolor
            </span>
            {!isMobile && (
              <span style={bannerSpanStyle}>
                <img src="/images/logo/element-4.svg" style={iconImageStyle} alt="icon" />
                Lorem ipsum dolor
              </span>
            )}
            {!isMobile && (
              <span style={bannerSpanStyle}>
                <img src="/images/logo/element-4.svg" style={iconImageStyle} alt="icon" />
                Lorem ipsum dolor
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div style={mainHeaderStyle}>
        <div style={containerStyle(isMobile)}>
          <div style={headerContentStyle(isMobile)}>
            <Logo />
            <span style={logoTextStyle(isMobile)}>LOGO</span>
            <div style={headerActionsStyle(isMobile)}>
              <Search style={iconStyle} />
              <Heart style={iconStyle} />
              <ShoppingBag style={iconStyle} />
              <div style={hideOnMobileStyle(isMobile)}>
                <User style={iconStyle} />
                <select style={languageSelectStyle}>
                  <option>ENG</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </header>
  )
}
