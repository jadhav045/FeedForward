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
        className={`max-w-md mx-auto p-6 rounded-lg 
        bg-[var(--form-bg)]
        border border-[var(--form-border)]
        shadow-[var(--form-shadow)]
        space-y-4 ${className}`}
    >
        {children}
    </form>
);


