interface FormInputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const FormInput = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    required = false,
}: FormInputProps) => (
    <div className="mb-4">
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full px-4 py-2 rounded-md border 
            bg-[var(--bg-color)] 
            text-[var(--text-color)]
            border-[var(--border-color)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]
            placeholder-[var(--placeholder-color)]
            transition-colors duration-200"
        />
    </div>
);