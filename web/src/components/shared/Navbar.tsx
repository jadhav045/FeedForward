// import { Fragment } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import {
// 	Bars3Icon,
// 	XMarkIcon,
// 	UserCircleIcon,
// } from "@heroicons/react/24/outline";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../features/authSlice";
// import { RootState } from "../../store/store";

// import ThemeButton from "./ThemeButton";
// import { roleBasedNavbar } from "../../config/nav.config";

// function classNames(...classes: string[]) {
// 	return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
// 	const navigate = useNavigate();

// 	//Gets user state from Redux store
// 	const { user } = useSelector((state: RootState) => state.auth);
// 	// dispatch for triggering Redux actions  (ex. logout)
// 	const dispatch = useDispatch();

// 	//Dynamic navigation based on user role
// 	// Empty array if no user (unauthenticated)
// 	const navigation = user ? roleBasedNavbar : [];
// 	console.log("navigation: ", navigation);

// 	const handleLogout = () => {
// 		dispatch(logout());
// 		navigate("/auth/login");
// 	};

// 	return (
// 		<Disclosure
// 			as="nav"
// 			className="bg-white shadow"
// 			style={{
// 				background: "var( --navbar-bg-color)",
// 				color: "var( --navbar-text-color)",
// 			}}
// 		>
// 			{({ open }) => (
// 				<>
// 					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// 						<div className="flex h-16 justify-between">
// 							<div className="flex">
// 								<div className="flex flex-shrink-0 items-center">
// 									<Link to="/">
// 										<img
// 											className="h-8 w-auto"
// 											src="/logo.svg"
// 											alt="FeedForward"
// 										/>
// 									</Link>
// 								</div>
// 								<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
// 									{navigation.map((item) => (
// 										<Link
// 											key={item.name}
// 											to={item.href}
// 											className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
// 										>
// 											{item.name}
// 										</Link>
// 									))}
// 								</div>
// 							</div>

// 							<div className="hidden sm:ml-6 sm:flex sm:items-center">
// 								{/* {user && ( */}
// 								<Menu
// 									as="div"
// 									className="relative ml-3"
// 								>
// 									<Menu.Button
// 										className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// 										style={{
// 											background: "var( --bg-color)",
// 											color: "var( --text-color)",
// 										}}
// 									>
// 										<UserCircleIcon className="h-8 w-8 text-gray-400" />
// 									</Menu.Button>
// 									<Transition
// 										as={Fragment}
// 										enter="transition ease-out duration-200"
// 										enterFrom="transform opacity-0 scale-95"
// 										enterTo="transform opacity-100 scale-100"
// 										leave="transition ease-in duration-75"
// 										leaveFrom="transform opacity-100 scale-100"
// 										leaveTo="transform opacity-0 scale-95"
// 									>
// 										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// 											<Menu.Item>
// 												{({ active }) => (
// 													<button
// 														onClick={handleLogout}
// 														className={classNames(
// 															active ? "bg-gray-100" : "",
// 															"block w-full px-4 py-2 text-left text-sm text-gray-700"
// 														)}
// 													>
// 														Sign out
// 													</button>
// 												)}
// 											</Menu.Item>
// 											<Menu.Item>
// 												<ThemeButton />
// 											</Menu.Item>
// 										</Menu.Items>
// 									</Transition>
// 								</Menu>
// 								{/* )} */}
// 							</div>

// 							<div className="-mr-2 flex items-center sm:hidden">
// 								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
// 									{open ? (
// 										<XMarkIcon
// 											className="block h-6 w-6"
// 											aria-hidden="true"
// 										/>
// 									) : (
// 										<Bars3Icon
// 											className="block h-6 w-6"
// 											aria-hidden="true"
// 										/>
// 									)}
// 								</Disclosure.Button>
// 							</div>
// 						</div>
// 					</div>

// 					<Disclosure.Panel className="sm:hidden">
// 						<div className="space-y-1 pb-3 pt-2">
// 							{navigation.map((item) => (
// 								<Link
// 									key={item.name}
// 									to={item.href}
// 									className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
// 								>
// 									{item.name}
// 								</Link>
// 							))}
// 						</div>
// 						{user && (
// 							<div className="border-t border-gray-200 pb-3 pt-4">
// 								<div className="space-y-1">
// 									<button
// 										onClick={handleLogout}
// 										className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
// 									>
// 										Sign out
// 									</button>
// 								</div>
// 							</div>
// 						)}
// 					</Disclosure.Panel>
// 				</>
// 			)}
// 		</Disclosure>
// 	);
// }
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
