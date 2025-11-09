import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 유틸리티 함수: 리뷰 데이터를 최신순으로 정렬 (Thunk 밖으로 분리)
const sortReviewsByDate = (reviews) => {
    // date 필드를 기준으로 내림차순(최신순) 정렬
    // .slice()를 사용하여 원본 배열의 불변성 유지
    return reviews.slice().sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
};

export const fetchBestReviewsThunk = createAsyncThunk(
    'bestReviews/fetch',
    async (_, thunkAPI) => {
        const bestReviewsPath = '/data/review/review-best.json';
        try {
            const response = await fetch(bestReviewsPath);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Thunk는 정렬하지 않고 순수하게 데이터만 반환
            return data;
        } catch (error) {
            console.error("Fetching data failed", error);
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch recommended products.');
        }
    }
);

const initialState = {
    data: [],
    loading: false,
    error: null,
};
// 
const bestReviewsSlice = createSlice({
    name: "bestReviews",
    initialState,
    reducers: {
        resetbestReviews: (state) => {
            state.data = initialState.data;
            state.loading = initialState.loading;
            state.error = initialState.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestReviewsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBestReviewsThunk.fulfilled, (state, action) => {
                state.loading = false;
                // 데이터를 가져온 후, Slice의 Reducer(extraReducer)에서 정렬 함수를 적용
                state.data = sortReviewsByDate(action.payload);
                state.error = null;
            })
            .addCase(fetchBestReviewsThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export const { resetbestReviews } = bestReviewsSlice.actions;
export default bestReviewsSlice.reducer;