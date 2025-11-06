import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const fetchMaskPacksThunk = createAsyncThunk(
    'maskPacks/fetch',
    async (_, thunkAPI) => {
        const path = '/data/product/maskPack.json';
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

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const maskPacksSlice = createSlice({
    name: "maskPacks",
    initialState,
    reducers: {
        resetMaskPacks: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMaskPacksThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMaskPacksThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchMaskPacksThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default maskPacksSlice.reducer;
export const { resetMaskPacks } = maskPacksSlice.actions;