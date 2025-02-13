import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Theme, ThemeState } from '../types/theme.types';
import { themeStorage } from '../utils/theme';

const initialState: ThemeState = {
  theme: themeStorage.getTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      themeStorage.setTheme(action.payload);
      themeStorage.applyTheme(action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;