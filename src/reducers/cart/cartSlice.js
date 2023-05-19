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
            const productFound = state.productList.find(  product => product.id === action.payload.id)
            if (productFound){
                productFound.quantity++
            } 
            else{
                state.productList= [...state.productList, action.payload]
            }
            state.id = Date.now().toString()
            state.totalCount += 1,
            state.totalPrice= state.productList.reduce( (acumulador, producto) => acumulador + producto.price * producto.quantity,0)
        },
        deleteProduct: (state, action)=>{
            state.productList = state.productList.filter( product => product.id !== action .payload.id)
            state.totalCount -= action.payload.quantity,
            state.totalPrice = state.productList.reduce( (acumulador, producto) => acumulador + producto.price * producto.quantity,0)
        }
    }})

export const { addProduct, deleteProduct } = cartSlice.actions
export default cartSlice.reducer