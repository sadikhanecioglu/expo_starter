import { createStore,combineReducers ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {productReducer} from '../states/productDetailsState'
import { productListReducer } from './productListState';

const rootReducer = combineReducers({
    productReducer,
    productListReducer
})

export const configureStore =  createStore(rootReducer,applyMiddleware(thunk));

