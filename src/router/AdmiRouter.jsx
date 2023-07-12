import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { login } from "../Store/slices/AuthSlice";
import { Navigate, Route, Routes } from "react-router-dom";
import { UsersAdmin } from "../pages/UsersAdmin";



const AdmiRouter =()=>{
    const dispatch = useDispatch();
    const token= localStorage.getItem('token')
    const rol = localStorage.getItem('rol')

    useEffect(()=> {
        dispatch(login({token, currentUser: rol, isAuthenticathed: true}))
    },[])

    return(
        <>
        <Routes>
            <Route path="/users" element={<UsersAdmin/>} />

            <Route path="/" element={<Navigate to={'/user-'}/>}/>
        </Routes>
        </>
    )
}

export default AdmiRouter
