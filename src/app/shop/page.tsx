import ProductGrid from '@/components/shop/productsgrid'
import '../../styles/components/product-grid.css'

export default function ShopPage() {
  return (
    <div className="shop-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">SHOP</h1>
          <p className="page-description">
            Discover our complete collection of products
          </p>
        </div>
        <ProductGrid />
      </div>
    </div>
  )
}