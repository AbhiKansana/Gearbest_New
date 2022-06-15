import { actionTypes } from "./actions";


const init={
    isLoading : false,
    isError   : false,
    data      : []
}


export default function productsPageReducer(state=init,action){
    switch(action.type){
        case actionTypes.PRODUCTS_PAGE_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case actionTypes.PRODUCTS_PAGE_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                data : action.payload
            }
        case actionTypes.PRODUCTS_PAGE_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        default :
        return state

        }  
}