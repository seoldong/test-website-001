import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 🚨 Thunk 이름 변경: 단일 블로그 콘텐츠를 가져옴을 명시
export const fetchBlogContentThunk = createAsyncThunk(
    'blogContent/fetch',
    async (pathName, thunkAPI) => {
        const path = `${pathName}`;
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // 🚨 수정: 마크다운(MD) 파일이므로 .text() 사용
            const data = await response.text(); 
            return data;
        } catch (error) {
            console.error("Fetching data failed", error);
            // 에러 메시지 반환
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch blog content.'); 
        }
    }
);

// 🚨 State 수정: 단일 마크다운 내용을 저장하기 위해 빈 문자열로 변경
const initialState = {
    data: '', // 마크다운 텍스트(문자열)를 저장
    loading: false,
    error: null,
};

// 🚨 Slice 이름 변경: 단일 블로그 콘텐츠를 관리함을 명시
const blogContentSlice = createSlice({
    name: "blogContent",
    initialState,
    reducers: {
        // 🚨 액션 이름도 역할에 맞게 변경
        resetBlogContent: (state) => { 
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            // 🚨 Thunk 이름 변경 반영
            .addCase(fetchBlogContentThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogContentThunk.fulfilled, (state, action) => {
                state.loading = false;
                // action.payload는 마크다운 텍스트 문자열입니다.
                state.data = action.payload; 
                state.error = null;
            })
            .addCase(fetchBlogContentThunk.rejected, (state, action) => {
                state.loading = false;
                // 🚨 데이터 로드 실패 시 빈 문자열로 초기화
                state.data = ''; 
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default blogContentSlice.reducer;
export const { resetBlogContent } = blogContentSlice.actions;