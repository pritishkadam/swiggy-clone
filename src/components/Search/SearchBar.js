import { Link } from 'react-router-dom';
import searchIcon from './../../assets/img/search.svg';
import cancelBtn from './../../assets/img/cancel-button.svg';

const SearchBar = (props) => {
  const { searchText, setSearchText, setCallSuggestionAPI } = props;

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCallSuggestionAPI(true);
  };

  return (
    <div id='searchBar' className='w-full border mx-auto my-6 flex rounded-sm'>
      <input
        type='text'
        value={searchText}
        onChange={handleSearch}
        className='w-full text-lg pl-4 py-2 outline-none'
        placeholder='Search restaurants and food'
      />
      <button>
        {searchText === '' && (
          <img
            className='w-16 p-1 px-4'
            src={searchIcon}
            alt='searchIcon'
            onClick={handleSearch}
          />
        )}
        {searchText !== '' && (
          <Link to={`/search`}>
            <img
              alt='cancelBtn'
              src={cancelBtn}
              className='w-16 p-1 px-4'
              onClick={() => {
                setSearchText('');
              }}
            />
          </Link>
        )}
      </button>
    </div>
  );
};

export default SearchBar;
