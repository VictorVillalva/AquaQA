import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { tokenContext } from './tokenContext';

export const TokenContext = () => useContext(tokenContext);

export const TokenProvider = ({ children }) => {
    const [userToken, setUserToken] = useState('');

    return(
        <tokenContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </tokenContext.Provider>
    )
}

TokenProvider.propTypes = {
    children: PropTypes.node,
};