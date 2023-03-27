import { useContext } from "react";
import { ToastContext } from "../contexts/Toast";

function useToast() {
    return useContext(ToastContext)
}
export default useToast