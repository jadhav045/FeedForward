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
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );