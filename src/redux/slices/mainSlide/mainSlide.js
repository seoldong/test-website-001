import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const fetchMainSlideThunk = createAsyncThunk(
    'mainSlide/fetch',
    async (_, thunkAPI) => {
        const mainSlidePath = '/data/page/home/slide.json';
        try {
            const response = await fetch(mainSlidePath);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetching data failed", error);
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch main slide.');
        }
    }
)

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const mainSlideSlice = createSlice({
    name: "mainSlide",
    initialState,
    reducers: {
        resetMainSlide: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMainSlideThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMainSlideThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchMainSlideThunk.rejected, (state) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || 'Unknown error occurred.';
            })
    }
});

export default mainSlideSlice.reducer;
export const { resetMainSlide } = mainSlideSlice.actions;