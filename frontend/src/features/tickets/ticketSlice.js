import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketsService";

const initialState = {
    tickets: [],
    ticket: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const createTicket = createAsyncThunk('ticket/create', async (ticketData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await ticketService.createTicket(ticketData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const ticketSlice = createSlice({
    name: "ticket",
    reducers: {
        reset: (state) => {
            state = initialState
        }
    },
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createTicket.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ticket = action.payload
            })
            .addCase(createTicket.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
                state.ticket = {}
            })

            
    }


})

export const { reset } = ticketSlice.actions

export default ticketSlice.reducer