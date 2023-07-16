import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutesAdmi =({children})=>{
    const authState = localStorage.getItem('token');
    const rol=localStorage.getItem('rol')
    return authState !== null && (rol==='admin') ? children : <Navigate to={'/landing'}/>
}

PrivateRoutesAdmi.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoutesAdmi
