import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";

export default function NGOLayout() {
	return (
		<div className="min-h-screen bg-[var(--bg-color)] flex flex-col">
			{/* Navbar - Takes Full Width */}
			<div className="w-full z-50">
				<Navbar />
			</div>

			{/* Sidebar and Content Section */}
			<div className="flex flex-1">
				{/* Sidebar - Hidden on Mobile */}
				<div className="hidden md:block fixed top-16 left-0 h-full w-64 m">
					{/* Inner wrapper for padding */}
					<div className="m-8">
						<Sidebar />
					</div>
				</div>

				{/* Main Content Section */}
				<div className="flex-1 md:ml-64 flex flex-col mt-16">
					<main className="flex-1 px-6 py-8">
						<div className="max-w-7xl mx-auto">
							<Outlet />
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}