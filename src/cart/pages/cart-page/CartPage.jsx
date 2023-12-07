import { useContext } from "react";

import Swal from "sweetalert2";

import { CartContext } from '../../context';
import { CartItem, EmptyCart } from '../../components';
import { AuthContext } from "../../../auth/context";
import { newOrder } from "../../../orders/helpers";
import { UiContext } from "../../../common";

import cartPageStyles from './cart-page.module.css';
import { OrderContext } from "../../../orders/context";

export const CartPage = () => {

  const {items, setCart} = useContext(CartContext);
  const {user} = useContext(AuthContext);
  const {toggleOpenModal} = useContext(UiContext);
  const {addOrder} = useContext(OrderContext);
  const total = items.reduce( (pre,curr) => pre + curr.price * curr.quantity, 0)

  const handleBuy = async () => {

    if(items.length <= 0){
      Swal.fire({
        title: 'No hay productos',
        icon: 'warning'
      })
      return;
    }

    if(!user){
      toggleOpenModal()
      return;
    }

    const order = {
      userId: user.uid,
      products: items,
      total: total,
    }

    const orderToSave = await newOrder(order);
    if(!orderToSave) return;
    addOrder(orderToSave)
    setCart([])
  };

  return (
    <div className={cartPageStyles.container}>
      <div className={cartPageStyles['items-cart']}>
        
        { items.length <= 0 
          ? ( <EmptyCart /> )
          : (items.map( item => <CartItem key={item.id} item={item} border /> ))
        }

      </div>
      <div className={cartPageStyles.summary}>
          <div className={cartPageStyles['card-summary']}>
            <h3>Resumen de la orden</h3>
            <div className={cartPageStyles['card-summary-details']}>
              <p>Productos ({items.length})</p>
              <p><span>Total:</span>${parseFloat(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
            </div>
            <button className={cartPageStyles['btn-next']} onClick={handleBuy} >
              <span>Continuar compra</span>
            </button>
          </div>
      </div>
      
    </div>
  )
}