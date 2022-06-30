
import axios from 'axios'

export const actionTypes = {
    WISHLIST_PRODUCTS_REQUEST : "WISHLIST_PRODUCTS_REQUEST",
    WISHLIST_PRODUCTS_SUCCESS : "WISHLIST_PRODUCTS_SUCCESS",
    WISHLIST_PRODUCTS_FAILURE : "WISHLIST_PRODUCTS_FAILURE"
}





function wishListProductsRequest(){
    return{
        type : actionTypes.WISHLIST_PRODUCTS_REQUEST
    }
}

function wishListProductsSucess(arr){
    return{
        type : actionTypes.WISHLIST_PRODUCTS_SUCCESS,
        payload: arr
    }
}


function wishListProductsFailure(){
    return{
        type : actionTypes.WISHLIST_PRODUCTS_FAILURE
    }
}


export function mainWishListProductsSuccess(){
    return (dispatch)=>{
        dispatch(wishListProductsRequest())
        axios.get('https://json-server-learner.herokuapp.com/wishList')
        .then(res=>{
            dispatch(wishListProductsSucess(res.data))
        })
        .catch(err=>{
            console.log("errWishListReducer",err)
            dispatch(wishListProductsFailure)
        })
    }
}

export function deleteWishListItem(lid){
    return (dispatch)=>{
    axios.delete(`https://json-server-learner.herokuapp.com/wishList/${lid}`)
    .then(res=>{
        dispatch(mainWishListProductsSuccess())
        
    })
    .catch(err=>{
        console.log("error",err)
    })

  }
}

