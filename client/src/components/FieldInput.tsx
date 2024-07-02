import { ChangeEvent } from "react";

interface FieldInputProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isSignUpPage?: boolean;
  textLabel?: string | null;
  type: string;
  placeholder?: string;
}

const FieldInput = ({
  id,
  isSignUpPage,
  textLabel,
  type,
  placeholder,
  value,
  onChange,
}: FieldInputProps) => {
  return (
    <div>
      {textLabel && (
        <label className="label p-2">
          <span
            className={`text-base label-text ${
              isSignUpPage ? "text-amber-500" : "text-emerald-400"
            }`}
          >
            {textLabel}
          </span>
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full input input-bordered h-8 bg-slate-800"
      />
    </div>
  );
};

export default FieldInput;
