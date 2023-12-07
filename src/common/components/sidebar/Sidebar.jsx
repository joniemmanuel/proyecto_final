import { useContext } from 'react';

import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { UiContext } from '../../context';
import { Button } from '../../components';
import { AuthContext } from '../../../auth/context';
import styles from './sidebar.module.css';

export const Sidebar = () => {

  const { openSidebar, toggleSidebar } = useContext(UiContext);
  const { user } = useContext(AuthContext);
  

  return (
    <>
			<div className={`${styles.sidebar} ${ open && styles.open}`}> 
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src="https://res.cloudinary.com/dxffoyj6v/image/upload/v1701905804/proyecto-final-e-commerce/btnpjarzfditcerb1yu7.jpg" alt={user.name}/>
          </div>
          <h3>{user.name}</h3>
        </div>
        <div className={styles.options}>
          <Link to={"/order-history"}>
            <div className={styles.opt}>
              <p>Orders</p>
            </div>
          </Link>
        </div>
      </div>
      
      <div className={styles.close}>
        <Button icon={<FaXmark />} onClick={()=>toggleSidebar()} />      
      </div>

			{ openSidebar && <div className={styles.overlay} onClick={ () => toggleSidebar() } /> }			
    </>
  )
};