import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import productsPageReducer from './ProductsPage/reducer';
import filterReducer from './Filter/reducer';

const rootReducer = combineReducers({
   productPage :  productsPageReducer,
   filterParams : filterReducer,
})

const store = createStore(rootReducer,
    composeWithDevTools(
        (applyMiddleware(thunk))
    )
)  

export default store