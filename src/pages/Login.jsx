
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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

import { styled } from '@mui/system';

import Logo from '../assets/Images/Logo.svg'
import "../assets/Styles/Login.css"


export const Login = () => {

    const navigate = useNavigate();

    const handleClickNavigateHome = () =>{
        navigate('/')
    }


    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const HeightTextField = styled(TextField)(() => ({
        '& .MuiInputBase-input': {
          height: '3vh'
        },
      }));

    const HeightFormControl = styled(FormControl)(() => ({
        '& .MuiInputBase-input': {
          height: '3vh'
        },
      }));
 

    return(
        
            <div className="container-login">
                <div className="logo">
                    <button onClick={handleClickNavigateHome}><img src={Logo}/><h2>AquaQA</h2></button>
                </div>
                <div className="sec-izq-log">
                    <div className="log-container">
                        <h1>Iniciar sesión</h1>
                        <h4>Bienvenido, por favor ingrese sus datos</h4>
                        <div className="name-user">
                            <HeightTextField sx={{ m:'0', width:'55vh',backgroundColor:'#F8FDFD' }} id="outlined-basic" label="Correo Electrónico" variant="outlined" />     
                        </div>
                        <div className="password-user">
                            <HeightFormControl sx={{ m:'0', width: '55vh', backgroundColor:'#F8FDFD',}} variant="outlined">
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
                            </HeightFormControl> 
                        </div>
                        <div className="recuerdame">
                            <input type="checkbox" />
                            <p>Recuerdame</p>
                        </div>
                        <div className="btn-iniciar-sesion">
                            <button>Iniciar sesión</button>
                        </div>
                    </div>
                </div>
                <div className="sec-der-login">
                </div>
            </div>
        
    )
}