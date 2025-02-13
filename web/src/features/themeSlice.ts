import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark" | "blue" | "green" | "purple" | "system";

interface ThemeState {
	theme: Theme;
}

const storageKey = "vite-ui-theme";

// Function to get the initial theme
const getInitialTheme = (): Theme => {
	return (localStorage.getItem(storageKey) as Theme) || "light";
};

const initialState: ThemeState = {
	theme: getInitialTheme(),
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
			localStorage.setItem(storageKey, action.payload);

			// Apply theme to the document
			const root = document.documentElement;
			root.classList.remove("light", "dark", "blue", "green", "purple");

			if (action.payload === "system") {
				const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light";
				root.classList.add(systemTheme);
			} else {
				root.classList.add(action.payload);
			}
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;