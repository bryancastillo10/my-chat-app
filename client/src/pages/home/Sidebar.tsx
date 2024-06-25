import { SearchInput, Conversations } from "../../components";

const Sidebar = () => {
  return (
    <div className="border-r-2  border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
    </div>
  );
};

export default Sidebar;
