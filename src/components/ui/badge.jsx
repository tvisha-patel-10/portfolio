import * as React from "react";

// Simple Badge component without external dependencies
export function Badge({ 
  children, 
  variant = "default", 
  className = "",
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors";
  
  const variantStyles = {
    default: "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80",
    secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
    destructive: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80",
    outline: "text-slate-950 hover:bg-slate-100 hover:text-slate-900 border-slate-200"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
}

export default Badge;