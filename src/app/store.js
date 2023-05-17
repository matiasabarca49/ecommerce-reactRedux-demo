import { configureStore } from '@reduxjs/toolkit'

//Reducers
import userReducer from '../reducers/user/userSlice'
import userCart from '../reducers/cart/cartSlice'
 
export default configureStore({
    reducer: {
        user: userReducer,
        cart: userCart
    }
})