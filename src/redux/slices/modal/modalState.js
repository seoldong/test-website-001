import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false, 
    eventId: null
};

const modalStateSlice = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.eventId = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.eventId = null;
        }
    }
});

export default modalStateSlice.reducer;
export const { openModal, closeModal } = modalStateSlice.actions;