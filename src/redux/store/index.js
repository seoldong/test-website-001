import { configureStore } from "@reduxjs/toolkit";
import undersidePanelReducer from "../slices/topnav/undersideSlice";
// 

export const store = configureStore({
    reducer: {
        undersidePanel: undersidePanelReducer,
    }
})