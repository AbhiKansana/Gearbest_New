
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

function cartProductsSucess(arr){
    return{
        type : actionTypes.CART_PRODUCTS_SUCCESS,
        payload: arr
    }
}


function cartProductsFailure(){
    return{
        type : actionTypes.CART_PRODUCTS_FAILURE
    }
}


export function mainCartProductsSuccess(){
    return (dispatch)=>{
        dispatch(cartProductsRequest())
        axios.get('http://localhost:7000/cart')
        .then(res=>{
            dispatch(cartProductsSucess(res.data))
        })
        .catch(err=>{
            console.log("errCartReducer",err)
            dispatch(cartProductsFailure)
        })
    }
}

export function deleteCartItem(lid){
    return (dispatch)=>{
    axios.delete(`http://localhost:7000/cart/${lid}`)
    .then(res=>{
        dispatch(mainCartProductsSuccess())
        
    })
    .catch(err=>{
        console.log("error",err)
    })

  }
}


export function updateCartItem(lid,q,num){
    return(dispatch)=>{
        axios.patch(`http://localhost:7000/cart/${lid}`,{
            "qnty" : q+num
        })
        .then(res=>{
            dispatch(mainCartProductsSuccess())
        })
        .catch(err=>{
            console.log("error in patch")
        })
    }
}