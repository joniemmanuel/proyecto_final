import { useReducer, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';


import { cartReducer } from '../context';



export const useCartProvider = (initialState) => {

  const [state, dispatch] = useReducer( cartReducer , initialState );
  const [showCartWidget, setShowCartWidget] = useState(false);
  const navigate = useNavigate();

  const toggleShowCartWidget = ( action = '' ) => {

      (action === 'open')
      ? setShowCartWidget(true)
      : action === 'close'
          ? setShowCartWidget(false)
          : setShowCartWidget(!showCartWidget);
  };

  const addItem = (item) => {

      const itemExist = state.items.find( i => i.id === item.id );

      if(!itemExist) {
          item.quantity = item.quantity ? item.quantity : 1;
          dispatch({type: 'add-item', payload: {...item}});
          toast.success(`"${item.name}" added to cart!`);
          return;
      } else {
          

          if((itemExist.quantity + item.quantity) > item.inStock){
              Swal.fire({
                  icon: 'warning',
                  title: 'Cantidad máxima alcanzada',
                  text: 'No puedes agregar más unidades de este producto. Has alcanzado la cantidad máxima permitida.',
                  showCancelButton: true,
                  confirmButtonText: 'Aceptar',
                  cancelButtonText: 'Revisar Carrito',
                  customClass: {
                      confirmButton: 'swal-button',
                      cancelButton: 'swal-button swal-button--green',
                      popup: 'swal-custom-border',
                      container: 'swal-custom-container'
                  },
              }).then((result) => {
                 if (result.dismiss === Swal.DismissReason.cancel) {
                      toggleShowCartWidget('close')
                      navigate('/cart')
                  }
              })
              return;
          }

          const updatedItems = state.items.map( i => {
              if( i.id === item.id ){
                  return {
                      ...i,
                      quantity: i.quantity + item.quantity
                  }
              }
              return i
          });
          dispatch({type: 'update-item-quantity', payload: updatedItems});
          toast.success( item.quantity > 1
            ? `${item.quantity} units of the item "${item.name}" were added to the cart!`
            : `1 unit of the item "${item.name}" was added to the cart!`
          );
          //* aqui
      }

  };

  const removeItem = (id) => {
    const item = state.items.find( i => i.id === id );
    const updatedItems = state.items.filter( i => i.id !== id );
    dispatch({type: 'remove-item', payload: updatedItems })
    toast.success(`"${item.name}" removed from cart`)
  }

  const addItemQuantity = (item) => {
      const updatedItems = state.items.map( i => {
          if( i.id === item.id ){
              return {
                  ...i,
                  quantity: i.quantity + 1
              }
          }
          return i
      });
      dispatch({type: 'update-item-quantity', payload: updatedItems});
  };

  const removeItemQuantity = (item) => {
      const newItems = state.items.map( i => {
          if( i.id === item.id ){
              return {
                  ...i,
                  quantity: Math.max( i.quantity - 1, 1)
              }
          }
          return i
      });
      dispatch({type: 'update-item-quantity', payload: newItems});
  }

  const setCart = (value = []) => {
    dispatch({ type: "set-cart", payload: [...value] });
    localStorage.setItem('cart', JSON.stringify(value))
  }

  return {
    state,
    addItem,
    removeItem,
    setCart,
    showCartWidget,
    toggleShowCartWidget,
    addItemQuantity,
    removeItemQuantity
  }
}
