import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function useLightTheme(params) {
    return useContext(ThemeContext)
}

export default useLightTheme