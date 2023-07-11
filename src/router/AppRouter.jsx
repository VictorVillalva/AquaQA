import { useEffect } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRouter";
import { Login } from "../pages/Login";
import PrivateRoutes from "./PrivateRouter";
import UserRouter from "./UserRouter";
import { LandingPage } from "../pages/LandingPage";


const AppRouter =()=>{

    const authState= useSelector(state=> state.authState)
    useEffect(()=>{}, [authState]);

    return(
        <BrowserRouter>
            <Routes>
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

                
                <Route
                path="/*"
                element={
                    <PrivateRoutes>
                        <UserRouter/>
                    </PrivateRoutes>
                }
                />

                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter