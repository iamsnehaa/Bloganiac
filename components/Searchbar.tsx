import { useState } from "react";
import { Search } from "lucide-react"; // For search icon

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative flex items-center w-full max-w-sm">
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={handleSearch}
        className="w-full border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <Search className="absolute right-3 text-gray-500" size={18} />
    </div>
  );
};

export default SearchBar;
