import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const fetchMaskPackReviewsThunk = createAsyncThunk(
    'maskPackReviews/fetch',
    async (_, thunkAPI) => {
        const path = '/data/review/review-maskPack.json';
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetching data failed", error);
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch maskPack reviews products.');
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
const maskPackRivewReviewsSlice = createSlice({
    name: "maskPackReviews",
    initialState,
    reducers: {
        resetMaskPackReviews: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMaskPackReviewsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMaskPackReviewsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchMaskPackReviewsThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default maskPackRivewReviewsSlice.reducer;
export const {
    resetMaskPackReviews,
} = maskPackRivewReviewsSlice.actions;