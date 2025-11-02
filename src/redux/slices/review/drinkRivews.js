import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const drinkReviewsSlice = createSlice({
    name: "drinkReviews",
    initialState,
    reducers: {
        getAllDrinkReviews: (state, action) => {
            return action.payload;
        },
        resetDrinkReviews: (state) => {
            return initialState;
        },
    }
});

export default drinkReviewsSlice.reducer;
export const {
    getAllDrinkReviews,
    resetDrinkReviews,
} = drinkReviewsSlice.actions;