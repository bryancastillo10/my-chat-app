import { ReactNode } from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  variant?: string;
  action?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({ type, variant, action, children, disabled }: ButtonProps) => {
  const getClassName = (variant: string | undefined) => {
    switch (variant) {
      case "accept":
        return "px-4 py-2 bg-emerald-600 hover:bg-emerald-700";
      case "cancel":
        return "px-4 py-2 bg-rose-500 hover:bg-rose-700";
      case "update":
        return "px-2 py-0 bg-sky-400 text-sm hover:bg-sky-700"
      case "cancel-edit":
        return "px-2 py-0 bg-rose-500 text-sm hover:bg-rose-700"
      default:
        return "bg-sky-500";
    }
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={` rounded-2xl text-white ${getClassName(variant)}`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
