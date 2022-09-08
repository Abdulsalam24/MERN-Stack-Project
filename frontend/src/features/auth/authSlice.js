import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const register = createAsyncThunk('auth/register', async (user, thunkApi) => {
    try {
        return await authService.register
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkApi.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    console.log(user , 'this is login')
})


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
})

export default authSlice.reducer