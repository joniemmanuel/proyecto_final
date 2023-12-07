
import PropTypes from 'prop-types';

import { OrderContext } from './';
import { useOrderProvider } from '../hooks/useOrderProvider';


const ORDER_INITIAL_STATE = {
    orders: [],
}

export const OrderProvider = ({ children }) => {

    const { 
        orders,
        addOrder,
        setOrders
    } = useOrderProvider(ORDER_INITIAL_STATE);

    return (
        <OrderContext.Provider value={{
            orders,
            addOrder,
            setOrders
        }}>
            { children }
        </OrderContext.Provider>
    )
};


OrderProvider.propTypes = {
    children: PropTypes.element.isRequired
}