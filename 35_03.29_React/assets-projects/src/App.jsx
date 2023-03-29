import { square, image } from './App.module.css'

function App() {
  return (
    <div >
      <h1>Esto es una importacion del archivo css</h1>
      <div className={square} >
        <img src='./' className={image} />
      </div>
    </div>
  )
}
export default App