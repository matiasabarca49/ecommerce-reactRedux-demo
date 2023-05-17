import { createSlice } from '@reduxjs/toolkit'

const initialState = {isLogin: false}


export const isLoginSlice = createSlice ({
    name: 'isLogin',
    initialState: initialState,
    reducers: {
        setLogin: (state) => {
            state.isLogin = true
        },
        unsetLogin: (state) =>{
            state.isLogin = false
        }
}})

export const { setLogin, unsetLogin } = isLoginSlice.actions
export default isLoginSlice.reducer