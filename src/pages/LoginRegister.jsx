import { Register } from '../components/Register';  
import { Login } from '../components/Login';


import '../assets/Styles/LoginRegister.css'  

export const LoginRegister = () => {

    return (
        <>
            <div className="Login-Register">
                <form className="form-login">
                    <Login></Login>
                </form>
                <form className="form-register" >
                    <Register></Register>
                </form>
            </div>
        </>
    )
}