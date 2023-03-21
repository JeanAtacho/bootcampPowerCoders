import { useState } from 'react'
import Products from './components/Products.jsx'
import Details from './components/Details'
import productList from './products.json'


function App() {
  const [products] = useState(productList)
  const [likes, setLikes] = useState([])

  const likesClickHandler = (id) => {
    if (likes.includes(id)) {
      const new_arr = likes.filter(prod => prod !== id )
      setLikes(new_arr)
    } else {
      setLikes([...likes, id])
    }
  }

  return <>
  <div className="app">
    <h1 className = "app_title"> Trending Product </h1>
  <Products data={ products } likesClickHandler={likesClickHandler} />
 </div>
 <Details likes={likes.length} /> 
 </>
}
export default App