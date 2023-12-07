import * as Yup from 'yup';

import PropTypes from 'prop-types';

import { Form } from '../form'
import { InputField } from '../../inputs';


const initialValues = {
    name: '',
    email: '',
    password: '',
    password2: '',
};
  
const registerValidationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .required('Required')
      .min(3, 'Must be a minimum of 3 characters'),
    email: Yup.string()
      .trim()
      .required('Required')
      .email('Invalid email'),
    password: Yup.string()
      .matches(/^\S*$/,'Spaces are not allowed')
      .required('Required')
      .min(6, "Must be a minimum of 6 characters"),
    password2: Yup.string()
      .required('Password confirmation required')
      .oneOf([ Yup.ref('password'), null ],  'Passwords must match')
}); 

export const RegisterForm = ({ onSubmit }) => {
  return (
    <Form 
      title={"Register"} 
      btnLabel={"Sign up"}
      footerMessage={"¿Ya tienes cuenta?"}
      footerLinkMessage={"inicia sesion aqui"}
      footerToLinkMessage={"/auth/login"}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registerValidationSchema}
    >
      <InputField 
        label="Name" 
        id="name" 
        name="name"
        type="text"
      />
      <InputField 
        label="Email" 
        id="email" 
        name="email"
        type="email"
      />
      <InputField 
        label="Password" 
        id="password" 
        name="password"
        type="password"
      />
      <InputField 
        label="Confirm password" 
        id="password2" 
        name="password2"
        type="password"
      />
    </Form>
  )
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}