import * as React from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type ButtonProps = {
  variant?: ButtonVariant;
  asChild?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primaryDark border border-brand-primaryDark shadow-sm",
  secondary:
    "bg-brand-accent text-brand-primaryDark hover:bg-[#e0b84f] border border-[#ddb246]",
  ghost: "bg-transparent hover:bg-black/5 border border-black/10 dark:border-white/10 dark:hover:bg-white/5",
  danger: "bg-brand-error text-white hover:opacity-90 border border-brand-error",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", asChild = false, children, ...props },
  ref
) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
    return React.cloneElement(child, {
      ...props,
      className: cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
        variantClass[variant],
        className,
        child.props.className
      ),
    });
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
        variantClass[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
