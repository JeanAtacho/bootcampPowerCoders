import classes from './'
function App() {


useEffect(() => {
  console.log(characters)

}, [characters])

  return (
    <>
      <h1>Rick & Morty</h1>
      < className={classes.character}>
      {characters.map(character => {
        <li className={classes.character} key={character.id}>
          <img src={character.image} alt={character.name} className={character.image}/>
          <h3>{character.name}</h3>
        </li>
      })}
      </ul>
    </>
  )
}

export default App
