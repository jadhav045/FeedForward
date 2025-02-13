import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  children,
  type = 'button',
  disabled,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  };

  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        children
      )}
    </button>
  );
};