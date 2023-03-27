import { createContext, useCallback, useState } from "react";

const ToastContext = createContext()

function ToastContextProvaider({children}) {
    const [ alerts, setAlerts] = useState([])
  
    const addAlert = useCallback((message) => {
        if(message === '')return

        setAlerts([...alerts, message])

        setTimeout(() => {
            setAlerts(prevAlerts => prevAlerts.filter(a => a !==message))
        }, timeout);

    }, [])


    

    return <ToastContext.Provider value={addAlert}>
    {children}
    <div className="toast-wrapper">
        {alerts.map(alert => <div key={alert} className='toast'>{alert}</div>)}
    </div>
    </ToastContext.Provider>

}
export { ToastContext}
export default ToastContextProvaider
