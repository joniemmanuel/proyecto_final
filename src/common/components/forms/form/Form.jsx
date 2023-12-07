import { Link } from 'react-router-dom';
import { Formik, Form as FormFormik } from 'formik'
import PropTypes from 'prop-types';

import styles from './form.module.css';

export const Form = ( {
  title,
  btnLabel,
  footerMessage,
  footerLinkMessage,
  footerToLinkMessage,
  children,
  initialValues,
  onSubmit,
  validationSchema
} ) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles['inputs-box']}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            { () => (
              <FormFormik className={styles.inputs}>
                {children}
                <button type="submit" className={styles['btn-submit']}>{btnLabel}</button>
              </FormFormik>
            )}
          </Formik>
        </div>
        <div className={styles.footer}>
          <div>
            <p>{footerMessage} <Link to={footerToLinkMessage}>{footerLinkMessage}</Link></p>
          </div>
        </div>
    </div>
  )
}

Form.propTypes = {
    title: PropTypes.string,
    btnLabel: PropTypes.string.isRequired,
    footerMessage: PropTypes.string,
    footerLinkMessage: PropTypes.string,
    footerToLinkMessage: PropTypes.string,
    children: PropTypes.array,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
    validationSchema: PropTypes.object,
}