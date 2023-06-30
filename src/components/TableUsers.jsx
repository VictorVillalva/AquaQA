import { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
/*import { styled } from '@mui/system';*/
import AddUser from '../assets/Images/AddUser.svg'
import AddUserWhite from '../assets/Images/AddUserWhite.svg'
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton
} from '@mui/material';

import { Visibility,
    VisibilityOff
} from '@mui/icons-material';


export const TableUsers = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const [info, setInfo] = useState(false);

    const handleClickInfo = () => {
    setInfo(true);
    };

    const handleCloseInfo = () => {
    setInfo(false);
    };

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
    setHovered(true);
    };

    const handleMouseLeave = () => {
    setHovered(false);
    };
    
    const [addUser, setAddUser] = useState(false);  

    const handleClickOpenAddUser = () => {
    setAddUser(true);
    }

    const handleClickCloseAddUser = () => {
        setAddUser(false);
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    /*const HeightFormControl = styled(FormControl)(() => ({
        '& .MuiInputBase-input': {
          height: '3vh'
        },
      }));*/
        

    return(
        <>  
            <div className="head-add">
                <h2 className="users">Lista de usuarios</h2>
                <button onClick={handleClickOpenAddUser} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="btn-addUser">{hovered ? (
                    <img src={AddUserWhite}/>
                ) : (
                    <img src={AddUser}/>
                )}<h2>Agregar</h2></button>
            </div>
            <div className="container-crud">
                <table className="table-users">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre de usuario</th>
                            <th>Correo Electrónico</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><a onClick={handleClickInfo} className='infoSensores'>Victor Villalva</a> </td>
                            <td>Victor@gmail.com</td>
                            <td>9612345678</td>
                            <td className="btns-admin">
                                <button className="btn-del" onClick={handleClickOpen}>Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Dialog
                sx={{ width: '80vh', marginLeft: '30%'}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '2.4vh' }}>
                    {"Ingrese su contraseña para eliminar el usuario"}
                </DialogTitle>
                <DialogContent sx={{ fontFamily: 'Poppins', fontSize: '1.8vh'}}>
                    <FormControl sx={{ m:'.7vh', width: '55vh', backgroundColor:'#F8FDFD',}} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                    </FormControl> 
                </DialogContent>
                <DialogActions>
                    <button className="btn-cancelar" onClick={handleClose}>Cancelar</button>
                    <button className="btn-Eliminar" onClick={handleClose} autoFocus>Eliminar</button>
                </DialogActions>
            </Dialog>
            <Dialog
                className='sensores-info'
                sx={{ width: '80vh', marginLeft: '26%' }}
                open={info}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '3vh' }}>
                    {"Información de sensores"}
                </DialogTitle>
                <DialogContent sx={{ fontFamily: 'Poppins'}}>
                    <table className="sensores">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Sensor</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <button className="btn-cancelar" onClick={handleCloseInfo}>Cancelar</button>
                </DialogActions>
            </Dialog>
            <Dialog
                className='sensores-info'
                sx={{ width: '80vh', marginLeft: '26%' }}
                open={addUser}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '3vh' }}>
                    {"Agregar un nuevo usuario"}
                </DialogTitle>
                <DialogContent sx={{ fontFamily: 'Poppins'}}>
                </DialogContent>
                <DialogActions>
                    <button className="btn-cancelar" onClick={handleClickCloseAddUser}>Cancelar</button>
                    <button className="btn-cancelar" onClick={handleClickCloseAddUser}>Aceptar</button>
                </DialogActions>
            </Dialog>
        </>
    )
}