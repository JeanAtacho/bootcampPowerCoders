import { useRef, useState } from 'react';
import Form from './componentes/form';
import Hero from './componentes/Hero';
import marvelHeroes from './marvel_heroes.json'


function App() {
    const [heroes] = useState(marvelHeroes)
    const [result, setResult] = useState(heroes)
    const inputRef = useRef()
    
    const search = (e) => {
        e.preventDefault()
        const filter = heroes.filter(heroe => heroe.name.toLowerCase().includes(inputRef.current.value.toLowerCase())) 
        setResult(filter)
    }
    
    return (
        <>
            <h1>Buscar MarveL Heroes</h1>

            <Form search={search} inputRef={inputRef} />

            <ul className="heroes">
                { result.map(heroe => <hero key={heroe.id} name={heroe.name} thumbnail={heroe.thumbnail} />) }
            </ul>
        </>
    )
}

export default App