import { useEffect, useState } from "react";

function Protected() {
    const [res, setRes] = useState()

    useEffect(() => {
        const getAnswer = async () => {

            try {
                const token = localStorage.getItem('token')
                if (!token) return setRes('Debes registrarte para acceder a esta pagina')

                const response = await fetch('http://localhost:3000/protected', {
                    method: GET,
                    headers: { Athorization: `Bearer ${token}`}
                })
                const { data } = await response.json()
                setRes(data)

            } catch (error) {
                console.error(error)
            }
        }

        getAnswer
    }, [])

    return (
        <>
            <h1>Protected</h1>
            {res && <p>{res}</p> }
        </>
    )
}

export default Protected