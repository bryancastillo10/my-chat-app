import { SquarePower } from "lucide-react";
import { SearchInput, Conversations, Button } from "../../components";

const Sidebar = () => {
  return (
    <div className="border rounded-lg border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <Button label="Logout" icon={<SquarePower color="#f4f3f2" size="28" />} />
    </div>
  );
};

export default Sidebar;
