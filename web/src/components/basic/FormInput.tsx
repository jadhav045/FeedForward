interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    name: string;
    placeholder: string;
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
    maxLength?: number;
    disabled?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
    className = "",
    type = "text",
    name,
    placeholder,
    value,
    onChange,
    required = false,
    error,
    maxLength,
    disabled,
    ...props
}) => {
    return (
        <div className="mb-4">
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                maxLength={maxLength}
                disabled={disabled}
                className={`w-full px-4 py-2 rounded-lg border 
                    bg-[var(--input-bg)] text-[var(--text-color)]
                    border-[var(--border-color)] focus:ring-2 focus:ring-blue-500
                    ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-[var(--error-color)]">
                    {error}
                </p>
            )}
        </div>
    );
};