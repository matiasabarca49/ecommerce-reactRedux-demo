import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "Juan(Usuario por defecto)",
    email: "Juan@correo.com",
    token: "1234"
}


export const userSlice = createSlice ({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.email= action.payload.email
            state.token = action.payload.token},
        unsetUser: (state) =>{
            state.name = initialState.name,
            state.email= initialState.email,
            state.token = initialState.token}
        }
})

export const { setUser, unsetUser } = userSlice.actions
export default userSlice.reducer