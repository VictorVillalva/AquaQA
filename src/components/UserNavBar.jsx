import Logo from '../assets/Images/Logo.svg';
import Home from '../assets/Images/UserHome.svg';
import Settings from '../assets/Images/Settings.svg';
import logoutt from '../assets/Images/Logout.svg';
//CSS
import '../assets/Styles/userNavBar.css';
import {NavLink, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../Store/slices/AuthSlice';
import { deleteRol, deleteToken } from '../Helpers/auth';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const UserNavBar = () => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const HandleLogOut = () =>{
        dispatch(logout())
        deleteToken()
        deleteRol()
        navigate('/landing')
    }

    return (
        <>
            <div className="row">
                <div className="col navU">
                    <NavLink to={'/home'}><img src={Logo} alt="Logo" id='LogoAQA'/></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col optionsAdmin navU">
                    <NavLink to={'/home'}><img src={Home} alt="Home" className='optionsU'/></NavLink>
                    <NavLink to={'/contraseña'}><img src={Settings} alt="Settings" className='optionsU' /></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col navU">
                    <a onClick={handleClickOpen}><img src={logoutt} alt="" id='LogoutU' /></a>
                </div>
            </div>
            <Dialog
                sx={{ width: '80vh', marginLeft: '30%'}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '2.4vh' }}>
                    {"¿Estas seguro de que quieres salir de tú cuenta?"}
                </DialogTitle>
                <DialogContent sx={{ fontFamily: 'Poppins', fontSize: '1.8vh'}}>
                </DialogContent>
                <DialogActions>
                    <button className="btn-cancelar" onClick={handleClose}>Cancelar</button>
                    <button className="btn-salir" onClick={HandleLogOut}>Salir</button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default UserNavBar;
