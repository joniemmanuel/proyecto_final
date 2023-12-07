import PropTypes from 'prop-types';

import buttonStyles from './button.module.css';

export const Button = ( {label, mb, mt, icon, onClick } ) => {
  return (
    <button className={buttonStyles.btn} style={{ marginBottom: `${mb}px`, marginTop: `${mt}px`}} onClick={onClick}>
       { label && <p>{label}</p> }
       { icon && icon }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  mb: PropTypes.number,
  mt: PropTypes.number,
  icon: PropTypes.element,
  onClick: PropTypes.func
}