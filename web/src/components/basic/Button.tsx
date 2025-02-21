import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline";
	isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	isLoading = false,
	children,
	className = "",
	disabled,
	...props
}) => {
	const baseStyles =
		"px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

	const variantStyles = {
		primary:
			"bg-[var(--primaryButton-bg)] text-[var(--primaryButton-text)] hover:[var(--primaryButton-hover)] disabled:bg-gray-400 cursor-pointer",
		secondary: "bg-[var(--secondaryButton-bg)] text-[var(--secondaryButton-text)] hover:[var(--secondaryButton-hover)] disabled:bg-gray-400 cursor-pointer",
		outline:
			"bg-[var(--outlineButton-bg)] text-[var(--outlineButton-text)] hover:[var(--outlineButton-hover)] disabled:border-gray-400 disabled:text-gray-400 cursor-pointer",
	};

	return (
		<button
			disabled={isLoading || disabled}
			className={clsx(baseStyles, variantStyles[variant], className, {
				"cursor-not-allowed opacity-60": disabled || isLoading,
			})}
			{...props}
		>
			{isLoading ? (
				<span className="flex items-center gap-2">
					<svg
						className="animate-spin h-4 w-4"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
							fill="none"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
					Loading...
				</span>
			) : (
				children
			)}
		</button>
	);
};
