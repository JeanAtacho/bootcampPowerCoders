import { Outlet } from 'react-router-dom'
import data from '../db.json'

function About() {
  return <>
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
}

export default About