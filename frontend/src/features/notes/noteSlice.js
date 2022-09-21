import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "./noteService";


const initialState = {
    notes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getNotes = createAsyncThunk('note/getNote', async (ticketId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await noteService.getNote(ticketId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getNotes.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.notes = action.payload
            })
            .addCase(getNotes.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
    }
})


export const { reset } = noteSlice.actions
export default noteSlice.reducer