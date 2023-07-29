import { NavLink, useNavigate } from 'react-router-dom';

import Logo from '../assets/Images/Logo.svg';
import logoutt from '../assets/Images/Logout.svg';
import User from '../assets/Images/UserAdmin.svg'
import '../assets/Styles/AdminNavBar.css'
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export const AdminNavBar = () => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate()


    const HandleLogOut = () => {
        navigate('/landing')
    }

    return(
        <>
            <div className="row">
                <div className="col navA">
                    <NavLink to={'/users'}><img src={Logo} alt="Logo" id='LogoAQA' /></NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col optionsAdmin navA">
                    <img src={User} alt="Home" className='optionsA'/>
                </div>
            </div>
            <div className="row">
                <div className="col navA">
                    <a onClick={handleClickOpen}><img src={logoutt} alt="" id='LogoutA' /></a>
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
                    <button className="btn-cancelarLogOut" onClick={handleClose}>Cancelar</button>
                    <button className="btn-ConfirmarLogOut" onClick={HandleLogOut}>Confirmar</button>
                </DialogActions>
            </Dialog>
        </>
    )
}
