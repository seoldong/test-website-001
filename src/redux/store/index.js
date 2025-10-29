import { configureStore } from "@reduxjs/toolkit";
import undersidePanelReducer from "../slices/topnav/undersideSlice";
import modalStateReducer from "../slices/modal/modalState";
// 

export const store = configureStore({
    reducer: {
        undersidePanel: undersidePanelReducer,
        modalState: modalStateReducer,
    }
})