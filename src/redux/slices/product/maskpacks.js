import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const maskPacksSlice = createSlice({
    name: "maskPacks",
    initialState,
    reducers: {
        getAllMaskPacks: (state, action) => {
            return action.payload;
        },
        resetMaskPacks: (state) => {
            return initialState;
        },
    }
});

export default maskPacksSlice.reducer;
export const {
    getAllMaskPacks,
    resetMaskPacks,
} = maskPacksSlice.actions;