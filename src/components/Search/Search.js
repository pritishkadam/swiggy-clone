import { useEffect, useState } from 'react';
import { FETCH_URL, SEARCH_LINK_API } from './../../config';
import { getCuisines } from './../../utils/getDetails';
import SearchBar from './SearchBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLocationDetails } from '../SideBar/locationConfig';

const Search = () => {
  const [cuisines, setCuisines] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [callSuggestionAPI, setCallSuggestionAPI] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useSelector((store) => store.location.locationID);

  useEffect(() => {
    getCategoriesData();
  }, [location]);

  const getCategoriesData = async () => {
    const { latitude, longitude } = getLocationDetails(location);
    const url = FETCH_URL.replace('LATITUDE', latitude).replace(
      'LONGITUDE',
      longitude
    );
    const response = await fetch(url);
    const resultantData = await response.json();
    const cuisinesList = getCuisines(resultantData?.data?.cards);
    console.log('CuisinesList: ', cuisinesList);
    setCuisines(cuisinesList);
  };

  useEffect(() => {
    if (callSuggestionAPI) {
      getSearchSuggestions();
    }
    if (searchText === '') {
      setSuggestions([]);
    }
  }, [searchText, callSuggestionAPI]);

  const getSearchSuggestions = async () => {
    try {
      const { latitude, longitude } = getLocationDetails(location);
      const url = SEARCH_LINK_API.replace('LATITUDE', latitude).replace(
        'LONGITUDE',
        longitude
      );
      const response = await fetch(url + searchText);
      const resultantData = await response.json();
      console.log('Search: resultantData: ', resultantData);
      setCallSuggestionAPI(false);
      setSuggestions(resultantData?.data?.suggestions);
    } catch (e) {
      console.error('Error in searchSuggestions: ', e);
    }
  };

  return (
    <div className='w-8/12 mx-auto'>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        setCallSuggestionAPI={setCallSuggestionAPI}
      />
      {/* <Categories
        cuisines={cuisines}
        searchText={searchText}
        setSearchText={setSearchText}
        setCallSuggestionAPI={setCallSuggestionAPI}
      />
      {callSuggestionAPI && <SuggestionListSkeleton />}
      {suggestions && (
        <SuggestionList
          suggestions={suggestions}
          setSearchQuery={setSearchQuery}
        />
      )} */}
      {cuisines && (
        <Outlet
          context={[
            searchText,
            setSearchText,
            callSuggestionAPI,
            setCallSuggestionAPI,
            cuisines,
            suggestions,
            setSearchQuery,
          ]}
        />
      )}
    </div>
  );
};

export default Search;