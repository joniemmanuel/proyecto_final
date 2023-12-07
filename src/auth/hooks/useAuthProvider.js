import { useReducer } from "react";

import Swal from "sweetalert2";

import { AuthReducer } from "../context";
import { registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from '../../firebase/providers';


export const useAuthProvider = (initialState) => {

  const [state, dispatch] = useReducer( AuthReducer , initialState );

  const login = async( credentials ) => {
    dispatch({type: 'setAuthenticated', payload: 'is-authenticating'})
    
    const user = await loginWithEmailPassword(credentials);

    if(user.ok === false) {
      Swal.fire({
        title: 'Error',
        icon: "error",
        text: user.errorMessage
      })
      dispatch({type: 'setAuthenticated', payload: 'not-authenticated'})
      return false;
    }

    localStorage.setItem('user',JSON.stringify(user));
    
    dispatch({type: 'setUser', payload: user});
    dispatch({type: 'setAuthenticated', payload: 'authenticated'});
    return true;
  };

  const register = async ( values ) => {
    
    // eslint-disable-next-line no-unused-vars
    const {password2, ...restValues} = values;

    dispatch({type: 'setAuthenticated', payload: 'is-authenticating'})

    const user = await registerUserWithEmailPassword(restValues)

    if(user.ok === false) {
      Swal.fire({
        title: 'Error',
        icon: "error",
        text: user.errorMessage
      })
      dispatch({type: 'setAuthenticated', payload: 'not-authenticated'})
      return false;
    }

    localStorage.setItem('user',JSON.stringify(user))

    dispatch({type: 'setUser', payload: user})
    dispatch({type: 'setAuthenticated', payload: 'authenticated'})
    return true;
  };

  const logout = async() => {
    await logoutFirebase();
    localStorage.clear();
    dispatch({type: 'setUser', payload: null});
    dispatch({type: 'setAuthenticated', payload: 'not-authenticated'});
  };

  const setUser = (user) => {
    dispatch({type: 'setUser', payload: user})
    dispatch({type: 'setAuthenticated', payload: 'authenticated'})
  }

  return {
    ...state,
    login,
    register,
    logout,
    setUser
  }
}
