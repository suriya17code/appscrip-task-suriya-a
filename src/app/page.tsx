import ProductGrid from '@/components/shop/productsgrid'
import '../styles/components/product-grid.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-section">
          <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
        <ProductGrid />
      </div>
    </div>
  )
}