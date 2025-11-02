import { configureStore } from "@reduxjs/toolkit";
import undersidePanelReducer from "../slices/topnav/undersideSlice";
import modalStateReducer from "../slices/modal/modalState";
import drinksReducer from "../slices/product/drinks";
import maskPacksReducer from "../slices/product/maskpacks";
import drinkReviewsReducer from "../slices/review/drinkRivews"
import maskPackReviewsReducer from "../slices/review/maskPackRivews"

// 

export const store = configureStore({
    reducer: {
        undersidePanel: undersidePanelReducer,
        modalState: modalStateReducer,
        drinks: drinksReducer,
        maskPacks: maskPacksReducer,
        drinkReviews: drinkReviewsReducer,
        maskPackReviews: maskPackReviewsReducer,
    }
})