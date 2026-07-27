"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-secondary shadow-md",
      secondary: "bg-secondary text-white hover:bg-primary shadow-md",
      outline: "border border-gray-200 bg-transparent hover:bg-gray-50 text-text-dark",
      ghost: "bg-transparent hover:bg-gray-100 text-text-dark",
      gold: "bg-gold text-white hover:bg-yellow-600 shadow-md",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-12 px-6 py-2",
      lg: "h-14 px-8 text-base",
      icon: "h-12 w-12",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
