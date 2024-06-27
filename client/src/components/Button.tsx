import { ReactNode } from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  variant?: string;
  action: () => void;
  children: ReactNode;
}

const Button = ({ type, variant, action, children }: ButtonProps) => {
  const getClassName = (variant: string | undefined) => {
    switch (variant) {
      case "accept":
        return "bg-emerald-600 hover:bg-emerald-700";
      case "cancel":
        return "bg-rose-500 hover:bg-rose-700";
      default:
        return "bg-sky-500";
    }
  };

  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-2xl text-white ${getClassName(variant)}`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
