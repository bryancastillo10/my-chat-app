import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-2xl"
      />
      <button className="bg-sky-500 rounded-full p-2 text-center">
        <Search color="#fff" size="32" />
      </button>
    </form>
  );
};

export default SearchInput;
