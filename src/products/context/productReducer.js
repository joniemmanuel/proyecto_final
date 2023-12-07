export const productReducer = ( state, action ) => {

   switch (action.type) {
      case 'set-products':
         return {
            ...state,
            products: [...action.payload]
          }

       default:
          return state;
   }

}