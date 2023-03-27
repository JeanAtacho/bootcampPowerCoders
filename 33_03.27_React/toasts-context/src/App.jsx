import Toast from './components/Toast'
import ToastContextProvaider from './contexts/Toast'
function App() {

  return ( 
    <>
    <ToastContextProvaider>
      <h1>Escribe tu notificacion</h1>
     <Toast /> 
    </ToastContextProvaider>
    </>
  )
}

export default App
