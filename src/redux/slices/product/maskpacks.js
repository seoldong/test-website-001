import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const maskPackSlice = createSlice({
    name: "maskPacks",
    initialState,
    reducers: {
        getAllMaskPacks: (state, action) => {
            return action.payload;
        },
        getOnsaleMaskPacks: (state, action) => {
            return action.payload.filter(product => product.onSale);
        },
        getRecommendedMaskPacks: (state, action) => {
            return action.payload.filter(product => product.recommended);
        },
        resetMaskPacks: (state) => {
            return initialState;
        },
    }
});

export default maskPackSlice.reducer;
export const {
    getAllMaskPacks,
    getOnsaleMaskPacks,
    getRecommendedMaskPacks,
    resetMaskPacks,
} = maskPackSlice.actions;