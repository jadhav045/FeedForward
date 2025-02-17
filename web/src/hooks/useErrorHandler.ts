// src/hooks/useErrorHandler.ts
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useErrorHandler = () => {
  const navigate = useNavigate();

  const handleError = (error: any) => {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 401:
          navigate('/auth/login');
          break;
        case 403:
          navigate('/error', { state: { status: 403 } });
          break;
        case 404:
          navigate('/error', { state: { status: 404 } });
          break;
        default:
          toast.error(error.response.data?.message || 'An error occurred');
      }
    } else {
      toast.error('Network error occurred');
    }
  };

  return { handleError };
};