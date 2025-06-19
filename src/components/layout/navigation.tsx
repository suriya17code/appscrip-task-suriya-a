'use client'

import { useIsMobile } from '@/hooks/useIsmobile'
import { containerStyle, getLinkStyle, navigationStyle, navLinksStyle } from '@/styles/layouts/naviagtion'
import Link from 'next/link'
import { usePathname } from 'next/navigation' 

const navItems = [
  { href: '/shop', label: 'SHOP' },
  { href: '/skills', label: 'SKILLS' },
  { href: '/storie', label: 'STORIES' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT US' }
]

export default function Navigation() {
  const pathname = usePathname()
 
 const isMobile = useIsMobile()

  return (
    <nav style={navigationStyle}>
      <div style={containerStyle(isMobile)}>
        <div style={navLinksStyle(isMobile)}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} style={getLinkStyle(item.href,pathname,isMobile)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
