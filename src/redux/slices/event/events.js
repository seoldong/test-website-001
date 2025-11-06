import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const fetchEventsThunk = createAsyncThunk(
    'events/fetch',
    async (_, thunkAPI) => {
        const path = '/data/page/event/events.json';
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetching data failed", error);
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch recommended products.');
        }
    }
);

// 
const initialState = {
    data: [],
    loading: false,
    error: null,
};

//
const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        resetEvents: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEventsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchEventsThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default eventsSlice.reducer;
export const { resetEvents } = eventsSlice.actions;