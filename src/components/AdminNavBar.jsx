import { NavLink } from 'react-router-dom';

import Logo from '../assets/Images/Logo.svg';
import logout from '../assets/Images/Logout.svg';
import User from '../assets/Images/UserAdmin.svg'


import '../assets/Styles/AdminNavBar.css'

export const AdminNavBar = () => {
    return(
        <>
            <div className="row">
                <div className="col nav">
                    <NavLink to={'/home'}><img src={Logo} alt="Logo" id='LogoAQA' /></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col optionsUser nav">
                    <NavLink to={'/users'}><img src={User} alt="Home" className='options' /></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col nav">
                    <a href=""><img src={logout} alt="" id='Logout' /></a>
                </div>
            </div>
        </>
    )
}