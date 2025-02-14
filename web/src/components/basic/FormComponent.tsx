interface FormComponentProps {
    onSubmit: (e: React.FormEvent) => void;
    children: React.ReactNode;
    className?: string;
}

export const FormComponent = ({
    onSubmit,
    children,
    className = "",
}: FormComponentProps) => (
    <form
        onSubmit={onSubmit}
        className={`max-w-md mx-auto p-6 rounded-lg shadow-md 
        bg-[var(--bg-secondary-color)]
        border border-[var(--border-color)]
        space-y-4 ${className}`}
    >
        {children}
    </form>
);