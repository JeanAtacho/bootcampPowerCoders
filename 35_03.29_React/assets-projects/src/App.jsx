import { square, image } from './App.module.css'
import img03 from './assets/images/img_03.png'
import './assets/css/custom-fonts.css'
function App() {
  return (
    <div >
    <h1><i className='icon-heart'></i></h1>
    <div className={square} >
    <img src={img03} className={image} />
    </div>
    </div>
  )
}
export default App