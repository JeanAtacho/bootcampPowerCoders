import Toasts from './components/Toasts.jsx'
import ToastsContextProvider from './contexts/Toasts.jsx'

function App() {


  return (
    <>
      <ToastsContextProvider>
        <h1>Escribe tu notificacion</h1>
        <Toasts />
      </ToastsContextProvider>
    </>
  )
}

export default App
