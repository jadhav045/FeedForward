import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setTheme } from "../features/themeSlice";
import { Theme } from "../types/theme.types";

//  using this we update the theme in the redux store

export const useTheme = () => {
	const dispatch = useDispatch<AppDispatch>();
	const theme = useSelector((state: RootState) => state.theme.theme);

	const changeTheme = (newTheme: Theme) => {
		dispatch(setTheme(newTheme));
	};

	return { theme, changeTheme };
};

// 🔹  Summary
// ✅ useTheme gets the current theme and provides changeTheme.
// ✅ useSelector retrieves theme data from Redux.
// ✅ useDispatch updates Redux by dispatching setTheme(newTheme).
// ✅ Redux automatically updates the UI when the theme changes.