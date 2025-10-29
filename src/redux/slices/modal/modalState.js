import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalStateSlice = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        isOpenModal: (state, action) => {
            return !state;
        }
    }
});

export default modalStateSlice.reducer;
export const {
    isOpenModal,
} = modalStateSlice.actions;
