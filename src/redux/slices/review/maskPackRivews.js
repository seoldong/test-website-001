import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const maskPackRivewReviewsSlice = createSlice({
    name: "maskPackReviews",
    initialState,
    reducers: {
        getAllMaskPackReviews: (state, action) => {
            return action.payload;
        },
        resetMaskPackReviews: (state) => {
            return initialState;
        },
    }
});

export default maskPackRivewReviewsSlice.reducer;
export const {
    getAllMaskPackReviews,
    resetMaskPackReviews,
} = maskPackRivewReviewsSlice.actions;