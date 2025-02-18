import {
	HomeIcon,
	UserIcon,
	DocumentIcon,
	BellIcon,
	PlusIcon,
	ListBulletIcon,
} from "@heroicons/react/24/outline"; // Import your icons

export const roleBasedSidebar = {
	admin: [
		{ name: "Dashboard", href: "/admin", icon: HomeIcon },
		{ name: "Users", href: "/admin/users", icon: UserIcon },
		{ name: "Reports", href: "/admin/reports", icon: DocumentIcon },
		{ name: "My Profile", href: "/admin/profile", icon: UserIcon }, // Or a different icon
	],
	donor: [
		{ name: "Dashboard", href: "/donor", icon: HomeIcon },
		{ name: "My Profile", href: "/donor/profile", icon: UserIcon },
		{ name: "History", href: "/donor/history", icon: DocumentIcon },
		{ name: "Notifications", href: "/donor/notifications", icon: BellIcon },
		{ name: "Postings", href: "/donor/postings", icon: PlusIcon }, // Or a different icon
	],
	ngo: [
		{ name: "Dashboard", href: "/ngo", icon: HomeIcon },
		{ name: "My Profile", href: "/ngo/profile", icon: UserIcon },
		{ name: "History", href: "/ngo/history", icon: DocumentIcon },
		{ name: "Notifications", href: "/ngo/notifications", icon: BellIcon },
		{ name: "Requests", href: "/ngo/requests", icon: ListBulletIcon }, // Or a different icon
	],
};