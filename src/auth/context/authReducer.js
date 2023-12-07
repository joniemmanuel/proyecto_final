export const AuthReducer = ( state, action ) => {

   switch (action.type) {
      
      case 'setUser':
        return {
          ...state,
          user: action.payload
        }
      
      case 'setAuthenticated' :
        return {
          ...state,
          isAuthenticated: action.payload
        }    

      default:
        return state;
   }

}