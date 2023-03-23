import { useEffect, useState } from 'react'
import { APIBaseURL } from '../config.js'

function useAPI(url) {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // IIFE -> Función auto ejecutada
    (async () => {

      try {
        const res = await fetch(`${APIBaseURL}${url}`)
        const data = await res.json()
        setCharacters([
          ...characters,
          ...data.results.map(char => {
            const character = {
              id: char.id,
              name: char.name,
              image: char.image
            }
            return character
          })]
        )

      } catch (error) {
        console.error(error.message)
      }
    })()
  }, [])
  return characters
}
export default useAPI
