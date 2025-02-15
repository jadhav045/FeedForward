interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
  }
  
  export const Label: React.FC<LabelProps> = ({ htmlFor, children, required }) => (
    <label htmlFor={htmlFor} className="block mb-1">
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );