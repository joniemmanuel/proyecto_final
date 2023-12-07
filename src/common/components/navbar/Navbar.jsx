import { useContext, useEffect, useState } from 'react';


import { NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


import { Button } from '../button';
import { CartContext, CartWidget } from '../../../cart'
import { Sidebar } from '../sidebar';
import { UiContext } from '../../context';
import { AuthContext } from '../../../auth/context';
import { OrderContext } from '../../../orders/context';
import { getCategories } from '../../helpers';


import navbarStyles from './navbar.module.css';



export const Navbar = () => {
  
  const { showCartWidget, toggleShowCartWidget, items } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const { setOrders } = useContext(OrderContext);
  const { openSidebar, toggleSidebar } = useContext(UiContext);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories()
    .then( cats => setCategories(cats) )
  },[])

  const itemsNum = items.length <= 0 ? undefined : `${items.length}`;

  const handleLoginOrLogout = () => {
    if(user){
      logout();
      setOrders([])
      return;
    }
    navigate('/auth/login')
  }

  return (
    <>
      <div className={navbarStyles.container}>
          <div className={navbarStyles.logo}>
            <NavLink to={'/'}>
              <img src="/react.svg" alt="logo" />
              <b>Compras Z</b>
            </NavLink>
          </div>

          <nav className={navbarStyles.nav}>
            {categories.map(({description,id,key}) =>  (
              <NavLink onClick={ () => toggleShowCartWidget('close')} key={id} to={`/category/${key}`} className={({isActive}) => isActive ? navbarStyles['link-active'] : '' }>{description}</NavLink>
            ))}
            <NavLink onClick={ () => toggleShowCartWidget('close')} key={"cart"} to={`/cart`} className={({isActive}) => isActive ? navbarStyles['link-active'] : '' }>Cart</NavLink>
          </nav>

          <div className={navbarStyles.actions}>
            <div className={navbarStyles.cart}>
              <Button icon={<FaShoppingCart />} onClick={ () => toggleShowCartWidget('toggle')}/>
              {itemsNum && <span>{itemsNum}</span> }
            </div>
            <div className={navbarStyles.login}>
              <Button label={ user ? 'Logout' : 'Login' } onClick={handleLoginOrLogout}/>
            </div>
            {user && (
              <div className={navbarStyles.bars}>
                <Button icon={<FaBars />} onClick={()=> toggleSidebar() }/>
              </div>
            )}
          </div>
      </div>
      { showCartWidget && <CartWidget /> }
      { openSidebar &&  <Sidebar/>} 
    </>
  )
};