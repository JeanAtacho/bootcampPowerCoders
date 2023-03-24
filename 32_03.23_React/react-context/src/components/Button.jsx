import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext.jsx'
import useLightTheme from '../hooks/useLightTheme.js'

function Button () {
    const { theme, setTheme } = useLightTheme()
    
    const clickButtonHandler = () => setTheme(!theme)

    return (
        <>
            <button onClick={clickButtonHandler}>
                {theme ? '🌙' : '🌞'}
            </button>
        </>
    )
}

export default Button