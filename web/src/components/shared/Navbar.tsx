import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import ThemeButton from "../shared/ThemeButton";
import { roleBasedNavbar } from "../../config/nav.config";

export default function Navbar() {
	const { user } = useSelector((state: RootState) => state.auth);
	const navigation = user ? roleBasedNavbar : [];

	return (
		<nav className="bg-[var(--navbar-bg)] shadow-md fixed top-0 left-0 w-full ">
			<div className="container mx-auto px-6 lg:px-12">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center space-x-2"
					>
						<img
							className="h-8 w-auto"
							src="/logo.svg"
							alt="Brand Logo"
						/>
					</Link>

					{/* Navbar Items */}
					<div className="hidden md:flex space-x-6">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className="text-[var(--navbar-text-color)] hover:text-[var(--accent-color)] transition duration-300 text-sm font-medium"
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* User Profile & Theme Toggle */}
					<div className="flex items-center space-x-4">
						<ThemeButton />
					</div>
				</div>
			</div>
		</nav>
	);
}
