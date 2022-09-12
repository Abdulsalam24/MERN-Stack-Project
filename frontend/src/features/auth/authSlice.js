import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'


const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            console.log(error, user, 'errror')
            return thunkAPI.rejectWithValue(message)
        }
    })

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    console.log(user, 'this is login')
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase('auth/register/pending', (state) => {
                state.isError = false
                state.isLoading = true
            })
            .addCase('auth/register/fulfilled', (state) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.message = ''
            })
            .addCase('auth/register/rejected', (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
