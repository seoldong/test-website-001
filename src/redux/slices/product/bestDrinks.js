import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const fetchBestDrinksThunk = createAsyncThunk(
    'bestDrinks/fetch',
    async (_, thunkAPI) => {
        const path = '/data/product/bestDrinks.json';
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
const bestDrinksSlice = createSlice({
    name: "bestDrinks",
    initialState,
    reducers: {
        resetBestDrinks: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestDrinksThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBestDrinksThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchBestDrinksThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default bestDrinksSlice.reducer;
export const { resetBestDrinks } = bestDrinksSlice.actions;