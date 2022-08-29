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
    },
    toggleUpvote: (state, action) => {
      state.posts = state.posts.map(post => {
        if (post.data.id === action.payload.id) {
          if (!post.data.voteStatus) {
            post.data.voteStatus = 'upvoted';
            post.data.ups = post.data.ups + 1;
          }
          else if (post.data.voteStatus === 'downvoted') {
            post.data.voteStatus = 'upvoted';
            post.data.ups = post.data.ups + 1;
            post.data.downs = post.data.downs - 1;
          }
          else if (post.data.voteStatus === 'upvoted') {
            post.data.voteStatus = undefined;
            post.data.ups = post.data.ups - 1;
          }
        }
        return post;
      })
    },
    toggleDownvote: (state, action) => {
      state.posts = state.posts.map(post => {
        if (post.data.id === action.payload.id) {
          if (!post.data.voteStatus) {
            post.data.voteStatus = 'downvoted';
            post.data.downs = post.data.downs + 1;
          }
          else if (post.data.voteStatus === 'upvoted') {
            post.data.voteStatus = 'downvoted';
            post.data.downs = post.data.downs + 1;
            post.data.ups = post.data.ups - 1;
          }
          else if (post.data.voteStatus === 'downvoted') {
            post.data.voteStatus = undefined;
            post.data.downs = post.data.downs - 1;
          }
        }
        return post;
      })
    },
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
export const { addPost, toggleDownvote, toggleUpvote } = postsSlice.actions;