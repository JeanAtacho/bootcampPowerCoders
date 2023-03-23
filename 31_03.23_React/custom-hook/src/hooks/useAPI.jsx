import { useEffect, useState } from "react"
import json from './character.json'

function useAPI() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {

        // IIFE -> Funcion auto ejecutada
        // (() => {})()
        // async function getCharacters(params) {}

        // const res = await fetch(`${APIBaseURL}/character?page=1`)
        // const data = await res.json()
        // setCharacters(data)

        (async () => {

            try {

                setCharacters(
                    json.results.map(char => {
                        const character = {
                            id: char.id,
                            name: char.name,
                            image: char.image
                        }

                        return character
                    })

                )

            } catch (error) {
                console.error(error.message)
            }

        })()


    }, [])

    return characters
}