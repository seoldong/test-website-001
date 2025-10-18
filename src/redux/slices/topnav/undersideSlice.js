import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const undersideSlice = createSlice({
    name: "undersidePanel",
    initialState,
    reducers: {
        isOpenUndersidePanel: (state, action) => {
            return !state;
        }
    }
});

export default undersideSlice.reducer;
export const {
    isOpenUndersidePanel,
} = undersideSlice.actions;
