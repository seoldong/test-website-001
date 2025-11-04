import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const mainSlideSlice = createSlice({
    name: "mainSlide",
    initialState,
    reducers: {
        getMainSlides: (state, action) => {
            return action.payload;
        },
        resetMainSlide: (state) => {
            return initialState;
        },
    }
});

export default mainSlideSlice.reducer;
export const {
    getMainSlides,
    resetMainSlide,
} = mainSlideSlice.actions;