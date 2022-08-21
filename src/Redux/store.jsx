import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

// reducers
import productsPageReducer from './ProductsPage/reducer';
import filterReducer from './Filter/reducer';
import cartReducer from './CartPage/reducer';
import wishListReducer from './WishList/reducer';


const rootReducer = combineReducers({
   productPage :  productsPageReducer,
   filterParams : filterReducer,
   cartPage : cartReducer,
   wishList : wishListReducer
})

const store = createStore(rootReducer,
    composeWithDevTools(
        (applyMiddleware(thunk))
    )
)  

export default store