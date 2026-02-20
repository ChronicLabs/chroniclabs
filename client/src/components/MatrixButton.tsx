import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface MatrixButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function MatrixButton({ 
  children, 
  variant = "primary", 
  size = "md",
  isLoading, 
  className = "", 
  disabled,
  ...props 
}: MatrixButtonProps) {
  
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden font-bold tracking-widest transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none";
  
  const variants = {
    primary: "bg-[#00FF41] text-black hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
    secondary: "bg-white text-black hover:bg-[#00FF41] transition-colors",
    outline: "bg-transparent text-[#00FF41] border border-[#00FF41] hover:bg-[#00FF41] hover:text-black hover:shadow-[0_0_15px_rgba(0,255,65,0.5)]",
    danger: "bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-black hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
      
      {/* Decorative corner pieces for tech feel */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
    </button>
  );
}
