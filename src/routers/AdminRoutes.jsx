import { Route, Routes } from "react-router-dom"
import { UsersAdmin } from "../pages/UsersAdmin"

export const AdminRoutes = () =>{
    return(
        <>
            <Routes>
                <Route path="/users" element={<UsersAdmin/>}/>
            </Routes>
        </>
    )
}