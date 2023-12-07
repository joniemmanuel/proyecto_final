import PropTypes from 'prop-types';

import { ProductContext } from './';
import { useProductProvider } from '../hooks';

const PRODUCT_INITIAL_STATE = {
    products: []
};

export const ProductProvider = ({ children }) => {

    const {
        products,
        setProducts,
    } = useProductProvider(PRODUCT_INITIAL_STATE);

    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
        }}>
            { children }
        </ProductContext.Provider>
    )
};

ProductProvider.propTypes = {
    children: PropTypes.element
};