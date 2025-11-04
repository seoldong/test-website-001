import { createSlice } from "@reduxjs/toolkit";
import processBestProducts from "../../selectors/bestProductSelectors";

const initialState = [];

const bestMaskPackSlice = createSlice({
    name: "bestMaskPacks",
    initialState,
    reducers: {
        // 모든 상품
        getBestMaskPacks: (state, action) => {
            const { productData, topCount } = action.payload;
            return processBestProducts(productData, topCount)
        },
        resetBestMaskPacks: (state) => {
            return initialState;
        },
    }
});

export default bestMaskPackSlice.reducer;
export const {
    getBestMaskPacks,
    resetBestMaskPacks
} = bestMaskPackSlice.actions;