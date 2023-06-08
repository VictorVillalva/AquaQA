import { useEffect, useState, useRef } from "react";

import { 
    TextField, 
    FormControl, 
    InputLabel, 
    OutlinedInput, 
    InputAdornment, 
    IconButton 
} from '@mui/material';

import { 
    Visibility, 
    VisibilityOff 
} from '@mui/icons-material';

import Logo from '../assets/Images/Logo.svg'
import "../assets/Styles/LoginRegister.css"



export const LoginRegister = () => {

    const containerRef = useRef(null);

    function signHandler() {
        containerRef.current.classList.add("right-panel-active"); 
    }
    
    function signHandler2() {
        containerRef.current.classList.remove("right-panel-active");
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function loginHandler(e) {
        e.preventDefault()
    }
  
    useEffect(() => { }, [])

    async function sendRegister(e) {
        e.preventDefault();
    }

  useEffect(() => { }, [])

    return(
        <>
            <div className="container" ref={containerRef} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={sendRegister} className="form-dynamic">
                        <div className="logo-sing-in">
                            <img src={Logo} />
                            <h2 className='name-empresa'>AquaQA</h2>
                        </div>
                        <h2 className="reg-fo">Crea tu cuenta</h2>
                        <div className="saludo">
                            <p>Registrate ahora y accede a todos los beneficios</p>
                        </div>
                        <div className="User-Telefono">
                            <div className="use">
                                <FormControl sx={{ backgroundColor: '#F8FDFD', width: '220px' }}>
                                    <TextField
                                        label="Nombre de usuario"
                                    />
                                </FormControl>
                            </div>
                            <div className="tel">
                                <FormControl sx={{ backgroundColor: '#F8FDFD', width: '220px' }}>
                                    <TextField
                                        label="Teléfono"
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <div className="E-mail">
                            <FormControl sx={{ backgroundColor: '#F8FDFD', width: '455px' }}>
                                <TextField
                                    label="Correo Electrónico"
                                />
                            </FormControl>
                        </div>
                        <div className="contras">
                            <div className="password">
                                <FormControl sx={{ backgroundColor: '#F8FDFD', width: '220px' }} variant="outlined">
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
                            </div>
                            <div className="confirm-password">
                                <FormControl sx={{ backgroundColor: '#F8FDFD', width: '220px' }} variant="outlined">
                                    <InputLabel htmlFor="outlined">Confirmar Contraseña</InputLabel>
                                    <OutlinedInput
                                        id="outlined"
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
                        </div>
                        <button className="btn-registro">Registrarme</button>
                        <div className="btn-inicio-ses">
                            <p>Si ya tienes una cuenta. <button className="ghost" id="signIn" onClick={signHandler2}>Iniciar sesión</button></p>
                        </div>
                    </form>
                </div>

                <div className="form-left form-container sign-in-container">
                    <form className="con-login" onSubmit={loginHandler}>
                        <div className="logo-sing">
                            <img src={Logo} />
                            <h2 className='name-empresa'>AquaQA</h2>
                        </div>
                        <h2 className="inicioS" >Iniciar Sesión</h2>
                        <p>Bienvenido, por favor ingrese sus datos</p>
                        <div className="datosForm">
                            <div className="email">
                                <FormControl sx={{ backgroundColor: '#F8FDFD', width: '400px' }}>
                                    <TextField
                                        label="Correo Electrónico"
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <div className="pass">
                            <FormControl sx={{ backgroundColor: '#F8FDFD', width: '400px' }} variant="outlined">
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
                        </div>
                        <div className="recuerdame">
                            <input type="checkbox" />
                            <p>Recuerdame</p>
                        </div>
                        <div className="btn-login">
                            <button>Iniciar Sesión</button>
                        </div>
                        <div className="iniciar-registro">
                            <p>Aún no tienes una cuenta? <button id="signUp" onClick={signHandler}>Crear cuenta</button></p>
                        </div>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">

                        </div>
                        <div className="overlay-panel overlay-right">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}