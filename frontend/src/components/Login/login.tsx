import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedin: false,
}
const Login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedin = true
        },
        logout: (state) => {
            state.isLoggedin = false
        },
    },
})
export const { login, logout } = Login.actions
export default Login.reducer
