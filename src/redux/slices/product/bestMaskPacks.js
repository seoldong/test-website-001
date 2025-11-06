import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const fetchBestMaskPacksThunk = createAsyncThunk(
    'bestMaskPacks/fetch',
    async (_, thunkAPI) => {
        const path = '/data/product/bestMaskPacks.json';
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
const bestMaskPackSlice = createSlice({
    name: "bestMaskPacks",
    initialState,
    reducers: {
        resetBestMaskPacks: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestMaskPacksThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBestMaskPacksThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchBestMaskPacksThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default bestMaskPackSlice.reducer;
export const { resetBestMaskPacks } = bestMaskPackSlice.actions;