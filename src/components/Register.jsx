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

export const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return(
        <>
            <h2>Crea una cuenta</h2>
            <div className="saludo">
                <p>Registrate ahora y accede a todos los beneficios</p>
            </div>
            <div className="User-Telefono">
                <div className="use">
                    <FormControl sx={{ backgroundColor: '#F8FDFD', width: '220px' }}>
                        <TextField
                            label="Username"
                        />
                    </FormControl>
                </div>
                <div className="tel">
                    <FormControl sx={{ backgroundColor: '#F8FDFD', width: '220px' }}>
                        <TextField
                            label="Telefono"
                        />
                    </FormControl>
                </div>
            </div>
            <div className="E-mail">
                <FormControl sx={{ backgroundColor: '#F8FDFD', width: '455px' }}>
                    <TextField
                        label="E-mail"
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
                        <InputLabel htmlFor="outlined-adornment-password">Confirmar Contraseña</InputLabel>
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
            </div>
            <div className="btn-registrarse">
                <button>Registrarme</button>
            </div>
            <div className="inicioses">
                <p>Si ya tienes una cuenta. <b>Inicia sesión</b></p>
            </div>
        </>
    )
}