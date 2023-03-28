import { NavLink, Route, Routes } from 'react-router-dom'
import DataInfo from './Components/DataInfo.jsx'
import PrivateRoutes from './Components/PrivateRoutes.jsx'

function App() {
  return (
    <>
      <h1>Mi primera página con Router</h1>
      <nav>
        <NavLink to="/">Home</NavLink> { ' | ' }
        <NavLink to="/about">About</NavLink> { ' | ' }
        <NavLink to="/login">Login</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="about" element={<About />}>
            <Route path=":id" element={<DataInfo />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer><p>Este es el footer</p></footer>
    </>
  )
}

export default App
