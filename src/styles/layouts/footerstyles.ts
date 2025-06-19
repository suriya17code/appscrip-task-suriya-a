// styles/components/footerStyles.ts

import React from "react";

type footerStyles={
    footer: React.CSSProperties;
    section: React.CSSProperties;
    container: React.CSSProperties;
    flexLayout: React.CSSProperties;
    newsletterInput: React.CSSProperties;
    subscribeButton: React.CSSProperties;
    sectionTitle: React.CSSProperties;
    paragraph: React.CSSProperties;
    listItem: React.CSSProperties;
    listItemHover: React.CSSProperties;
    paymentBox: React.CSSProperties;
    copyright: React.CSSProperties;
    wrapper:React.CSSProperties;
    column:React.CSSProperties;
    heading:React.CSSProperties;
    link:React.CSSProperties;
    linkHover:React.CSSProperties;
    accordionButton:React.CSSProperties;
    accordionContent:React.CSSProperties;
    icon:React.CSSProperties;
    box:React.CSSProperties;
    mobilesection:React.CSSProperties
}

export const getFooterStyles = (isMobile: boolean):footerStyles => ({
  footer: {
    backgroundColor: 'black',
    color: 'white',
  },
  container: {
    // maxWidth: '1120px',
    // margin: '0 auto',
  },
  flexLayout: {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'stretch' : 'flex-start',
    gap: isMobile ? '32px' : '16px',
  },
  newsletterInput: {
    flex: 1,
    padding: '8px 16px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '14px',
  },
  subscribeButton: {
    padding: '8px 24px',
    border: '1px solid #666',
    background: 'none',
    color: 'white',
    fontSize: '14px',
    cursor: 'pointer',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '8px',
  },
  listItem: {
    fontSize: '14px',
    color: '#aaa',
    marginBottom: '6px',
    cursor: 'pointer',
  },
  listItemHover: {
    color: '#fff',
  },
  paymentBox: {
    width: '48px',
    height: '32px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    margin: '4px',
  },
  copyright: {
    fontSize: '12px',
    color: '#777',
    textAlign: 'center',
    padding: isMobile ? '16px' : '16px 32px',
    borderTop: '1px solid #2d2d2d',
  },


  wrapper: {
    padding: isMobile ? '1rem 1rem' : '3rem 2rem',
    backgroundColor: '#000',
    color: '#fff',
  },
  section: {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    gap: isMobile ? '2rem' : '4rem',
    maxWidth: '1200px',
    margin: '0 auto',
     padding: isMobile ? '22px 16px 10px 16px' : '22px 22px',
  },
   mobilesection: {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    gap: isMobile ? '2rem' : '4rem',
    maxWidth: '1200px',
    margin: '0 auto',
     padding: isMobile ? '22px 1px 10px 1px' : '2px 32px',
  },
  column: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  heading: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  paragraph: { 
    margin: 0,
    fontSize: '14px',
    color: ' #aaa',
    marginBottom: '8px',
  },
  link: {
    fontSize: '0.875rem',
    color: '#ccc',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  linkHover: {
    color: '#fff',
  },
  accordionButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    padding: 0,
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    cursor: 'pointer',
  },
  accordionContent: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  icon: {
    marginLeft: '1rem',
  },
  box:{

  }
})
