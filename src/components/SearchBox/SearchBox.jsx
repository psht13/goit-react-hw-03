import css from './SearchBox.module.css'

const SearchBox = ({searchValue, setSearchValue}) => {
const handleInput = (e)=> {
  setSearchValue(e.target.value);
}

  return (
    <div>
      <label className={css.searchInput}>
        <span>Find contacts by name</span>
        <input type="text" name="searchBar" value={searchValue} onChange={handleInput}/>
      </label>
    </div>
  );
};

export default SearchBox;
