// src/hooks/pages/useNgoHome.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSocketStatus } from '../useSocketStatus';
import { fetchPosts, addPost, requestPost } from '../../features/postSlice';
import type { RootState } from '../../store/store';
import { toast } from 'react-hot-toast';

export const useNgoHome = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);
  const socket = useSocket();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (socket) {
      socket.on('newPost', (post) => {
        dispatch(addPost(post));
        toast.success('New donation post available!');
      });
    }
  }, [socket, dispatch]);

  const handleRequest = async (postId: string) => {
    try {
      await dispatch(requestPost(postId)).unwrap();
      toast.success('Request sent successfully!');
    } catch (error) {
      toast.error('Failed to send request');
    }
  };

  return {
    posts,
    loading,
    error,
    handleRequest
  };
};