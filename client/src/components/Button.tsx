import { ReactNode, FormEvent } from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  variant?: string;
  action?: (e: FormEvent<HTMLFormElement>) => void | Promise<void>;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({ type, variant, action, children, disabled }: ButtonProps) => {
  const getClassName = (variant: string | undefined) => {
    switch (variant) {
      case "accept":
        return "px-4 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700";
      case "cancel":
        return "px-4 py-2 rounded-2xl bg-rose-500 hover:bg-rose-700";
      case "update":
        return "p-2 rounded-full bg-emerald-400 text-sm hover:bg-emerald-700";
      case "cancel-edit":
        return "p-2 rounded-full bg-rose-500 text-sm hover:bg-rose-700";
      default:
        return "bg-sky-500";
    }
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={` text-white ${getClassName(variant)}`} 
      onClick={action as never}
    >
      {children}
    </button>
  );
};

export default Button;
