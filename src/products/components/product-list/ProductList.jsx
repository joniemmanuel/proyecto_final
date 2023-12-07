import PropTypes from 'prop-types';

import { ProductItem } from '../product-item';

import productListStyles from './product-list.module.css';


export const ProductList = ( {products} ) => {
  return (
    <div className={productListStyles.container}>
      {products.map( p => (
        <ProductItem key={p.name} product={p}/>
      ))}
    </div>
  )
}


ProductList.propTypes = {
  products: PropTypes.array.isRequired
}