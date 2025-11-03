import { createSlice } from "@reduxjs/toolkit";
import processBestProducts from "../../selectors/bestProductSelectors";

const initialState = [];

const bestDrinksSlice = createSlice({
    name: "bestDrinks",
    initialState,
    reducers: {
        // 모든 상품
        getBestDrinks: (state, action) => {
            const {productData, topCount} = action.payload;
            return processBestProducts(productData, topCount)
        },
        resetBestDrinks: (state) => {
            return initialState;
        },
    }
});

export default bestDrinksSlice.reducer;
export const {
    getBestDrinks,
} = bestDrinksSlice.actions;