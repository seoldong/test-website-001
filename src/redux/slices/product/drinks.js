import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const drinksSlice = createSlice({
    name: "drinks",
    initialState,
    reducers: {
        getAllDrinks: (state, action) => {
            return action.payload;
        },
        resetDrinks: (state) => {
            return initialState;
        },
    }
});

export default drinksSlice.reducer;
export const {
    getAllDrinks,
    resetDrinks,
} = drinksSlice.actions;