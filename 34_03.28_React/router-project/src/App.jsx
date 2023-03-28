import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import DataInfo from './components/DataInfo'
import PrivateRoutes from './components/PrivateRoutes'
import data from './db.json'

function App() {

  return (
    <>
      <h1>Mi primera pagina con Router</h1>
      <nav>
        <NavLink to="/">Home</NavLink> { ' | ' }
        <NavLink to="about">About</NavLink> { ' | ' }
        <NavLink to="login">Login</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route element={<PrivateRoutes />}>
          <Route path="about" element={<About />}>
            <Route />
            <Route path=":id" element={<DataInfo />} />
          </Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        Este es el footer
      </footer>
    </>
  )
}

const Home = () => <h2>Home page</h2>
const Login = () => <h2>Login page</h2>
const NotFound = () => <h2>Contenido no encontrado</h2>
const About = () => <>
  <h2>About</h2>
  <section style={{ display: 'flex' }}>
    <aside style={{ width: '200px' }}>
      <nav>
        {data.map(person => <li key={person.id}>
          <NavLink to={`/about/${person.id}`}>{person.name}</NavLink>
        </li>)}
      </nav>
    </aside>
    <Outlet />
  </section>
</>

export default App
