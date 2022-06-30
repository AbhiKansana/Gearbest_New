
const init = {
    sort : null,
    order : null,
    page : 1,
    brand:[]
}

export default function filterReducer(state=init,action){
    switch(action.type){
        case "SORT" :
            return{
                ...state,
                sort : action.payload
            }
        case "ORDER" :
                return{
                    ...state,
                    order : action.payload
                }
        case "PAGE_NO" :
            return{
                ...state,
                page : state.page+action.payload
            }
        case "BRAND" :
            return{
                ...state,
                brand : action.payload
            }
        default :
        return state
    }
}