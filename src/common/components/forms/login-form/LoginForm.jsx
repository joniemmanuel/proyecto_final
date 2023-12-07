import * as Yup from 'yup';
import PropTypes from 'prop-types'

import { Form } from '../form'
import { InputField } from '../../inputs';


const initialValues = {
  email: '',
  password: '',
}

const LoginValidationSchema = Yup.object({
    email: Yup.string()
      .required('Requerido')
      .email('Invalid email'),
    password: Yup.string()
      .matches(/^\S*$/,'Spaces are not allowed')
      .required('Requerido')
})

export const LoginForm = ( {onSubmit} ) => {
  return (
    <Form 
      title={"Iniciar Sesion"} 
      btnLabel={"Login"}
      footerMessage={"¿No tienes cuenta?"}
      footerLinkMessage={"crea una aqui"}
      footerToLinkMessage={"/auth/register"}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={LoginValidationSchema}
    >
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
    </Form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}