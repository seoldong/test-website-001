import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const fetchDrinkReviewsThunk = createAsyncThunk(
    'drinkReviews/fetch',
    async (_, thunkAPI) => {
        const path = '/data/review/review-drink.json';
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetching data failed", error);
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch drink reviews products.');
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
const drinkReviewsSlice = createSlice({
    name: "drinkReviews",
    initialState,
    reducers: {
        resetDrinkReviews: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDrinkReviewsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDrinkReviewsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchDrinkReviewsThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default drinkReviewsSlice.reducer;
export const {
    resetDrinkReviews,
} = drinkReviewsSlice.actions;