import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketsService";

const initialState = {
    ticket: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const createTicket = createAsyncThunk('ticket/create', async (ticketData, thunkAPI) => {
    try {
        return await ticketService.createTicket(ticketData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const ticketSlice = createSlice({
    name: "ticket",
    reducers: {
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
                state.user = action.payload
            })
            .addCase(createTicket.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
                state.user = null
            })

    }


})


export default ticketSlice.reducer

