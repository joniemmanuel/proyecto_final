import { useContext } from 'react';
import PropTypes from 'prop-types'
import { FaXmark } from "react-icons/fa6";

import { UiContext } from '../../context';
import styles from './modal.module.css';


export const Modal = ({children}) => {

  const { toggleOpenModal } = useContext(UiContext);

  return (
    <div className={styles['modal-container']}>
        <div className={styles.modal}>
            <div>
              {children}
              <div className={styles['btn-close']}>
                <FaXmark onClick={toggleOpenModal}/>
              </div>
            </div>
        </div>
    </div>    
  )
}

Modal.propTypes = {
    children: PropTypes.element
};