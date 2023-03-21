import { useState } from 'React'
import Products from './components/Products.jsx'
import productsList from './products.json'

function App() {
  const [products] = useState(productsList)
  
  return <div class="app">
    <h1 className="app_title">Trending Products</h1>
    <Products data={ products } />
  </div>
}

export default App
