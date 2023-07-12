import { useEffect } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRouter";
import { Login } from "../pages/Login";
import UserRouter from "./UserRouter";
import { LandingPage } from "../pages/LandingPage";
import PrivateRoutesAdmi from "./PrivateRouterAdmi";
import { UsersAdmin } from "../pages/UsersAdmin";
import PrivateRoutesUser from "./PrivateRouterUser";


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
                exact path="/*"
                element={
                    <PrivateRoutesUser>
                        <UserRouter/>
                    </PrivateRoutesUser>
                }
                />
                <Route
                exact path="/users"
                element={
                   <PrivateRoutesAdmi>
                  <UsersAdmin></UsersAdmin>
                    
                   </PrivateRoutesAdmi>

                }
                />

                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter