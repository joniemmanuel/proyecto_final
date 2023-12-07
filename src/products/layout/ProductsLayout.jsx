import { useContext } from 'react';
import { Outlet } from 'react-router-dom';


import { LoginForm, Modal, Navbar, UiContext } from '../../common';
import { AuthContext } from '../../auth/context';


import productsLayoutStyles from './products-layout.module.css';


export const ProductsLayout = () => {

  const { openModal, toggleOpenModal } = useContext(UiContext);
  const { login } = useContext(AuthContext);

  const handleSubmit = async(values) => {
    const trimmedValues = Object.keys(values).reduce((acc, key) => {
      acc[key] = typeof values[key] === 'string' ? values[key].trim() : values[key];
      return acc;
    }, {});
    const loged = await login(trimmedValues);
    if(loged){
      toggleOpenModal();
    }
  }

  return (
    <>
      <Navbar/>
      <div className={productsLayoutStyles['container-children']}>
        <Outlet />
      </div>
      { openModal && (
        <Modal>
          <LoginForm onSubmit={handleSubmit}/>
        </Modal>
      )}
    </>
  )
};