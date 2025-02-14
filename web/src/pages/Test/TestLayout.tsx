import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import { History, Bell, Activity, Menu, X } from "lucide-react"; // Import icons
import type { ReactNode } from "react";
import About from "./pages/AboutPage";

interface SidebarItem {
	name: string;
	path: string;
	icon: ReactNode;
}

const sidebarItems: SidebarItem[] = [
	{ name: "Active", path: "/test/active", icon: <Activity size={20} /> },
	{ name: "History", path: "/test/history", icon: <History size={20} /> },
	{
		name: "Notifications",
		path: "/test/notifications",
		icon: <Bell size={20} />,
	},
];

const TestLayout: React.FC = () => {
	const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

	const toggleSidebar = () => setSidebarOpen((prev) => !prev);

	return (
		<div className="flex min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
			{/* <div className="fixed w-full z-10">
				<Navbar />
			</div>

		
			<button
				onClick={toggleSidebar}
				className="lg:hidden fixed top-5 left-4 z-20 p-2 bg-[var(--leftsidebar-bg-color)] rounded-md"
				aria-label="Toggle Sidebar"
			>
				{isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

	
			<aside
				className={`fixed left-0 top-0 h-full bg-[var(--leftsidebar-bg-color)] text-[var(--leftsidebar-text-color)] 
        p-4 pt-20 transition-transform lg:translate-x-0
        ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:w-64 lg:block`}
			>
				<nav className="flex flex-col gap-4">
					{sidebarItems.map((item) => (
						<NavLink
							key={item.name}
							to={item.path}
							className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--hover-bg-color)] transition"
							onClick={() => setSidebarOpen(false)} // Close on click (for mobile)
						>
							{item.icon}
							<span>{item.name}</span>
						</NavLink>
					))}
				</nav>
			</aside>

			<main className="flex-1 p-6 pt-20 lg:ml-64">
				<Outlet />
			</main> */}

			<About />
		</div>
	);
};

export default TestLayout;
