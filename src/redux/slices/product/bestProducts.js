import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// 

export const fetchBestProductsThunk = createAsyncThunk(
    'bestProducts/fetch',
    async (_, thunkAPI) => {
        const path = '/data/product/bestProducts.json';
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
)

// 
const initialState = {
    data: [],
    loading: false,
    error: null,
};

// 
const bestProductsSlice = createSlice({
    name: "bestProducts",
    initialState,
    reducers: {
        resetBestProducts: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestProductsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBestProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchBestProductsThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default bestProductsSlice.reducer;
export const { resetBestProducts } = bestProductsSlice.actions;