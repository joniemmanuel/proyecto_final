import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Loader, RegisterForm } from '../../../common';
import { AuthContext } from '../../context';

import styles from './register-page.module.css';


export const RegisterPage = () => {

  const { register, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    const trimmedValues = Object.keys(values).reduce((acc, key) => {
      acc[key] = typeof values[key] === 'string' ? values[key].trim() : values[key];
      return acc;
    }, {});
    const registered = await register(trimmedValues);
    if(registered){
      navigate('/');
    }
  }

	return (
    <div className={styles.container}>
      {
        isAuthenticated === "is-authenticating"
        ? <Loader />
        : <RegisterForm onSubmit={handleSubmit}/>
      }
    </div>
	);
};
