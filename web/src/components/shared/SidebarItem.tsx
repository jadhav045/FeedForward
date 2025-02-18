import { NavLink } from "react-router-dom";

interface SidebarItemProps {
	to: string;
	icon: React.ReactNode;
	label: string;
}

export const SidebarItem = ({ to, icon, label }: SidebarItemProps) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`relative flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                 text-[var(--navlink-text)] hover:text-[var(--navlink-hover-text)]
                 ${
										isActive
											? "bg-[var(--navlink-active-bg)] text-[var(--navlink-active-text)]"
											: "hover:bg-[var(--navlink-hover-bg)]"
									}
                 hover:shadow-lg hover:border hover:border-[var(--navlink-hover-border)]`
			}
		>
			{icon}
			<span>{label}</span>

			{/* Animated Background Overlay on Hover */}
			<div
				className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100
                bg-[var(--navlink-hover-bg)] rounded-lg"
			></div>
		</NavLink>
	);
};