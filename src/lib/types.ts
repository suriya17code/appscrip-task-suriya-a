// Based on Fake Store API response structure
export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface CartItem extends Product {
  quantity: number
}

export interface FilterState {
  category: string
  priceRange: [number, number]
  rating: number
  searchTerm: string
}