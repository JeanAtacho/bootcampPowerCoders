import { useState } from 'react'
import useToasts from '../hooks/useToasts'

function Toasts() {
    const [text, setText] = useState('')
    const addAlert = useToasts()

    const inputHandleChange = (e) => {
        const value = e.target.value
        console.log(value)
        setText(value)
    }

    const formSubmitHandler = () => {
        e.preventDefault()
        addAlert(text)

    }
    return <form>
        <input type="text" value={text} onChange={inputHandleChange} />
        <button onClick={formSubmitHandler}>Mostar Alerta</button>
    </form>
}

export default Toasts