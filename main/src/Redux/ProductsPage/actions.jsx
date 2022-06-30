
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


export default function productsPageFetch(param){
    return (dispatch) =>{
        dispatch(productsPageRequest())
        // axios.get(`http://localhost:8000/products?_page=${page}&_limit=9&_sort=${sort}&_order=${order}`)
        axios.get(`https://json-server-learner.herokuapp.com/products`,{
            params : {
                    _limit:9,
                    _sort : param.sort,
                    _order: param.order,
                    _page : param.page,
                    brand : param.brand
               

            }
        })
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