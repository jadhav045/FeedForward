import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";

export default function CommonLayout() {
	return (
		<div className="min-h-screen bg-[var(--bg-color)] flex flex-col">
			{/* Navbar - Takes Full Width */}
			<div className="w-full z-50">
				<Navbar />
			</div>

			<div className="flex-1  flex flex-col ">
				<main className="flex-1 ">
					<div className="max-w-7xl mx-auto">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
}
