import { Route, Routes } from "react-router-dom"
import { HomeUser } from "../pages/HomeUser"
import { CambioContraseña } from "../pages/CambioContraseña"

export const UserRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/home" element={<HomeUser/>}/>
                <Route path="/contraseña" element={<CambioContraseña/>}/>
            </Routes>
        </>
    )
}