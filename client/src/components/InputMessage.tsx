import { Send } from "lucide-react";

interface InputMessageProps {
  type: string;
  placeholder: string;
}

const InputMessage = ({ type, placeholder }: InputMessageProps) => {
  return (
    <form className="px-4 my-3">
      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <Send color="#fff" />
        </button>
      </div>
    </form>
  );
};

export default InputMessage;
