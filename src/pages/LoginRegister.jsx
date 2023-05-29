import { useState } from 'react';
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

import { Register } from '../components/Register';    
import Logo from '../assets/Images/Logo.svg'
import '../assets/Styles/LoginRegister.css'


export const LoginRegister = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <>
            <div className="logo-sing-in">
                <img src={Logo} />
                <h2 className='name-empresa'>AquaQA</h2>

                <img className='Logo-AquaQA' src={Logo} />
                <h2 className='name-empresa'>AquaQA</h2>
            </div>

            <div className="Login-Register">
                <form className="form-login">
                    <h2>Iniciar sesión</h2>
                    <div className="bienvenida">
                        <p>Bienvenido, por favor ingrese sus datos</p>
                    </div>

                    <div className="Datos-Form">
                        <div className="email">
                            <FormControl sx={{ backgroundColor: '#F8FDFD', width: '400px' }}>
                                <TextField
                                    label="E-mail"
                                />
                            </FormControl>
                        </div>
                        <div className="pass">
                            <FormControl sx={{ backgroundColor: '#F8FDFD', width: '400px' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                        <div className="singUp">
                            <p>Aún no tienes una cuenta? <b>Registrarme</b></p>
                        </div>
                    </div>
                </form>


                
                <form className="form-register">
                    <Register></Register>
                </form>
                
            </div>



        </>
    )
}