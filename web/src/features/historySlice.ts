// src/features/historySlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ngoService } from '../services/ngo.service';
import type { HistoryState } from '../types/history.types';

const initialState: HistoryState = {
  items: [],
  stats: {
    totalRequested: 0,
    totalReceived: 0
  },
  loading: false,
  error: null
};

export const fetchHistory = createAsyncThunk(
  'history/fetchHistory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ngoService.getHistory();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch history');
    }
  }
);

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    clearHistory: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.items = action.payload.history;
        state.stats = {
          totalRequested: action.payload.totalRequested,
          totalReceived: action.payload.totalReceived
        };
        state.loading = false;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { clearHistory } = historySlice.actions;
export default historySlice.reducer;