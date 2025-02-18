// src/features/postSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PostState } from '../types/order.types';
import { postService } from '../services/post.service';

const initialState: PostState = {
  items: [],
  loading: false,
  error: null
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await postService.getPosts();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch posts');
    }
  }
);

export const requestPost = createAsyncThunk(
  'posts/requestPosts',
  async (postId: string, { rejectWithValue }) => {
    try {
      const response = await postService.requestPost(postId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to request post');
    }
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.items.unshift(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  }
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;