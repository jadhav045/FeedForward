import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeButton: React.FC = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <button
            onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
            className={`
                relative 
                flex items-center 
                gap-2 
                px-3 
                py-1.5 
                rounded-full 
                border 
                border-[var(--theme-border)]
                ${theme === 'dark' 
                    ? 'bg-white text-gray-900' 
                    : 'bg-gray-900 text-white'
                }
                transition-all 
                duration-300 
                hover:scale-105
                shadow-sm
            `}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className="relative w-4 h-4">
                <Sun 
                    className={`
                        absolute 
                        inset-0 
                        transition-all 
                        duration-300
                        ${theme === 'dark' 
                            ? 'rotate-0 scale-100' 
                            : 'rotate-90 scale-0'
                        }
                        ${theme === 'dark' 
                            ? 'text-amber-500' 
                            : 'text-white'
                        }
                    `}
                    size={16}
                />
                <Moon 
                    className={`
                        absolute 
                        inset-0 
                        transition-all 
                        duration-300
                        ${theme === 'dark' 
                            ? 'rotate-90 scale-0' 
                            : 'rotate-0 scale-100'
                        }
                        ${theme === 'dark' 
                            ? 'text-gray-900' 
                            : 'text-white'
                        }
                    `}
                    size={16}
                />
            </div>
            <span className="text-xs font-medium">
                {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
        </button>
    );
};

export default ThemeButton;
