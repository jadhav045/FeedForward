import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { SidebarItem } from "./SidebarItem"; // Import SidebarItem component
import { roleBasedSidebar } from "../../config/sidebar.config";
import { Menu } from "lucide-react"; // Import Menu Icon from Lucide (or use any icon library)

export default function Sidebar() {
	const { user } = useSelector((state: RootState) => state.auth);
	const sidebarItems = user ? roleBasedSidebar[user.role] : [];
	const [isOpen, setIsOpen] = useState(false); // Toggle state

	// Toggle Sidebar
	const toggleSidebar = () => setIsOpen(!isOpen);

	return (
		<>
			{/* Navbar Menu Button */}
			<button
				onClick={toggleSidebar}
				className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-full"
			>
				<Menu className="w-6 h-6" />
			</button>

			{/* Sidebar */}
			<div
				className={`fixed left-0 top-16 w-64 min-h-screen bg-[var(--sidebar-bg)] py-6 px-4 shadow-lg 
				transition-transform transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} md:translate-x-0 md:flex`}
			>
				<nav className="space-y-2">
					{sidebarItems.map((item) => (
						<SidebarItem
							key={item.name}
							to={item.href}
							icon={
								<item.icon className="h-5 w-5 text-[var(--sidebar-text-color)]" />
							}
							label={item.name}
						/>
					))}
				</nav>
			</div>
		</>
	);
}
