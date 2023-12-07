export const orderReducer = ( state, action ) => {

   switch (action.type) {
      case 'add-order':
         return {
            ...state,
            orders: [...state.orders,action.payload]
          }
      case 'set-orders':
         return {
            ...state,
            orders: [...action.payload]
         }

       default:
          return state;
   }

}