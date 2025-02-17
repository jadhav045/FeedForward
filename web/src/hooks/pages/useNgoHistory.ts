// src/hooks/pages/useNgoHistory.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '../../features/historySlice';
import type { RootState } from '../../store/store';

export const useNgoHistory = () => {
  const dispatch = useDispatch();
  const { items: history, stats, loading, error } = useSelector(
    (state: RootState) => state.history
  );

  useEffect(() => {
    if (!history.length) {
      dispatch(fetchHistory());
    }
  }, [dispatch, history.length]);

  return {
    loading,
    history,
    stats,
    error
  };
};