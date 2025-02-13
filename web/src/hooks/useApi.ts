import { useState, useCallback } from 'react';
import { ApiError } from '../types/api.types';
import toast from 'react-hot-toast';

// Type definition for the hook's internal state
interface UseApiState<T> {
  data: T | null;        // Holds the API response data
  loading: boolean;      // Tracks loading state
  error: ApiError | null; // Holds any error that occurs
}

// Generic hook that can work with any data type T
export function useApi<T>() {
  // Initialize state with useState hook
  const [state, setState] = useState<UseApiState<T>>({
    data: null,          // Initially no data
    loading: false,      // Initially not loading
    error: null,         // Initially no error
  });

  // Memoized execute function to prevent unnecessary re-renders
  const execute = useCallback(async (apiPromise: Promise<any>) => {
    try {
      // Set loading state to true and clear any previous errors
      setState((prev) => ({ 
        ...prev, 
        loading: true, 
        error: null 
      }));

      // Wait for the API call to complete
      const response = await apiPromise;

      // Update state with the response data
      setState((prev) => ({ 
        ...prev, 
        data: response.data, 
        loading: false 
      }));

      return response.data;
    } catch (error: any) {
      // Handle any errors that occur
      setState((prev) => ({
        ...prev,
        error: error,
        loading: false,
      }));

      // Show error toast notification
      toast.error(error.message);

      // Re-throw error for optional handling by caller
      throw error;
    }
  }, []); // Empty dependency array as it doesn't depend on any external values

  // Return current state and execute function
  return {
    ...state,   // Spread operator to expose all state properties
    execute,    // Method to trigger API calls
  };
}