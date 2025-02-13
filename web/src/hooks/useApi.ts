import { useState, useCallback } from 'react';
import { ApiError } from '../types/api.types';
import toast from 'react-hot-toast';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

export function useApi<T>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (apiPromise: Promise<any>) => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      const response = await apiPromise;
      setState((prev) => ({ ...prev, data: response.data, loading: false }));
      return response.data;
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        error: error,
        loading: false,
      }));
      toast.error(error.message);
      throw error;
    }
  }, []);

  return {
    ...state,
    execute,
  };
}