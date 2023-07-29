import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import { useContext } from 'react';
import { useState } from 'react';

export const UserContextUse = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userToken, setUserToken] = useState('');

    return(
        <UserContext.Provider value={{ userEmail, setUserEmail, userToken, setUserToken }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node,
};