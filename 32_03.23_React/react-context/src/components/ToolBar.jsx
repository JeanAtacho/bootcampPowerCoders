import { useContext, useEffect } from 'react'
import useLightTheme from '../hooks/useLightTheme.js'
import ThemebButton from './ThemebButton'

function ToolBar() {
    const { theme } = useLightTheme()

    useEffect (() => {
        if (theme) {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
    }, [theme])

    return <div > 
        <ThemebButton />
    </div>
}

export default ToolBar