interface ButtonProps {
  label: string;
  icon?: JSX.Element;
}

const Button = ({ label, icon: Icon }: ButtonProps) => {
  return (
    <div
      className="mt-auto group flex items-center gap-1 hover:bg-rose-500 
     ease-out duration-500 max-w-fit p-2 rounded-2xl cursor-pointer"
    >
      {Icon}
      <p className="hidden group-hover:block text-white ">{label}</p>
    </div>
  );
};

export default Button;
