import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

import styles from './input-field.module.css';

export const InputField = ({label,id,name,type}) => {

  const [field] = useField(name);

  return (
    <div className={styles.container}>
        <label htmlFor={id}>{label}</label>
        <input 
          type={type} 
          id={id} 
          placeholder={label}
          name={name}
          {...field}
        />
        <ErrorMessage name={name} component={"span"}/>
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
}