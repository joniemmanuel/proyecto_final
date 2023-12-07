import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartItem } from '../cart-item/CartItem';
import { CartContext } from '../../context';
import { EmptyCart } from '../empty-cart/EmptyCart';

import cartWidgetStyles from './cart-widget.module.css';


export const CartWidget = () => {
  
  const { items, toggleShowCartWidget } = useContext(CartContext);

  const navigate = useNavigate();
  const subTotal = items.reduce( (pre,curr) => pre + curr.price * curr.quantity, 0)

  const handleGoCartPage = () => {
    toggleShowCartWidget('close');
    navigate('/cart');
  }

  return (
    <div className={cartWidgetStyles.container}>
      <div className={cartWidgetStyles.box}>

        <div className={cartWidgetStyles.header}>
          <h3>Cart widget</h3>
        </div>

        <div className={cartWidgetStyles.content}>

          { items.length === 0
            ? ( <EmptyCart /> )
            : ( items.map( (item) => <CartItem key={item.name} item={item} border/> ) )
          }
          
        </div>

        <div className={cartWidgetStyles.footer}>
          <div>
            <p><span>Subtotal:</span> ${parseFloat(subTotal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>      
          </div>
          <button onClick={handleGoCartPage}>Ir a mi carrito</button>
        </div>

      </div>
    </div>
  )
}