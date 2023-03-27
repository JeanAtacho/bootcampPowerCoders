import { createContext, useState } from 'react'

const ToastsContext = createContext()

function ToastsContextProvider({ children }) {
    const [alerts, setAlerts] = useState([])

    const addAlert = (message) => {
        setAlerts([...alerts, message])
    }

    return <ToastsContext.Provider value={addAlert}>
        { children }

        <div className="toasts-wrapper">
            { alerts.map(alert => <div className='toasts' key={alert}>{alert}</div>) }
        </div>

        </ToastsContext.Provider>
}

export { ToastsContext }
export default ToastsContextProvider