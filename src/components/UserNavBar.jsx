import Logo from '../assets/Images/Logo.svg';
import Home from '../assets/Images/UserHome.svg';
import Settings from '../assets/Images/Settings.svg';
import logoutt from '../assets/Images/Logout.svg';
//CSS
import '../assets/Styles/userNavBar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../Store/slices/AuthSlice';
import { deleteRol, deleteToken } from '../Helpers/auth';


const UserNavBar = () => {

    const dispatch = useDispatch()

    const HandleLogOut = () =>{
        dispatch(logout())
        deleteToken()
        deleteRol()

    }
    
    return (
        <>
            <div className="row">
                <div className="col navU">
                    <NavLink to={'/home'}><img src={Logo} alt="Logo" id='LogoAQA' /></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col optionsAdmin navU">
                    <a href=""><img src={Home} alt="Home" className='optionsU' /></a>
                    <a href=""><img src={Settings} alt="Settings" className='optionsU' /></a>
                </div>
            </div>
            <div className="row">
                <div className="col navU">
                    <a onClick={HandleLogOut}><img src={logoutt} alt="" id='LogoutU' /></a>
                </div>
            </div>
        </>
    )
}

export default UserNavBar;