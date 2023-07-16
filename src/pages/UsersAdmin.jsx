import { AdminNavBar } from "../components/AdminNavBar"
import { TableUsers } from "../components/TableUsers";
import '../assets/Styles/UsersAdmin.css'


export const UsersAdmin = () =>{

    return(
        <>
            <div className="container-admin">
                <div className="container NavBarAdmin">
                    <AdminNavBar></AdminNavBar>
                </div>
                <div className="content-admin">
                    <TableUsers></TableUsers>
                </div>
            </div>  
        </>
    )
}