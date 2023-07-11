import Logo from '../assets/Images/Logo.svg';
import Home from '../assets/Images/UserHome.svg';
import Settings from '../assets/Images/Settings.svg';
import logoutt from '../assets/Images/Logout.svg';
//CSS
import '../assets/Styles/userNavBar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../Store/slices/AuthSlice';
import { deleteToken } from '../Helpers/auth';


const UserNavBar = () => {

    const dispatch = useDispatch()

    const HandleLogOut = () =>{
        dispatch(logout())
        deleteToken()
    }
    
    return (
        <>
            <div className="row">
                <div className="col nav">
                    <NavLink to={'/home'}><img src={Logo} alt="Logo" id='LogoAQA' /></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col optionsUser nav">
                    <a href=""><img src={Home} alt="Home" className='options' /></a>
                    <a href=""><img src={Settings} alt="Settings" className='options' /></a>
                </div>
            </div>
            <div className="row">
                <div className="col nav">
                    <a onClick={HandleLogOut}><img src={logoutt} alt="" id='Logout' /></a>
                </div>
            </div>
        </>
    )
}

export default UserNavBar;