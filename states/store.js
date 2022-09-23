// import { createStore,combineReducers ,applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
// import {productReducer} from '../states/productDetailsState'
// import { productListReducer } from './productListState';

import { configureStore } from "@reduxjs/toolkit"
import logger from 'redux-logger'

import registerReducer from '../states/chargegreen/userRegisterState'
import loginReducer from '../states/chargegreen/userLoginState'
import productReducer from '../states/chargegreen/productState'
import announcementReducer from '../states/chargegreen/announcementState'

export default configureStore({
    reducer: {
        register:registerReducer,
        login:loginReducer,
        product:productReducer,
        announcement:announcementReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger)
});

// const rootReducer = combineReducers({
//   productReducer,
//   productListReducer,
// });

// export const configureStore = createStore(rootReducer, applyMiddleware(thunk));
