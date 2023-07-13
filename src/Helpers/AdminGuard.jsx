import PropTypes from 'prop-types';
const AdminGuard = (WrappedComponent) => {

    const rol = (localStorage.getItem('rol'))
        ? localStorage.getItem('rol')
        : '';

    return (props) => {
        if (rol === 'admin') {
            return <WrappedComponent {...props} />;
        } else {
            return <p>xd</p>
        //     aca retornas un 'ei bro, 404 -> componente de error y en el componente de error vas meter un useEffect que borre localStorage'
        }
    };
};

AdminGuard.propTypes = {
    props: PropTypes.node,
  };


export default AdminGuard;
