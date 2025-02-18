import type { Theme } from "../types/theme.types";

const storageKey = "vite-ui-theme";

export const themeStorage = {
	getTheme: (): Theme => {
		return (localStorage.getItem(storageKey) as Theme) || "system";
	},

	setTheme: (theme: Theme): void => {
		localStorage.setItem(storageKey, theme);
		themeStorage.applyTheme(theme);
	},

	applyTheme: (theme: Theme): void => {
		const root = document.documentElement;
		root.classList.remove("light", "dark", "blue", "green", "purple");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
			root.classList.add(systemTheme);
		} else {
			root.classList.add(theme);
		}
	},

	init: (): void => {
		const savedTheme = themeStorage.getTheme();
		themeStorage.applyTheme(savedTheme);

		// Add event listener for system theme changes
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", () => {
				if (themeStorage.getTheme() === "system") {
					themeStorage.applyTheme("system");
				}
			});
	},
};

// Initialize theme on page load
themeStorage.init();
