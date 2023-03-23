import useAPI from './hooks/useAPI.jsx'
import classes from './characters.module.css'
import { useState } from 'react'

function App() {
  const [page] = useState(1)
  const characters = useAPI(`/character?page=${page}`)

  return (
    <>
      <h1>Rick & Morty</h1>
      <ul className={classes.characters}>
      {characters.map(character => {
        <li className={classes.character} key={character.id}>
          <img src={character.image} alt={character.name} className={classes.character__image} />
          <h3 className={classes.character__image}>{character.name}</h3>
        </li>
      })}
      </ul>
    </>
  )
}

export default App
