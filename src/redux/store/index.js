import { configureStore } from "@reduxjs/toolkit";
import undersidePanelReducer from "../slices/topnav/undersideSlice";
import modalStateReducer from "../slices/modal/modalState";
import drinksReducer from "../slices/product/drinks";
import bestDrinksReducer from "../slices/product/bestDrinks";
import maskPacksReducer from "../slices/product/maskPacks";
import bestMaskPacksReducer from "../slices/product/bestMaskPacks";
import drinkReviewsReducer from "../slices/review/drinkRivews"
import maskPackReviewsReducer from "../slices/review/maskPackRivews"
import productsOrderReducer from "../slices/order/order"
import mainSlideReducer from "../slices/mainSlide/mainSlide"
import bestProductsReducer from "../slices/product/bestProducts"
import recommendedProductsReducer from "../slices/product/fetchRecommendedProductsThunk"

// 
export const store = configureStore({
    reducer: {
        undersidePanel: undersidePanelReducer,
        modalState: modalStateReducer,
        drinks: drinksReducer,
        bestDrinks: bestDrinksReducer,
        maskPacks: maskPacksReducer,
        bestMaskPacks: bestMaskPacksReducer,
        drinkReviews: drinkReviewsReducer,
        maskPackReviews: maskPackReviewsReducer,
        productsOrder: productsOrderReducer,
        mainSlide: mainSlideReducer,
        bestProducts: bestProductsReducer,
        recommendedProducts: recommendedProductsReducer
    }
})