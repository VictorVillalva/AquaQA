import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import { AdminRoutes } from "./AdminRoutes"
import { UserRoutes } from "./UserRoutes"
import PublicRoutes from "./PublicRoutes"
import { Login } from "../pages/Login"
import { LandingPage } from "../pages/LandingPage"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                {}
                <Route 
                path="/*" 
                element={
                <PrivateRoutes>
                    <AdminRoutes/>
                    <UserRoutes/>
                </PrivateRoutes>}
                />
                <Route
                path="/login"
                element={
                    <PublicRoutes>
                        <Login/>
                    </PublicRoutes>
                }
                />
                <Route
                path="/landing"
                element={
                    <PublicRoutes>
                        <LandingPage/>
                    </PublicRoutes>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}