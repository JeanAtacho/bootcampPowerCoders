import { useState } from 'react';
import marvelHeroes from './marvel_heroes.json'

function App() {
    const [heroes, setHeroes] = useState(marvelHeroes)
    console.log(marvelHeroes);
    
    return (
        <>
            <h1>Buscar MarveL Heroes</h1>

            <form action="#">
                <input type="text" name='search' placeholder='Que superheroe quieres buscar?' />
                <button type="submit">Buscar</button>
            </form>

            <ul className="heroes">
                { heroes.map(heroe => <li key={heroe.id}>{heroe.name}</li>) }
            </ul>
        </>
    )
}

export default App