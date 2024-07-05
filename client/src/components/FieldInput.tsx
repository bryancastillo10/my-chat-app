import { ChangeEvent } from "react";

interface FieldInputProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isSignUpPage?: boolean;
  textLabel?: string | null;
  type: string;
  placeholder?: string;
  max?: string;
}

const FieldInput = ({
  id,
  isSignUpPage,
  textLabel,
  type,
  placeholder,
  max,
  value,
  onChange,
}: FieldInputProps) => {
  return (
    <div>
      {textLabel && (
        <label className="indent-10 my-2 md:my-0 md:indent-0 label p-2">
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
        max={max}
        className="w-full input input-bordered h-8 bg-slate-800"
      />
    </div>
  );
};

export default FieldInput;
