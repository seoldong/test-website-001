import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 
export const fetchBlogListThunk = createAsyncThunk(
    'blogList/fetch',
    async (fileName, thunkAPI) => {
        // 인수로 받은 fileName을 경로에 사용
        const path = `/data/blog/bloglist-${fileName}.json`; 
        
        try {
            const response = await fetch(path);
            if (!response.ok) {
                // 404 등의 오류가 발생하면 에러 처리
                throw new Error(`Failed to fetch file: ${fileName}.json (Status: ${response.status})`); 
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetching data failed", error);
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch blog list.');
        }
    }
);

// 
const initialState = {
    data: [],
    loading: false,
    error: null,
};

//
const blogListSlice = createSlice({
    name: "blogList",
    initialState,
    reducers: {
        resetBlog: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogListThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogListThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchBlogListThunk.rejected, (state, action) => {
                state.loading = false;
                state.data = [];
                state.error = action.payload || action.error.message || 'Unknown error occurred.';
            });
    },
});

export default blogListSlice.reducer;
export const { resetBlog } = blogListSlice.actions;