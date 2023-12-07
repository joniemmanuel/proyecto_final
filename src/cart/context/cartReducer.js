export const cartReducer = ( state, action ) => {

  switch (action.type) {
    case 'add-item':
        localStorage.setItem('cart',JSON.stringify( [...state.items,action.payload]))
        return {
          ...state,
          items: [...state.items, action.payload],
        }
    case 'remove-item':
      localStorage.setItem('cart',JSON.stringify(action.payload))
      return {
        ...state,
        items: action.payload,
      }
    
    case 'update-item-quantity':
      localStorage.setItem('cart',JSON.stringify(action.payload))
      return {
        ...state,
        items: action.payload,
      }

    case 'set-cart':
      return {
        ...state,
        items: action.payload
      }

    default:
      return state;
  }

}