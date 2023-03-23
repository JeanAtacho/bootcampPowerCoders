import { useEffect, useState } from 'react'

let interval
function TimerOnceFun() {
  const [count, setCount] = useState(0)
  const [timeForClicks, setTimeForClicks] = useState(true)
  const [seconds, setSeconds] = useState(3)
  const [finishedText, setFinishedText] = useState(null)

  useEffect(() => {
    interval = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (seconds > 0) return

    setFinishedText(`Se acabó el tiempo. \nRefresca la página para un nuevo intento.`)
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


/*
import { useEffect, useState } from 'react'

let interval
function TimerOnceFun() {
    const [count, setCount] = useState(0)
    const [timeForClicks, setTimeForClicks] = useState(true)
    const [seconds, setSeconds] = useState(3)
    const [finishedText, setFinishedText] = useState(null)

    useEffect(() => {
        interval = setInterval (() => {
          setSeconds(previo => previo - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
      if (seconds === 0) {
        setFinishedText(`Se acabó el tiempo`)
        clearInterval(interval)
        setTimeForClicks(false)
      }
    }, [seconds])

    const clickHandler = () => {
        if (!timeForClicks) return

        setCount(previo => previo + 1)
    }

    return <>
        {finishedText && <p>{finishedText}</p>}
        <p>Cantidad de clicks: {count}</p>
        <button onClick={clickHandler}>Click!</button>
        <p>{seconds}</p>
    </>
}

export default TimerOnceFun
*/