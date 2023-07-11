import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoutes = ({ children }) => {
  const authState = localStorage.getItem('token') || null;
  return authState !== null ? <Navigate to={'/'} /> : children;
};

PublicRoutes.propTypes = {
    children: PropTypes.node,
  };

export default PublicRoutes;