import { useReducer } from "react";
import { orderReducer } from "../context";

export const useOrderProvider = (initialState) => {
  
  const [state, dispatch] = useReducer( orderReducer ,initialState );

  const addOrder = ( order ) => {
    dispatch({type: 'add-order', payload: order })
  }

  const setOrders = (value) => {
    dispatch({type: 'set-orders', payload: value})
  }

  return {
    ...state,
    addOrder,
    setOrders
  }
}
