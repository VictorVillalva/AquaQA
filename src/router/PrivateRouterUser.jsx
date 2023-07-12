import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutesUser =({children})=>{
    const authState = localStorage.getItem('token');
    const rol=localStorage.getItem('rol')
    return authState !== null && (rol==='user') ? children : <Navigate to={'/landing'}/>
}

PrivateRoutesUser.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoutesUser