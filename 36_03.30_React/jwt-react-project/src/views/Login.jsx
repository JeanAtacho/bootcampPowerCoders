import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

function Login() {
    const {
        username, 
        setUsername,
        password, 
        setPassword,
        token, 
        setToken, 
        error, 
        setError
    } = useContext(UserContext)

    const submitHandler = (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            const data =  await response.json()
            if (response.ok) {
                setToken(data.token)
                setError(null)
                localStorage.setItem('token', data.token)

            } else {
                setError(data.error)
                if (response.status === 401) setError('usuario o contrasena incorrectos')
            }

        } catch (error) {
            setError(error.data)
        }
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <label htmlFor="username">Usuario</label>
            <input type="text" id='username' value={username} onChange={e => setUsername(e.target.value)} />

            <label htmlFor="password">Contrasena</label>
            <input type="text" id='password' value={password} onChange={e => setPassword(e.target.value)} />

            <button type='submit'>Obtener Token</button>
        </form>
        {error && <p className='error'>Error: {error}</p>}
        </>
    )
}

export default Login