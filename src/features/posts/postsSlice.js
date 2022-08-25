import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFromRedditAPI } from "../../API/redditAPI";
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (arg, thunkAPI) => {
    try {
      const response = await fetchFromRedditAPI();
      return response;

    } catch (error) {
      console.log(error)
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts]
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

export const allPostsLoaded = state => {
  return state.posts.posts.length === 0 ? false : true;
}

export default postsSlice.reducer;
export const { addPost } = postsSlice.actions;