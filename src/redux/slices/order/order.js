import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const productOrderSlice = createSlice({
    name: "productsOrder",
    initialState,
    reducers: {
        orderInit: (state) => {
            return initialState;
        },
        
        orderPlus: (state) => {
            return state + 1;
        },
        
        orderMinus: (state) => {
            if (state > 1) {
                return state - 1;
            }
            return state;
        },
    }
});

export default productOrderSlice.reducer;
export const {
    orderInit,
    orderMinus,
    orderPlus
} = productOrderSlice.actions;