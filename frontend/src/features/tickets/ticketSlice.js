import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

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

export const getTickets = createAsyncThunk('ticket/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await ticketService.getTickets(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getTicket = createAsyncThunk('ticket/getTicket', async (ticketId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await ticketService.getTicket(ticketId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const closeTicket = createAsyncThunk('ticket/close', async (ticketId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await ticketService.closeTicket(ticketId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteTicket = createAsyncThunk('ticket/delete', async (ticketId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await ticketService.deleteTicket(ticketId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const updateTicket = createAsyncThunk('ticket/update', async ({ ticketId, description }, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await ticketService.updateTicket(ticketId, description, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTicket.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createTicket.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })

            //get request
            .addCase(getTickets.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTickets.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tickets = action.payload
            })
            .addCase(getTickets.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })

            //get single ticket
            .addCase(getTicket.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ticket = action.payload
            })
            .addCase(getTicket.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })

            //closeticket
            .addCase(closeTicket.pending, (state) => {
                state.isLoading = true
            })
            .addCase(closeTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ticket = action.payload
                state.tickets.map((ticket) => ticket._id === action.payload._id ? ticket.status = "closed" : ticket)
            })
            .addCase(closeTicket.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })




            //delete ticket
            .addCase(deleteTicket.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ticket = null
                state.tickets.filter((ticket) => ticket.id !== action.payload.id)
            })
            .addCase(deleteTicket.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })


            // updateTicket
            .addCase(updateTicket.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ticket = action.payload
            })
            .addCase(updateTicket.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
    }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer