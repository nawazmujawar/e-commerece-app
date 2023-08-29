import "./SearchBar.css";

const SearchBar = () => {
  // * Use Debouncing for handling Searching
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Search for products, brands and more " />
    </div>
  );
};

export default SearchBar;
