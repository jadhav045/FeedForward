import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useSocketStatus = () => {
  const { connected, error } = useSelector((state: RootState) => state.socket);
  return { connected, error };
};