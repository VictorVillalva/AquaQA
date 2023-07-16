import { TextField } from '@mui/material';
import Foto from '../assets/Images/FotoUsuario.png'
import ID from '../assets/Images/FaceID.png'
import { styled } from '@mui/system';

export const Contraseña = () => {

    const HeightTextField = styled(TextField)(() => ({
        '& .MuiInputBase-input': {
          height: '3vh'
        },
      }));

    return(
        <>
            <form className="form-contenido">
                <div className="form-sec-izq">
                    <h2>Victor Villalva</h2>
                    <div className="divider"/>
                    <h3>correoelectronico@ejemplo.com</h3>
                    <div className="cambio-contra">
                        <h4>Cambia contraseña</h4>
                        <div className="inputs">
                            <HeightTextField sx={{width:'40vh', backgroundColor:'#F8FDFD'}} className='contraseña' id="outlined-basic" label="Contraseña antigua" variant="outlined"/>
                            <HeightTextField sx={{width:'40vh', backgroundColor:'#F8FDFD'}} className='nueva-contraseña' id="outlined-basic" label="Nueva contraseña" variant="outlined"/>
                        </div>
                        <button className='btn-cambiar'>Cambiar</button>
                    </div>
                </div>
                <div className="form-sec-der">
                    <div className="sub-user-img">
                        <img className='foto-usuario' src={Foto}/>
                    </div>
                    <div className="sub-img">
                        <img className='ID' src={ID}/>
                    </div>
                </div>
            </form>
        </>
    )
}