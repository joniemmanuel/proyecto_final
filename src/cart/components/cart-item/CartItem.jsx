import { useContext, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context';
import { useCounter } from '../../../common';
import { CounterItem } from '../counter-item'

import cartItemStyles from './cart-item.module.css'

export const CartItem = ( {item, border} ) => {

  const {removeItem, addItemQuantity, removeItemQuantity} = useContext(CartContext)
  const {counter, increment, decrement, setCounter} = useCounter(item.quantity)

  useEffect(()=>{
    setCounter(item.quantity)
  },[item.quantity,setCounter]);

  const handleRemoveItem = (id) => {
    removeItem(id)
  };

  const handleIncrement = (max) => {
    addItemQuantity({...item})
    increment(max)
  };

  const handleDecrement = () => {
    removeItemQuantity({...item});
    decrement();
  };

  return (
    <div className={`${cartItemStyles.item} ${ border && cartItemStyles.border }`}>
        <div className={cartItemStyles['item-info']}>
          <Link to={`/item/${item.id}`}>
            <div className={cartItemStyles.img}>
                <img src={item.img} alt={item.name} />
            </div>
          </Link>
          <div className={cartItemStyles.details}>
              <p>{item.name}</p>
              <p><span>cantidad:</span> {item.quantity}</p>
              <CounterItem 
                counter={counter} 
                decrement={handleDecrement} 
                increment={handleIncrement} 
                max={item.inStock} />
          </div>
        </div>
        <div className={cartItemStyles.actions}>
          <b>${ parseFloat((item.price * item.quantity)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,') }</b>
          <button 
            className={cartItemStyles.remove} 
            onClick={ () => handleRemoveItem(item.id) }
          >
            remove
          </button>
        </div>
    </div>
  )
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    border: PropTypes.bool
}