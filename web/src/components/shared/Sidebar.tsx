import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { roleBasedSidebar } from "../../config/sidebar.config";
import { SidebarItem } from "./SidebarItem"; // Import SidebarItem component

export default function Sidebar() {
	const { user } = useSelector((state: RootState) => state.auth);
	const sidebarItems = user ? roleBasedSidebar[user.role] : [];

	return (
		<div className="hidden md:flex flex-col bg-[var(--sidebar-bg)] w-64 min-h-screen py-6 px-4 shadow-lg fixed left-0 top-16 ">
			<nav className="space-y-2">
				{sidebarItems.map((item) => (
					<SidebarItem
						key={item.name}
						to={item.href}
						icon={<item.icon className="h-5 w-5 text-[var(--sidebar-text-color)]" />}
						label={item.name}
					/>
				))}
			</nav>
		</div>
	);
}
