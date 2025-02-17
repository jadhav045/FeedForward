import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import AuthDesign from "../shared/AuthDesign";

export default function AuthLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-[var(--primary-bg)] text-[var(--primary-text)]">
			{/* Navbar at the top */}
			<Navbar />

			{/* Main Content & Auth Design */}
			<div className="flex flex-1 container mx-auto px-8 py-12 gap-16 items-center">
				{/* Authentication Content */}
				<div className="w-full lg:w-1/2 flex flex-col justify-center">
					<Outlet />
				</div>

				{/* Sidebar Brief (Hidden on Small Screens) */}
				<div className="hidden lg:flex w-1/2 justify-center">
					<AuthDesign />
				</div>
			</div>
		</div>
	);
}
