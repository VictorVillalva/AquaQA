
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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
import "../assets/Styles/Login.css"


export const Login = () => {    
    const [showPassword, setShowPassword] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate=useNavigate()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()

    const handleChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handleChangePass=(e)=>{
        setPassword(e.target.value)
    }

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const validateForm = () => {
        setIsFormValid(email && password);
      };
      
      useEffect(() => {
        validateForm();
      }, [email, password]);

    const handleSubmit =(event)=>{
        event.preventDefault();
        if(isFormValid) {
        let Options ={
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
        console.log(Options)
        fetch('http://localhost:8080/api/login', Options)
          .then(data => {
            
            data!=null? navigate("/home"): alert("alert")
            console.log(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos.',
                customClass: {
                    container: 'custom-swal',
                  },
              });
        }

    }
    return(
            <form className="container-login">
                <div className="logo">
                    <NavLink to={'/'}><img src={Logo}/><h2>AquaQA</h2></NavLink>
                </div>
                <div className="sec-izq-log">
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
                        <div className="recuerdame">
                            <input type="checkbox" />
                            <p>Recuerdame</p>
                        </div>
                        <div className="btn-iniciar-sesion">
                            <button type="submit" onClick={handleSubmit} >Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
                <div className="sec-der-login"/>
            </form>
    )
}