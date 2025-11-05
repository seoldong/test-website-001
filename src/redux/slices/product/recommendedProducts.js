import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecommendedProductsThunk = createAsyncThunk(
    'recommendedProducts/fetch',
    async (_, thunkAPI) => {
        const recommendedProductsPath = '/data/page/home/recommendedProducts.json';
        try {
            const response = await fetch(recommendedProductsPath);
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
const recommendedProductsSlice = createSlice({
    name: "recommendedProducts",
    initialState,
    reducers: {
        resetRecommendedProducts: (state) => {
            state.data = initialState.data;
            state.loading = initialState.loading;
            state.error = initialState.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendedProductsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecommendedProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchRecommendedProductsThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default recommendedProductsSlice.reducer;

export const { resetRecommendedProducts } = recommendedProductsSlice.actions;