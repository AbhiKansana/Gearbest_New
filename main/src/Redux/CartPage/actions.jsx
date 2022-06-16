
import axios from 'axios'

export const actionTypes = {
    CART_PRODUCTS_REQUEST : "CART_PRODUCTS_REQUEST",
    CART_PRODUCTS_SUCCESS : "CART_PRODUCTS_SUCCESS",
    CART_PRODUCTS_FAILURE : "CART_PRODUCTS_FAILURE"
}





function cartProductsRequest(){
    return{
        type : actionTypes.CART_PRODUCTS_REQUEST
    }
}

export function cartProductsSuccess(data){
    return{
        type: actionTypes.CART_PRODUCTS_SUCCESS,
        payload : data
    }
}

function cartProductsFailure(){
    return{
        type : actionTypes.CART_PRODUCTS_FAILURE
    }
}




// export function fetchCartPageData(query){
//     console.log("query",query)
//     return  (dispatch) => {
//         dispatch(cartProductsRequest())
//         axios.get('http://localhost:7000/cartProducts',{
//             params : {...query}
//         })
//         .then(res=>dispatch(cartProductsSuccess(res.data)))
//         // .then(res=>console.log("data",res.data))
//         .catch(err=>dispatch(cartProductsFailure()))
//     }
// }