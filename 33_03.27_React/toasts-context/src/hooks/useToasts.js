import { useContext } from 'react'
import { ToastsContext } from '../contexts/Toasts'

function useToasts() {
    return useContext(ToastsContext)
}

export default useToasts