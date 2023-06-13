
//Images
import Logo from '../assets/Images/LogoEmpresa.svg';
import Home from '../assets/Images/UserHome.svg';
import ToolsSetting from '../assets/Images/ToolsSettings.svg';
import Settings from '../assets/Images/Settings.svg';
import logout from '../assets/Images/Logout.svg';
//CSS
import '../assets/Styles/userNavBar.css';

const UserNavBar = () => {
    return (
        <div className="container navbarUser">
            <div className="row">
                <div className="col nav">
                    <a href=""><img src={Logo} alt="Logo" id='LogoAQA'/></a>
                </div>
            </div>
            <div className="row">
                <div className="col optionsUser nav">
                    <a href=""><img src={Home} alt="Home" className='options'/></a>
                    <a href=""><img src={ToolsSetting} alt="Tools" className='options'/></a>
                    <a href=""><img src={Settings} alt="Settings" className='options'/></a>
                </div>
            </div>
            <div className="row">
                <div className="col nav">
                    <a href=""><img src={logout} alt="" id='Logout'/></a>
                </div>
            </div>
        </div>
    )
}

export default UserNavBar;