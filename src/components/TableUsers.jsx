import { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const TableUsers = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };
    
    return(
        <> 
            <h2 className="users">Lista de usuarios</h2>
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
                            <td>Victor Villalva</td>
                            <td>Victor@gmail.com</td>
                            <td>9612345678</td>
                            <td className="btns-admin">
                                <div className="btn-editar">
                                    <button className="btn-edit">Editar</button>
                                </div>
                                <div className="btn-delete">
                                    <button className="btn-del" onClick={handleClickOpen}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Dialog
                sx={{ width: '80vh', marginLeft: '26%' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: '2.4vh' }}>
                    {"Ingrese su contraseña para eliminar el usuario"}
                </DialogTitle>
                <DialogContent sx={{ fontFamily: 'Poppins', fontSize: '1.8vh' }}>
                    <input type="text" placeholder="Contraseña" />
                </DialogContent>
                <DialogActions>
                    <button className="btn-cancelar" onClick={handleClose}>Cancelar</button>
                    <button className="btn-Eliminar" onClick={handleClose} autoFocus>Eliminar</button>
                </DialogActions>
            </Dialog>
        </>
    )
}