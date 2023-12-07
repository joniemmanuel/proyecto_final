import PropTypes from 'prop-types'

import { AuthContext } from './';
import { useAuthProvider } from '../hooks';
import { useEffect } from 'react';


const AUTH_INITIAL_STATE = {
    isAuthenticated: 'not-authenticated',
    // isAuthenticated: 'is-authenticating',
    user: null,
}

export const AuthProvider = ({ children }) => {

    const {
        login,
        register,
        logout,
        setUser,
        ...state
    } = useAuthProvider(AUTH_INITIAL_STATE)

    useEffect(()=>{
        if(!localStorage.getItem('user')) return;
        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
    },[])
    

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            register,
            logout,
            setUser
        }}>
            { children }
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
}