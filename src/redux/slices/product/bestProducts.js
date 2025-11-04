import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bestProductsSlice = createSlice({
    name: "bestProducts",
    initialState,
    reducers: {
        getBestProducts: (state, action) => {
            return action.payload;
        },
        resetBestProducts: (state) => {
            return initialState;
        },
    }
});

export default bestProductsSlice.reducer;
export const {
    getBestProducts,
    resetBestProducts,
} = bestProductsSlice.actions;