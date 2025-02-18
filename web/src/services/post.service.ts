// src/services/post.service.ts
import { api } from '../api/api';
import type { Post, PostResponse } from '../types/order.types';

export const postService = {
  getPosts: () => {
    return api.get<PostResponse>('/post/list');
  },

  requestPost: (postId: string) => {
    return api.post<PostResponse>(`/post/request/${postId}`);
  }
};