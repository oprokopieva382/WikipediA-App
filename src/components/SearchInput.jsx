export const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className="search-head">
        <h1>WikipediA</h1>
        <br />
        <h3>The Free Encyclopedia</h3>
        <br />
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        autoFocus
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
};
