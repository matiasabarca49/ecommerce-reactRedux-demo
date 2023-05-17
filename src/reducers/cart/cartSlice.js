import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: "",
    productList: [],
    totalCount: 0,
    totalPrice: 0
}


export const cartSlice = createSlice ({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.id = toString(date.now())
            state.productList= [...state.productList, action.payload]
            state.totalCount += 1,
            state.totalPrice= action.productList.reduce( (producto, acumulador) => acumulador + producto.price,0)
        }
    }})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer