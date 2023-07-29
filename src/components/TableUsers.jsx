import { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddUser from '../assets/Images/AddUser.svg'
import AddUserWhite from '../assets/Images/AddUserWhite.svg'
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    TextField
} from '@mui/material';

import { Visibility,
    VisibilityOff
} from '@mui/icons-material';
import { axiosInstance } from '../Helpers/axiosInstance';
import axios from 'axios';
import Swal from 'sweetalert2';


export const TableUsers = () => {

    const [user, setUser] = useState([])
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passwordAdmin, setPasswordAdmin]=useState();
    const [phSensorStatus, setPhSensorStatus] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);

    //METODO PARA ABRIR LA INFORMACION DE LOS SENSORES DEL USUARIO

    const [info, setInfo] = useState(false);
    
    const handleClickInfo = (userId) => {
        setSelectedUserId(userId);
        setInfo(true);
      };
      
    const handleCloseInfo = () => {
    setInfo(false);
    };
    

    useEffect(() => {
        if (selectedUserId) {
          const apiUrl = `http://localhost:8080/api/health/ph/${selectedUserId}`;
          axios.get(apiUrl)
            .then(response => {
              const phStatus = response.data
              setPhSensorStatus(phStatus);
            })
            .catch(error => {
              console.error(error);
            });
        }
      }, [selectedUserId]);


    const handleChangePass=(e)=>{
        setPasswordAdmin(e.target.value)
    }

    const probar = () => {
        const dataUser = {
            email: 'admin@aqua-qa.com',
            password: passwordAdmin
        }
        axios.post("http://localhost:8080/api/user/sign-in", dataUser)
        .then((resp) => {
            const { data } = resp;
            console.log(data)
            borrar(userIdToDelete);
          })
          .catch(({ response }) => {
            console.log(response.message);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Contraseña incorrecta',
                customClass: {
                  container: 'custom-swal',
                },
              });
          });
        }

    const actualizarUsuarios = () => {
        axiosInstance
          .get('user')
          .then(({ data }) => {
            setUser(data.data.filter(u => u.rol === 'user'));
          })
          .catch(err => {
            console.log(err.message);
          });
      };

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
      
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };
      
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      
      const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
      };

    //METODO PARA ABRIR EL DIALOG DE BORRAR USUARIO
    
    const [openDeleteUser, setOpenDeleteUser] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);

    useEffect(() => {
        actualizarUsuarios()
      }, []);

    const handleClickOpen = (id) => {
      setUserIdToDelete(id);
      setOpenDeleteUser(true);
    };

    const handleClose = () => {
    setOpenDeleteUser(false);
    };

    
    const borrar = (id) => {
        const accessToken = localStorage.getItem('token');
        if (!accessToken) {
            console.error('Token no encontrado');
            return;
          }
        axios.delete(`http://localhost:8080/api/user/${id}`, {
            headers: {
              'Content-type': 'application/json',
              'Authorization': localStorage.getItem('token'),
            }
          })
            .then(({ data }) => {
              console.log(data);
              const updatedUsers = user.filter((user) => user.id !== id);
              setUser(updatedUsers);
              setOpenDeleteUser(false);
              // Realiza alguna acción después de eliminar el usuario
            })
            .catch((error) => {
              if (axios.isAxiosError(error)) {
                console.error('Error en la solicitud HTTP:', error.response);
                // Maneja el error de la solicitud HTTP
              } else {
                console.error('Error:', error.message);
                // Maneja otros errores
              }
            });
        };

    

    //METODO PARA ACTIVAR EL HOVER DEL BTN AGREGAR

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
    setHovered(true);
    };
    const handleMouseLeave = () => {
    setHovered(false);
    };
    
    //METODO PARA ABRIR EL DIALOG DE ADD USER
    const [addUser, setAddUser] = useState(false);  
    const handleClickOpenAddUser = () => {
    setAddUser(true);
    }
    const handleClickCloseAddUser = () => {
    setAddUser(false);
    }

    //FUNCIONALIDAD DE LOS INPUTS DE CONTRASEÑA

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const handleCreateUser = (e) => {
        const newUser = {
          name: name,
          lastname: lastName,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
        };
      
        const accessToken = localStorage.getItem('token');
      
        if (!accessToken) {
          console.error('Token no encontrado');
          return;
        }

        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Por favor, completa todos los campos',
              customClass: {
                container: 'custom-swal',
                popup: 'sweetalert-popup',
              },
            });
            return;
          }
        const dataUser = {
            email: email,
            password: password
        }
        console.log(dataUser)
        axios.post('http://localhost:8080/api/user/sign-up', newUser, {
            headers: {
              Authorization: `${accessToken}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            const newUser = response.data;
            const updatedUsers = [...user, newUser];
            setUser(updatedUsers);
            actualizarUsuarios()
            setAddUser(false);
          })
          .catch((error) => {
            if (axios.isAxiosError(error)) {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Datos Invalidos',
                customClass: {
                  container: 'custom-swal',
                  popup: 'sweetalert-popup',
                },
              });
              console.error('Error en la solicitud HTTP:', error.response);
            } else {
              console.error('Error:', error.message);
            }
          });
      };

          
    return(
        <>  
            <div className="head-add">
                <h2 className="users">Lista de usuarios</h2>
                <button onClick={handleClickOpenAddUser} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave} 
                        className="btn-addUser">{hovered ? (
                    <img src={AddUserWhite}/>
                ) : (
                    <img src={AddUser}/>
                )}<h2>Agregar</h2>
                </button>
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
                        {user.map(users => (
                            <>
                                <tr key={users.id}>
                                    <td>{users.id}</td>
                                    <td><a onClick={() => handleClickInfo(users.id)} className='infoSensores'>{users.name} {users.lastname}</a></td>
                                    <td>{users.email}</td>
                                    <td>{users.phonenumber}</td>
                                    <td className="btns-admin">
                                        <button className="btn-del" onClick={() => handleClickOpen(users.id)}>Eliminar</button>
                                    </td>
                                </tr>   
                            </>      
                        ))}
                    </tbody>
                </table>
            </div>




            <Dialog
                sx={{ width: '80vh', marginLeft: '28%'}}
                open={openDeleteUser}
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
                                    value={passwordAdmin || ''}
                                    onChange={handleChangePass}
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
                    <button className="btn-Eliminar" onClick={() => probar()}>Eliminar</button>
                </DialogActions>
            </Dialog>




            <Dialog
                className='sensores-info'
                sx={{ width: '80vh', marginLeft: '26%'}}
                open={info}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '3vh', textAlign:'center' }}>
                    {"Información de sensores"}
                </DialogTitle>
                <DialogContent sx={{ fontFamily: 'Poppins', overflow:'hidden' }}>
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
                                <td>1</td>
                                <td>Temperatura</td>
                                <td className='status'>OK</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>PH</td>
                                <td className='status'>{phSensorStatus === null ? 'Error' : String(phSensorStatus)}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Conductividad</td>
                                <td className='status'>OK</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Turbidez</td>
                                <td className='status'>OK</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Humedad</td>
                                <td className='status'>OK</td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <button className="btn-cancelar" onClick={handleCloseInfo}>Cancelar</button>
                </DialogActions>
            </Dialog>





            <Dialog
                className='dialog-addUser'
                sx={{ width: '80vh', marginLeft: '26%' }}
                open={addUser}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontFamily: 'Poppins', fontWeight: '700', fontSize: '3vh' }}>
                    {"Agregar un nuevo usuario"}
                </DialogTitle>
                <DialogContent sx={{ fontFamily: 'Poppins', }}>
                    <form action="" className='container-adduser'>
                        <div className="name-apellidos">
                            <TextField 
                            sx={{ paddingRight: '1.5vh', backgroundColor: '#F8FDFD' }} 
                            label="Nombre" 
                            variant="outlined" 
                            value={name}
                            onChange={handleNameChange}
                            />
                            <TextField 
                            sx={{ background: '#F8FDFD' }} 
                            label="Apellido" 
                            variant="outlined"
                            value={lastName}
                            onChange={handleLastNameChange} 
                            />
                        </div>
                        <div className="email">
                            <TextField 
                            sx={{ background: '#F8FDFD', width: '58.7vh' }} 
                            label="E-mail" 
                            variant="outlined" 
                            value={email}
                            onChange={handleEmailChange}
                            />
                        </div>
                        <div className="passwords">
                            <FormControl sx={{ width: '28.6vh', paddingRight: '1.5vh', background: '#F8FDFD' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={handlePasswordChange}
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
                            <TextField
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                            sx={{ background: '#F8FDFD' }} 
                            label="Teléfono"
                            variant="outlined"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange} 
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <button className="btn-cancelarAddUser" onClick={handleClickCloseAddUser}>Cancelar</button>
                    <button className="btn-crear" onClick={handleCreateUser}>Crear</button>
                </DialogActions>
            </Dialog>
        </>
    )
}