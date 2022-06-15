import axios from 'axios'


export const actionTypes = {
    PRODUCTS_PAGE_REQUEST : "PRODUCTS_PAGE_REQUEST",
    PRODUCTS_PAGE_SUCCESS : "PRODUCTS_PAGE_SUCCESS",
    PRODUCTS_PAGE_FAILURE : "PRODUCTS_PAGE_FAILURE"
}


function productsPageRequest(){
    return{
        type : actionTypes.PRODUCTS_PAGE_REQUEST
    }
}

function productsPageSuccess(data){
    return{
        type: actionTypes.PRODUCTS_PAGE_SUCCESS,
        payload : data
    }
}

function productsPageFailure(){
    return{
        type : actionTypes.PRODUCTS_PAGE_FAILURE
    }
}

export default function productsPageFetch(){
    return (dispatch) =>{
        dispatch(productsPageRequest())
        axios.get('http://localhost:8000/products')
        .then(res=>{
            // console.log("res",res.data)
            dispatch(productsPageSuccess(res.data))
        })
        .catch(err=>{
            // console.log("err",err)
            dispatch(productsPageFailure())
        })
    }
}