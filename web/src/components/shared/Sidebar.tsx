import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SidebarItem } from "./SidebarItem";
import { roleBasedSidebar } from "../../config/sidebar.config";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
	const { user } = useSelector((state: RootState) => state.auth);
	const sidebarItems = user ? roleBasedSidebar[user.role] : [];
	const [isOpen, setIsOpen] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<>
			{/* Menu Button (Small Screens) */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[var(--sidebar-bg)] text-[var(--sidebar-text-color)] rounded-full cursor-pointer shadow-lg"
			>
				{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
			</button>

			{/* Toggle Button (Medium and Large Screens) */}
			<button
				onClick={() => setIsCollapsed(!isCollapsed)}
				className="hidden md:flex fixed top-4 left-4 z-50 p-2 bg-[var(--sidebar-bg)] text-[var(--sidebar-text-color)] rounded-full cursor-pointer shadow-lg"
			>
				{isCollapsed ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
			</button>

			{/* Sidebar */}
			<div
				className={`fixed left-0 top-0 h-full bg-[var(--sidebar-bg)] shadow-lg z-40 
                transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                ${isCollapsed ? "md:w-20" : "md:w-64"} 
                md:translate-x-0 md:block`}
			>
				<div className="flex flex-col h-full py-6 px-4">
					{/* Logo Section */}
					<div
						className={`mb-8 transition-opacity duration-300 
                        ${isCollapsed ? "md:opacity-0" : "opacity-100"}`}
					>
						<h1 className="text-xl font-bold text-[var(--sidebar-text-color)]">
							FeedForward
						</h1>
					</div>

					{/* Navigation Items */}
					<nav className="space-y-2">
						{sidebarItems.map((item) => (
							<SidebarItem
								key={item.name}
								to={item.href}
								icon={
									<item.icon className="h-5 w-5 text-[var(--sidebar-text-color)]" />
								}
								label={item.name}
								isCollapsed={isCollapsed}
							/>
						))}
					</nav>
				</div>
			</div>

			{/* Overlay for mobile (click to close sidebar) */}
			{isOpen && (
				<div
					className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
}
