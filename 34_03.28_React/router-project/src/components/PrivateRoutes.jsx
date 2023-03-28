import {  Navigate, Outlet } from "react-router-dom"

const user = {
    loggedIn: true
}

function PrivateRoutes() {
    if (!user.loggedIn) return <Navigate to="/login" />

    return <Outlet />

}

export default PrivateRoutes