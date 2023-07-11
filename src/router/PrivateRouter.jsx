import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes =({children})=>{
    const authState = localStorage.getItem('token');
    return authState !== null? children : <Navigate to={'/landing'}/>

}

PrivateRoutes.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoutes