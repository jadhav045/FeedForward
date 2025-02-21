import React from 'react';

interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
    description?: string;
    className?: string;
}

export const Label: React.FC<LabelProps> = ({
    htmlFor,
    children,
    required = false,
    description,
    className = "",
}) => {
    return (
        <div className={`space-y-1 ${className}`}>
            <label
                htmlFor={htmlFor}
                className="block text-[var(--label-color)] text-[var(--formTitle-size)] 
                    font-medium tracking-[var(--label-spacing)]"
            >
                {children}
                {required && (
                    <span className="ml-1 text-[var(--formTitle-color)]">*</span>
                )}
            </label>
            {description && (
                <p className="text-sm text-[var(--formTitle-text)] opacity-80">
                    {description}
                </p>
            )}
        </div>
    );
};
