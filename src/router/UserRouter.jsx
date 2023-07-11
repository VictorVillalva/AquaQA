import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { login } from "../Store/slices/AuthSlice";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeUser } from "../pages/HomeUser";
import { CambioContraseña } from "../pages/CambioContraseña";


const UserRouter =()=>{
    const dispatch = useDispatch();
    const token= localStorage.getItem('token')
    
    useEffect(()=> {
        dispatch(login({token, isAuthenticathed: true}))
    },[])

    return(
        <>
        <Routes>
            <Route path="/home" element={<HomeUser/>} />
            <Route path="/contraseña" element={<CambioContraseña/>}/>
            <Route path="/*" element={<Navigate to={'/home'}/>}/>
        </Routes>
        </>
    )
}

export default UserRouter