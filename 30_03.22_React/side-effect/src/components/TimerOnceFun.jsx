import { useEffect, useState } from 'react'

let interval
function TimerOnceFun() {
    const [count, setCount] = useState(0)
    const [timeForClicks, setTimeForClicks] = useState(true)
    const [seconds, setSeconds] = useState(10)
    const [finishedText, setFinishedText] = useState(null)

    useEffect(() => {
        interval = setInterval(() => {
            setSeconds(previo => previo - 1)
        }, 100000)
    }, [])

    useEffect(() => {
        if (seconds > 0) return

        setFinishedText(`Se acabo el tiempo. \nRefresca la pagina para un nuevo intento`)
        clearInterval(interval)
        setTimeForClicks(false)
    }, [seconds])

    const clickHandler = () => {
        if (!timeForClicks) return

        setCount(prev => prev + 1)
    }

    return <>
        {finishedText && <p>{finishedText}</p>}
        <p>Cantidad de clicks: {count}</p>
        <button onClick={clickHandler}>Click!</button>
        <p>{seconds}</p>
    </>
}

export default TimerOnceFun
