import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. 비동기 Thunk 정의: 데이터를 가져오는 함수
export const fetchRecommendedProductsThunk = createAsyncThunk(
    'recommendedProducts/fetch',
    async (_, { rejectWithValue }) => {
        const recommendedProductsPath = '/data/page/home/recommendedProducts.json';
        try {
            const response = await fetch(recommendedProductsPath);
            if (!response.ok) {
                // HTTP 상태 코드가 2xx가 아닌 경우 에러 처리
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            // 네트워크 오류 또는 JSON 파싱 오류 처리
            console.error("Fetching data failed", error);
            return rejectWithValue(error.message || 'Failed to fetch recommended products.');
        }
    }
);

// 2. 초기 상태 업데이트: 로딩, 에러 상태 추가
const initialState = {
    products: [],
    loading: false, // 데이터 로딩 상태
    error: null,    // 에러 메시지
};

const recommendedProductsSlice = createSlice({
    name: "recommendedProducts",
    initialState,
    reducers: {
        // Reducer는 동기적인 상태 업데이트만 처리
        resetRecommendedProducts: (state) => {
            state.products = initialState.products;
            state.loading = initialState.loading;
            state.error = initialState.error;
        },
    },
    // 3. 비동기 Thunk 처리 (extraReducers)
    extraReducers: (builder) => {
        builder
            // Pending (요청 시작)
            .addCase(fetchRecommendedProductsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Fulfilled (요청 성공)
            .addCase(fetchRecommendedProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload; // 상품 데이터 저장
                state.error = null;
            })
            // Rejected (요청 실패)
            .addCase(fetchRecommendedProductsThunk.rejected, (state, action) => {
                state.loading = false;
                state.products = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default recommendedProductsSlice.reducer;

export const { resetRecommendedProducts } = recommendedProductsSlice.actions;