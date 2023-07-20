import { useEffect } from "react"
import { useSelector } from "react-redux"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
// import PublicRoutes from "./PublicRouter";
import { Login } from "../pages/Login";
import { LandingPage } from "../pages/LandingPage";
import { UsersAdmin } from "../pages/UsersAdmin";
import AdminGuard from "../Helpers/AdminGuard.jsx";
import {HomeUser} from "../pages/HomeUser.jsx";
import UserGuard from "../Helpers/UserGuard.jsx";


const AppRouter =()=>{

    const authState= useSelector(state=> state.authState)
    useEffect(()=>{}, [authState]);

    //Protected Routes
    //Admin
    const UsersAdminProtected = AdminGuard(UsersAdmin);

    //User
    const HomeUserProtected = UserGuard(HomeUser);


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


                {/* Default catch */}
                <Route path="*" element={<Navigate to={'/landing'}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
