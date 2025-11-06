import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const shuffleArray = (array) => {
    let newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }

    return newArray;
};

// 
export const fetchRecommendedProductsThunk = createAsyncThunk(
    'recommendedProducts/fetch',
    async (_, thunkAPI) => {
        const path = '/data/product/recommendedProducts.json';
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const shuffledData = shuffleArray(data);
            return shuffledData; // 섞인 데이터를 payload로 반환
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