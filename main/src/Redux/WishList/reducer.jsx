
import { actionTypes } from "./actions";

const init = {
    isLoading : false,
    isError   : false,
    wishListArr      : []
}


export default function wishListReducer (state = init,action){
    switch(action.type){
        case actionTypes.WISHLIST_PRODUCTS_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case actionTypes.WISHLIST_PRODUCTS_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                wishListArr : action.payload
            }
        case actionTypes.WISHLIST_PRODUCTS_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        default :
        return state
    }
}