import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBestReviewsThunk = createAsyncThunk(
    'bestReviews/fetch',
    async (_, thunkAPI) => {
        const bestReviewsPath = '/data/review/review-best.json';
        try {
            const response = await fetch(bestReviewsPath);
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

const initialState = {
    data: [],
    loading: false,
    error: null,
};
// 
const bestReviewsSlice = createSlice({
    name: "bestReviews",
    initialState,
    reducers: {
        resetbestReviews: (state) => {
            state.data = initialState.data;
            state.loading = initialState.loading;
            state.error = initialState.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestReviewsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBestReviewsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchBestReviewsThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export const { resetbestReviews } = bestReviewsSlice.actions;
export default bestReviewsSlice.reducer;