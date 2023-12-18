

const SearchBar = ({ searchQuery, setSearchQuery, getProduct}) => (
    <div>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Sneakers</span>
        </label>
        <input
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search Sneakers"
            name="s" 
        />
        <button type="button" onClick={() => getProduct(searchQuery)}>Search</button>
    </div>
);

export default SearchBar;