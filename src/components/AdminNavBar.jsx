import { NavLink, useNavigate } from 'react-router-dom';

import Logo from '../assets/Images/Logo.svg';
import logoutt from '../assets/Images/Logout.svg';
import User from '../assets/Images/UserAdmin.svg'
import { logout } from '../Store/slices/AuthSlice';
import '../assets/Styles/AdminNavBar.css'
import { useDispatch } from 'react-redux';
import { deleteRol, deleteToken } from '../Helpers/auth';

export const AdminNavBar = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const HandleLogOut = () => {
        dispatch(logout())
        deleteToken()
        deleteRol()
        navigate('/landing')
    }

    return(
        <>
            <div className="row">
                <div className="col navA">
                    <NavLink><img src={Logo} alt="Logo" id='LogoAQA' /></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col optionsAdmin navA">
                    <NavLink to={'/users'}><img src={User} alt="Home" className='optionsA' /></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col navA">
                    <a onClick={HandleLogOut}><img src={logoutt} alt="" id='LogoutA' /></a>
                </div>
            </div>
        </>
    )
}
