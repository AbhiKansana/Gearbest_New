
import { actionTypes } from "./actions";

const init = {
    isLoading : false,
    isError   : false,
    cartArr      : []
}


export default function cartReducer (state = init,action){
    switch(action.type){
        case actionTypes.CART_PRODUCTS_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case actionTypes.CART_PRODUCTS_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                cartArr : action.payload
            }
        case actionTypes.CART_PRODUCTS_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        default :
        return state
    }
}