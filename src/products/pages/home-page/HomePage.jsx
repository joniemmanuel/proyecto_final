import { useContext } from 'react';

import { Button, Loader } from '../../../common';
import { ProductList } from '../../components';
import { ProductContext } from '../../context';

import styles from './home-page.module.css';

export const HomePage = () => {

  const {products} = useContext(ProductContext)

  return (
    <div className={styles.container}>

      { products.length <= 0
        ? ( <div className={styles['box-loader']}><Loader/></div>)
        : (
          <>
            <h2 className="title">Desde aquí podrás ver un listado de todas las categorías</h2>
            <Button mb={30} label='Ver artículos sin stock disponibles'/>
            <ProductList products={products}/>
          </>
        )
      }
      
     

    </div>
  )
}
