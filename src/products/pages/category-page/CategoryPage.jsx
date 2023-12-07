import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Loader } from '../../../common';
import { ProductList } from '../../components';
import { getProductsByCategoryKey } from '../../helpers';

import styles from './category-page.module.css';


export const CategoryPage = () => {

  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(()=>{
    setProducts([])
    getProductsByCategoryKey(params.key).then( prods => setProducts(prods) )
  },[params.key])

  return (
    <div className={styles.container}>
      
      {
        products.length <= 0
        ? ( <div className={styles['box-loader']}><Loader /></div>  )
        : (
          <>
            <h2 className="title">Desde aquí podrás ver un listado de la categoría de {params.key}</h2>
            <Button mb={30} label='Ver artículos sin stock disponibles'/>
            <ProductList products={products}/>          
          </>
        )
      }


    </div>
  )
}
