import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import productItemStyles from './product-item.module.css';


export const ProductItem = ({product}) => {

  return (
    <div className={productItemStyles['product-card']}>
        <div className={productItemStyles.header}>
            <p>{product.name}</p>
        </div>
        <div className={productItemStyles.img}>
            <img src={product.img} alt={product.name} />
        </div>
        <div className={productItemStyles.info}>
            <p>{product.description}</p>
        </div>
        <div className={productItemStyles.action}>
            <Link to={`/item/${product.slug}`}>
                <button>Ver detalle del Producto</button>
            </Link>
        </div>
        <div className={productItemStyles.footer}>
            <p>Stock disponible: {product.inStock}</p>
        </div>
    </div>
  )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}