interface SelectOption {
	value: string;
	label: string;
}

interface SelectInputProps {
	name: string;
	options: SelectOption[];
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	required?: boolean;
	className?: string;
	placeholder?: string;
}

export const SelectInput = ({
	name,
	options,
	value,
	onChange,
	required = false,
	className = "",
	placeholder,
}: SelectInputProps) => (
	<div className="mb-4">
		<select
			name={name}
			value={value}
			onChange={onChange}
			required={required}
			className={`w-full px-4 py-2 rounded-md border 
                focus:outline-none focus:ring-2 
                transition-colors duration-200 ${className}`}
			style={{
				backgroundColor: "var(--select-bg)",
				color: "var(--select-text)",
				borderColor: "var(--select-border)",
				boxShadow: "var(--select-shadow)",
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.backgroundColor = "var(--select-hover-bg)")
			}
			onMouseLeave={(e) =>
				(e.currentTarget.style.backgroundColor = "var(--select-bg)")
			}
			onFocus={(e) => (e.currentTarget.style.outline = "var(--select-outline)")}
		>
			{placeholder && (
				<option
					value=""
					disabled
				>
					{placeholder}
				</option>
			)}
			{options.map((option) => (
				<option
					key={option.value}
					value={option.value}
				>
					{option.label}
				</option>
			))}
		</select>
	</div>
);
