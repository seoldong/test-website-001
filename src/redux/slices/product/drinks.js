import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const drinksSlice = createSlice({
    name: "drinks",
    initialState,
    reducers: {
        getAllDrinks: (state, action) => {
            return action.payload;
        },
        getOnsaleDrinks: (state, action) => {
            return action.payload.filter(product => product.onSale);
        },
        getRecommendedDrinks: (state, action) => {
            return action.payload.filter(product => product.recommended);
        },
        resetDrinks: (state) => {
            return initialState; 
        },
    }
});

export default drinksSlice.reducer;
export const {
    getAllDrinks,
    getOnsaleDrinks,
    getRecommendedDrinks,
    resetDrinks,
} = drinksSlice.actions;