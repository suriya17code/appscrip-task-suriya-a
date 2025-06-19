'use client'
import { useAccordion } from '@/hooks/useaccordion'
import { useIsMobile } from '@/hooks/useIsmobile'
import { getFooterStyles } from '@/styles/layouts/footerstyles'
import React from 'react'

const Footer = () => {

// Inside component:
const isMobile = useIsMobile()
const styles = getFooterStyles(isMobile)
const { toggleSection, isOpen } = useAccordion();

const paymentStyle = (bgColor: string, textColor: string) => ({
  width: '3rem',
  height: '2rem',
  borderRadius: '0.25rem',
  backgroundColor: bgColor,
  color: textColor,
  fontSize: '0.75rem',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

  const mettaLinks = [
    'About Us',
    'Stories',
    'Artisans',
    'Boutiques',
    'Contact Us',
    'EU Compliances Docs',
  ];

  const quickLinks = [
    'Orders & Shipping',
    'Join/Login as a Seller',
    'Payment & Pricing',
    'Return & Refunds',
    'FAQs',
    'Privacy Policy',
    'Terms & Conditions',
  ];

  const renderLinks = (items: string[]) =>
    items.map((text, index) => (
      <a key={index} href="#" style={styles.link}>{text}</a>
    )); 

  return (
    <footer style={styles.footer}>
  <div style={styles.section}>
    <div style={styles.container}>
      <div style={styles.flexLayout}>
        {/* Title */}
        <div style={{ flex: 1 }}>
          <h3 style={styles.sectionTitle}>BE THE FIRST TO KNOW</h3>
          <p style={styles.paragraph}>Sign up for updates from mettā muse.</p>
          <div style={{ display: 'flex', gap: '8px', maxWidth: 400 }}>
            <input style={styles.newsletterInput} placeholder="Enter your email..." />
            <button style={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
       {/* CONTACT + CURRENCY */}
        <div style={styles.column}>
 <div style={{...styles.column,maxWidth: '100%',wordWrap: 'break-word',}}>
  <h3 style={{  fontSize: 'clamp(1rem, 2vw, 1.25rem)', }}> CONTACT US</h3>
  <div style={{display:isMobile?"flex":"block" , gap:isMobile?15:0}}>
  <p style={{fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',alignItems:"center"  }}> +44 221 133 5360</p>
  <p style={{fontSize: 'clamp(0.875rem, 1.8vw, 1rem)', lineHeight: 1.5,}}> customercare@mettamuse.com</p>
  </div>
</div>

{isMobile&&<hr style={{border: 'none',height: '2px',backgroundColor: '#ffffff',opacity: 0.2,width: '100%',}} />}
          <div>
            <h3 style={{...styles.heading}}>CURRENCY</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem',padding:"10px" }}> 
              <img src={"/images/footer/US.svg"} alt='US'/>
              <span style={{ fontSize: '0.875rem' }}>• USD</span>
            </div>
          {!isMobile && <p style={styles.paragraph}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>} 
          </div>
        </div>
    
   { isMobile&& <hr style={{border: 'none',height: '2px',backgroundColor: '#ffffff',opacity: 0.2,width: '100%',}} /> }
   </div>
    {!isMobile&&<hr style={{border: 'none',height: '2px',backgroundColor: '#ffffff',opacity: 0.2,width: '100%',}} />}
  
   <div style={styles.wrapper}>
      <div style={styles.mobilesection}>
        {/* LINKS */}
        {!isMobile ? (
          <>
            <div style={styles.column}>
              <h3 style={styles.heading}>mettā muse</h3>
              {renderLinks(mettaLinks)}
            </div>
            <div style={styles.column}>
              <h3 style={styles.heading}>QUICK LINKS</h3>
              {renderLinks(quickLinks)}
            </div>
            <div style={styles.column}>
              <h3 style={styles.heading}>FOLLOW US</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                 <img src={"/images/footer/Insta.svg"} alt='insta'/>
                 <img src={"/images/footer/linked.svg"} alt='linked'/>
              </div>
              <h3 style={{ ...styles.heading, marginTop: '2rem' }}>mettā muse ACCEPTS</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                <div style={paymentStyle('white', 'gray')}>
                 <img src={"/images/footer/gpay.svg"} alt='gpay'/>
                </div>
                <div style={paymentStyle('orange', 'white')}>
                 <img src={"/images/footer/mastercard.svg"} alt='mastercard'/>
                </div>
                <div style={paymentStyle('blue', 'white')}>
                 <img src={"/images/footer/pp.svg"} alt='pp'/>
                </div>
                <div style={paymentStyle('#003087', 'white')}>
                 <img src={"/images/footer/amex.svg"} alt='amex'/>
                </div>
                <div style={paymentStyle('black', 'white')}>
                 <img src={"/images/footer/applepay.svg"} alt='applepay'/>
                </div>
                <div style={paymentStyle('purple', 'white')}>
                 <img src={"/images/footer/pay.svg"} alt='pay'/>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div style={{ ...styles.column, gap: '2rem' }}>
            {/* Accordion: Metta Muse */}
            <div>
              <button style={styles.accordionButton} onClick={() => toggleSection('metta')}>
                mettā muse <span style={styles.icon}>{isOpen('metta') ? '▲' : '▼'}</span>
              </button>
              {isOpen('metta') && <div style={styles.accordionContent}>{renderLinks(mettaLinks)}</div>}
            </div>
<hr style={{border: 'none',height: '2px',backgroundColor: '#ffffff',opacity: 0.2,width: '100%',}} />

            {/* Accordion: Quick Links */}
            <div>
              <button style={styles.accordionButton} onClick={() => toggleSection('quick')}>
                QUICK LINKS <span style={styles.icon}>{isOpen('quick') ? '▲' : '▼'}</span>
              </button>
              {isOpen('quick') && <div style={styles.accordionContent}>{renderLinks(quickLinks)}</div>}
            </div>
<hr style={{border: 'none',height: '2px',backgroundColor: '#ffffff',opacity: 0.2,width: '100%',}} />

            {/* Accordion: Follow Us */}
            <div style={{width:"100%"}}>
              <button style={styles.accordionButton} onClick={() => toggleSection('follow')}>
                FOLLOW US <span style={styles.icon}>{isOpen('follow') ? '▲' : '▼'}</span>
              </button>
              {isOpen('follow') && (
                <div style={{ ...styles.accordionContent, flexDirection: 'row', gap: '1rem' }}>
                  <span>🔗 FB</span>
                  <span>🔗 LI</span>
                </div>
              )}
            </div>
<hr style={{border: 'none',height: '2px',backgroundColor: '#ffffff',opacity: 0.2,width: '100%',}} />

            {/* Payment Methods */}
            <div>
              <h3 style={styles.heading}>mettā muse ACCEPTS</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem',justifyContent:"center" }}>
                <div style={paymentStyle('white', 'gray')}>
                    <img src={"/images/footer/gpay.svg"} alt='gpay'/>
                </div>
                <div style={paymentStyle('orange', 'white')}>
                     <img src={"/images/footer/mastercard.svg"} alt='mastercard'/>
                </div>
                <div style={paymentStyle('blue', 'white')}>
                     <img src={"/images/footer/pp.svg"} alt='pp'/>
                </div>
                <div style={paymentStyle('#003087', 'white')}>
                     <img src={"/images/footer/amex.svg"} alt='amex'/>
                </div>
                <div style={paymentStyle('black', 'white')}>
                     <img src={"/images/footer/applepay.svg"} alt='applepay'/>
                </div>
                <div style={paymentStyle('purple', 'white')}>
                     <img src={"/images/footer/pay.svg"} alt='pay'/>
                </div>
              </div>
            </div>
            <hr style={{border: 'none',height: '2px',backgroundColor: '#ffffff',opacity: 0.2,width: '100%',}} />
          </div>
        )}
      </div>
    </div>
     <div style={styles.copyright}>
        <p>Copyright © 2025 mettamuse. All rights reserved.</p>
      </div>
</footer>

  )
}

export default Footer