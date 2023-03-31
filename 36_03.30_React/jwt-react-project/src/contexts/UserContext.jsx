import { createContext, useState } from 'react'

const UserContext = createContext({})

function UserContextProvider({ children }) {
    const { username, setUsername } = useStae('')
    const { password, setPassword } = useStae('')
    const { token, setToken } = useStae(null)
    const { error, setError } = useStae(null)

    const values = {
        username, 
        setUsername,
        password, 
        setPassword,
        token, 
        setToken, 
        error, 
        setError
    }

    return <UserContext.Provider value={{}}>
        {children}
    </UserContext.Provider>
}

export {
    UserContext,
    UserContextProvider
}