const SearchBar = ({ onSearch }) => (
    <input
      type="text"
      placeholder="Search products"
      onChange={e => onSearch(e.target.value)}
    />
  );
  
  export default SearchBar;
  