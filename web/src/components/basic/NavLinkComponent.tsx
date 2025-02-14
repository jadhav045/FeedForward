import { Link, NavLink } from "react-router-dom";

interface NavLinkComponentProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    isNavLink?: boolean;
    end?: boolean;
}

export const NavLinkComponent = ({
    to,
    children,
    className = "",
    activeClassName = "",
    isNavLink = false,
    end = false,
}: NavLinkComponentProps) => {
    const baseStyles = `inline-block transition-colors duration-200
        text-[var(--text-color)] hover:text-[var(--primary-color)]
        ${className}`;

    if (isNavLink) {
        return (
            <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                    `${baseStyles} ${isActive ? activeClassName : ""}`
                }
            >
                {children}
            </NavLink>
        );
    }

    return (
        <Link
            to={to}
            className={baseStyles}
        >
            {children}
        </Link>
    );
};