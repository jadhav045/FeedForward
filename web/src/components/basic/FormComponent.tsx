import React from "react";

interface FormComponentProps {
	onSubmit: (e: React.FormEvent) => void;
	children: React.ReactNode;
	className?: string;
	size?: "small" | "medium" | "large" | "full";
}

export const FormComponent = ({
	onSubmit,
	children,
	className = "",
	size = "medium",
}: FormComponentProps) => {
	const sizeClasses = {
		small: "max-w-md",
		medium: "max-w-2xl",
		large: "max-w-4xl",
		full: "w-full",
	};

	return (
		<form
			onSubmit={onSubmit}
			className={`
                w-full 
                ${sizeClasses[size]}
                mx-auto 
                p-4 sm:p-6 md:p-8
                rounded-lg 
                shadow-[var(--form-shadow)] hover:shadow-[var(--form-shadow-hover)]
                transition-shadow duration-300
                bg-[var(--form-bg)]
                hover:bg-[var(--form-hover)]
                border border-[var(--form-border)]
                space-y-4
                ${className}
            `}
		>
			{children}
		</form>
	);
};
