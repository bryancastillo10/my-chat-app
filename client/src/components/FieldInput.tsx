
interface FieldInputProps{
    isSignUpPage?: boolean;
    textLabel: string;
    type: string;
    placeholder: string;
}

const FieldInput = ({isSignUpPage,textLabel,type,placeholder}:FieldInputProps) => {
  return (
    <div>
        <label className="label p-2">
              <span className={`text-base label-text ${isSignUpPage ? "text-amber-500":"text-emerald-400"}`}>{textLabel}</span>
        </label>
          <input
              type={type}
              placeholder={placeholder}
              className="w-full input input-bordered h-10"
          />   
    </div>
  )
}

export default FieldInput;
