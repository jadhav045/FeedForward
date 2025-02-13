
import { useTheme } from "../../hooks/useTheme";

const ThemeButton: React.FC = () => {

	const { theme, changeTheme } = useTheme();
	return (

		// <header className="p-4 flex justify-between bg-gray-800 text-white">
		<button
			onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
			className="px-4 py-2 rounded transition"
			style={{
				backgroundColor: "var(--subcomponent-bg-color)",
				color: "var(--subcomponent-text-color)",
			}}
		>
			Toggle Theme
		</button>
		// </header>
	);
};

export default ThemeButton;