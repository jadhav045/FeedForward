import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeButton: React.FC = () => {
	const { theme, changeTheme } = useTheme();

	return (
		<div className="flex items-center justify-center p-1 border-2 border-[var(--border-color)] rounded-full transition-all duration-300">
			<label className="relative flex cursor-pointer items-center w-14 h-7 bg-[var(--subcomponent-bg-color)] rounded-full p-1 transition-all duration-300">
				<input
					type="checkbox"
					checked={theme === "dark"}
					onChange={() => changeTheme(theme === "dark" ? "light" : "dark")}
					className="sr-only peer"
				/>

				{/* Swipe Indicator */}
				<span className="absolute w-6 h-6 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-500 rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-7"></span>
			</label>
		</div>
	);
};

export default ThemeButton;



