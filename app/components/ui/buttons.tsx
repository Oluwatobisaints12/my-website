import React from "react";

type ButtonVariant =
  | "primary"
  | "dark"
  | "ghost"
  | "icon"
  | "modeToggleLight"
  | "modeToggleDark";

type ButtonSize = "default" | "compact" | "wide" | "nav" | "icon" | "modeToggle";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-[#F57F17] text-white hover:bg-yellow-800 hover:opacity-75",
  dark: "bg-[#0D0D0D] text-white hover:opacity-75",
  ghost: "bg-transparent border-0 shadow-none",
  icon: "bg-transparent border-0 shadow-none",
  modeToggleLight: "bg-[#0D0D0D] text-white",
  modeToggleDark: "bg-white text-[#1C1B1B]",
};

const buttonSizes: Record<ButtonSize, string> = {
  default: "px-6 py-3 rounded-md",
  compact: "px-[1.25rem] py-[12px] rounded-[6px]",
  wide: "py-[12px] px-[34px] rounded-[8px] md:py-[6px] md:px-[25px]",
  nav: "p-0 rounded-none",
  icon: "p-0 rounded-md",
  modeToggle:
    "py-[6px] px-[8px] rounded-[8px] gap-[8px] md:w-[79px] md:h-[18px] md:p-0 md:gap-[4px] lg:w-[121px] lg:h-[32px]",
};

const joinClasses = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      className,
      type,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={joinClasses(
          "inline-flex items-center justify-center cursor-pointer whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F57F17] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
