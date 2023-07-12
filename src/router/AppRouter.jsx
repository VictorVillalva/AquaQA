import { useEffect } from "react"
import { useSelector } from "react-redux"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
// import PublicRoutes from "./PublicRouter";
import { Login } from "../pages/Login";
import UserRouter from "./UserRouter";
import { LandingPage } from "../pages/LandingPage";
import PrivateRoutesAdmi from "./PrivateRouterAdmi";
import { UsersAdmin } from "../pages/UsersAdmin";
import PrivateRoutesUser from "./PrivateRouterUser";
import AdminGuard from "../Helpers/AdminGuard.jsx";
import {HomeUser} from "../pages/HomeUser.jsx";
import {CambioContraseña} from "../pages/CambioContraseña.jsx";
import UserGuard from "../Helpers/UserGuard.jsx";


const AppRouter =()=>{

    const authState= useSelector(state=> state.authState)
    useEffect(()=>{}, [authState]);

    //Protected Routes
    //Admin
    const UsersAdminProtected = AdminGuard(UsersAdmin);

    //User
    const HomeUserProtected = UserGuard(HomeUser);
    const CambioContraseñaProtected =  UserGuard(CambioContraseña);

    return(
        <BrowserRouter>
            <Routes>
                {/* Normal Routes */}
                <Route
                    path="/login"
                    element={
                        <Login/>
                    }
                />
                <Route
                    path="/landing"
                    element={
                        <LandingPage/>
                    }
                />

                {/* Admin Routes */}
                <Route
                    path="/users"
                    element={
                        <UsersAdminProtected />
                    }
                />



                {/* User Routes */}
                <Route path="/home" element={<HomeUserProtected/>} />
                <Route path="/contrasena" element={<CambioContraseñaProtected/>}/>


                {/* Default catch */}
                <Route path="*" element={<Navigate to={'/landing'}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
