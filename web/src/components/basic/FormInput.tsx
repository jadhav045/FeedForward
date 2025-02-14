interface FormInputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
    maxLength?: number;  // Add maxLength prop
}

export const FormInput = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    required = false,
    error,
    maxLength,  // Destructure maxLength prop
}: FormInputProps) => (
    <div className="mb-4">
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            maxLength={maxLength}  // Add maxLength attribute

            style={{
                color: "var(--formInput-text)",
                backgroundColor: "var(--formInput-color)",
                borderColor: "var(--formInput-color)"
            }}
            
            className={`w-full px-4 py-2 rounded-md border 
            bg-[var( --formInput-color)] 
            text-[var( --formInput-text)]
            border-[var( --formInput-border)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary-bg)]
            placeholder-[var(--placeholder-color)]
            transition-colors duration-200
           

            ${error ? 'border-[var(--error-color)] focus:ring-[var(--error-color)]' : ''}`}


        />
        {error && (
            <p className="mt-1 text-sm text-[var(--error-color)]">
                {error}
            </p>
        )}
    </div>
);