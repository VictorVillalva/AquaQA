import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TextField,
        FormControl,
        InputLabel,
        OutlinedInput,
        InputAdornment,
        IconButton
 } from '@mui/material';

import { Visibility,
        VisibilityOff
} from '@mui/icons-material';

import Swal from 'sweetalert2';
import Logo from '../assets/Images/Logo.svg'
import { setRol, setTokens } from '../Helpers/auth';
import "../assets/Styles/Login.css"
import axios from 'axios';
import { login } from '../Store/slices/AuthSlice';
import { useDispatch } from 'react-redux';


export const Login = () => {    
    const [showPassword, setShowPassword] = useState(false);
    const dispatch= useDispatch()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()

    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handleChangePass=(e)=>{
        setPassword(e.target.value)
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Por favor, completa todos los campos',
              customClass: {
                container: 'custom-swal',
              },
            });
            return;
          }
        const dataUser = {
            email: email,
            password: password
        }
        console.log(dataUser)
        axios.post("http://localhost:8080/api/user/sign-in", dataUser)
        .then((resp) => {     
            const { data } = resp;
            console.log(data)
            setTokens(data.data.token);
            setRol(data.data.rol)
            dispatch(
                login({
                    token:data.data.token,
                    currentUser:data.data.rol,
                    status: resp.success
                })
            )
            console.log(data.data.rol)
          }) 
          .catch(({ response }) => {
            console.log(response.message);
          });
        }

    return(
            <form className="container-login">
                <div className="sec-izq-log">
                    <div className="logo">
                        <NavLink to={'/'}><img src={Logo}/><h2>AquaQA</h2></NavLink>
                    </div>
                    <div className="log-container">
                        <h1>Iniciar sesión</h1>
                        <h4>Bienvenido, por favor ingrese sus datos</h4>
                        <div className="name-user">
                        <TextField sx={{ m: '0', width: '55vh', backgroundColor: '#F8FDFD' }} 
                                    id="outlined-basic" 
                                    label="Correo Electrónico" 
                                    variant="outlined"
                                    value={email || ''}
                                    onChange={handleChangeEmail}
                                    />     
                        </div>
                        <div className="password-user">
                            <FormControl sx={{ m:'0', width: '55vh', backgroundColor:'#F8FDFD',}} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={password || ''}
                                    onChange={handleChangePass}
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
                        </div>
                        <div className="btn-iniciar-sesion">
                            <button type="submit" onClick={handleSubmit}>Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
                <div className="sec-der-login"/>
            </form>
    )
}