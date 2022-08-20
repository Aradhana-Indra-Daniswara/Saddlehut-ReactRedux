import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (arg, thunkAPI) => {
        try{
            const response = await fetch('https://www.reddit.com/r/Minecraft.json');
            const json = await response.json();
            return json.data.children;
            
        }catch(error){
            // console.log(error)
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectAllPosts = state => {
    return state.posts.posts;
}

export default postsSlice.reducer;
export const { addPost } = postsSlice.actions;