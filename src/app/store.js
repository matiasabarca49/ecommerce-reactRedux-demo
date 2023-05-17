import { configureStore } from '@reduxjs/toolkit'

//Reducers
import userReducer from '../reducers/user/userSlice'
import userCart from '../reducers/cart/cartSlice'
import userIsLogin from '../reducers/user/isLoginSlice'
 
export default configureStore({
    reducer: {
        user: userReducer,
        isLogin: userIsLogin,
        cart: userCart

    }
})