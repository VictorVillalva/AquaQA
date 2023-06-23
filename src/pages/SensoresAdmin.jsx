import { AdminNavBar } from "../components/AdminNavBar"
import { TableSensor } from "../components/TableSensor"
import '../assets/Styles/UsersAdmin.css'

export const SensoresAdmin = () =>{

    return(
        
            <div className="container-admin">
                <div className="container NavBarAdmin"> 
                    <AdminNavBar></AdminNavBar>
                </div>
                <div className="content-admin">
                    <TableSensor></TableSensor>
                </div>
            </div>
        
    )
}