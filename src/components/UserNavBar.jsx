
//Images
import Logo from '../assets/Images/LogoEmpresa.svg';
import Home from '../assets/Images/UserHome.svg';
import ToolsSetting from '../assets/Images/ToolsSettings.svg';
import logout from '../assets/Images/Logout.svg';
//CSS
import '../assets/Styles/userNavBar.css';

const UserNavBar = () => {
    return (
        <div className="naUs">
            <div className="components">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="options">
                    <a href=""><img src={Home} alt="Home" className='options'/></a>
                    <a href=""><img src={ToolsSetting} alt="Tools" className='options'/></a>
                    {/* <a href=""><img src={Settings} alt="Settings" className='options'/></a> */}
                </div>
                <div className="out">
                    <a href=""><img src={logout} alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default UserNavBar;
