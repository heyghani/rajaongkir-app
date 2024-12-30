interface SearchBarProps {
  query: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar = ({ query, onInputChange, onSearch }: SearchBarProps) => {
  return (
    <div className="mb-4 w-full max-w-md flex gap-2">
      <input
        type="text"
        value={query}
        onChange={onInputChange}
        placeholder="Search location..."
        className="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-800"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 focus:ring-2 focus:ring-blue-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
