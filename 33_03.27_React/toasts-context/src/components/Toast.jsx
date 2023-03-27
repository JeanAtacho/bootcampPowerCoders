import { useState } from "react";
import useToast from '../hooks/useToasts'

function Toast() {
    const [text, setText] = useState('')
    const addAlert = useToast()

    const inputHandleChange = (e) => {
        const value = e.target.value 
        console.log(value)
        setText(value)
    } 
    const formSumitHandler = (e) => {
       e.preventDefault()
       addAlert(text)
       setText('')
    }
    return <form onSubmit={formSumitHandler}>
        <input type="text" value={text} onChange={inputHandleChange} />
        <button conClick={formSumitHandler} > Mostrar alerta</button>
    </form>
}
export default Toast