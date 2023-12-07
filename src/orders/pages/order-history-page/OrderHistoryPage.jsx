import { useContext, useEffect } from 'react';
import { OrderContext } from '../../context';
import styles from './order-history-page.module.css';
import { getOrderHistory } from '../../helpers';

export const OrderHistoryPage = () => {
  
  const { orders, setOrders } = useContext(OrderContext);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    getOrderHistory(user).then( orders => setOrders(orders))
  },[])


  return (
    <div className={styles.container}>
      <h1>OrderHistoryPage</h1>

        {
          orders.map( e => (
            <div key={e.total} className={styles.order}>
              <p>Total: {e.total}</p>
              <p>products: {e.products.length}</p>
            </div>
          ))
        }

    </div>
  )
}
