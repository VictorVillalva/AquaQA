import Logo from '../assets/Images/Logo.svg';
import logout from '../assets/Images/Logout.svg';
import User from '../assets/Images/UserAdmin.svg'
import Sensor from '../assets/Images/SensorAdmin.svg'

import '../assets/Styles/userNavBar.css'

export const AdminNavBar = () => {
    return(
        <>
            <div className="row">
                <div className="col nav">
                    <a href=""><img src={Logo} alt="Logo" id='LogoAQA' /></a>
                </div>
            </div>
            <div className="row">
                <div className="col optionsUser nav">
                    <a href=""><img src={User} alt="Home" className='options' /></a>
                    <a href=""><img src={Sensor} alt="Settings" className='options' /></a>
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