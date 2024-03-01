import { useAuth } from "./context/authContext"
import { Navigate, Outlet } from "react-router-dom"
export function ProtectedRoute(){

    const {loading, isAuth}=useAuth()
    if (loading)return <h1>Cargando...</h1>
    if (!loading && !isAuth) return <Navigate to="/login" replace/>
    return(
        <Outlet/>
    )
}