import {configureStore} from '@reduxjs/toolkit'
import {restaurantSliceReducer} from './slices/restaurantSlice';
import {cartReducer} from './slices/cartSlice';


const store = configureStore({
    reducer:{
        rest: restaurantSliceReducer,
        cart: cartReducer
    }
})


export default store;