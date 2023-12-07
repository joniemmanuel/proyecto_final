import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { CartContext } from '../../../cart';
import { Loader, useCounter } from '../../../common';
import { getProductBySlug } from '../../helpers';

import styles from './product.details.module.css'


export function ProductDetailsPage () {

  const { counter, decrement, increment } = useCounter();
  const { addItem } = useContext( CartContext );
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);  
  

  useEffect(()=>{
    getProductBySlug(params.slug).then( p => setProduct(p) )
  },[params.slug])


  const addProductCart = (item) => {

    if(counter <= 0) {
      alert('select a quantity')
      return;
    }

    item.quantity = counter;
    addItem(item);

  };

  const handleIncrement = (max) => {
    increment(max)
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        { !product  
          ? ( <div className={styles['box-loader']}><Loader /></div> )
          : ( <>
            <div className={styles.image}>
              <img src={product?.img} alt={product?.name} />
            </div>
            <div className={styles.info}>
              <p>{product?.name}</p>
              <p>${parseFloat(product?.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
              <p className={styles.description}>{product?.description}</p>
            </div>
            <div className={styles.actions}>
              <div>
                <div className={styles.counter}>
                  <button onClick={ decrement } >-</button>
                  <div><span>{counter}</span></div>
                  <button onClick={ () => handleIncrement(product?.inStock) } >+</button>
                </div>
                <button className={styles['add-cart']} onClick={ () => addProductCart(product)} >Agregar al carrito</button>
              </div>
              <button onClick={()=> navigate(-1)} className={styles['btn-back']}>Volver</button>
            </div>
            <div className={styles.footer}>
              <b>{product?.inStock} unidades disponibles</b>
            </div>
          </> )
        }

      </div>
    </div>
  )
}
