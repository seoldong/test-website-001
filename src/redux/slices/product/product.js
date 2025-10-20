import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // 모든 상품
        getAllProducts: (state, action) => {
            return action.payload;
        },
        // 세일 상품
        getOnsaleProducts: (state, action) => {
            return action.payload.filter(product => product.onSale);
        },
        // 추천 상품
        getRecommendedProducts: (state, action) => {
            return action.payload.filter(product => product.recommended);
        },
        // 인기 상품
        getPopularityProducts: (state, action) => {
            return [...action.payload].sort((a, b) => b.popularity - a.popularity);
        },
    }
});

export default productsSlice.reducer;
export const {
    getAllProducts,
    getOnsaleProducts,
    getRecommendedProducts,
    getPopularityProducts
} = productsSlice.actions;
