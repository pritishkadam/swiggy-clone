import { useEffect, useState } from 'react';
import { FETCH_URL, SEARCH_LINK_API } from './../../config';
import { getCuisines } from './../../utils/getDetails';
import SearchBar from './SearchBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLocationDetails } from '../SideBar/locationConfig';
import ConfirmationOverlay from './ConfirmationOverlay';

const Search = () => {
  const [cuisines, setCuisines] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [callSuggestionAPI, setCallSuggestionAPI] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const location = useSelector((store) => store.location.locationID);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getCategoriesData();
  }, [location]);

  const getCategoriesData = async () => {
    try {
      const { latitude, longitude } = getLocationDetails(location);
      const url = FETCH_URL.replace('LATITUDE', latitude).replace(
        'LONGITUDE',
        longitude
      );
      const response = await fetch(url);
      const resultantData = await response.json();
      const cuisinesList = getCuisines(resultantData?.data?.cards);
      setCuisines(cuisinesList);
    } catch (e) {
      setCuisines(undefined);
    }
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
      setCallSuggestionAPI(false);
      setSuggestions(resultantData?.data?.suggestions);
    } catch (e) {
      console.error('Error in searchSuggestions: ', e);
    }
  };

  useEffect(()=>{
    if(showOverlay) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'unset';
    }
  }, [showOverlay])

  return (
    <>
      {showOverlay && (
        <div>
          <ConfirmationOverlay setShowOverlay={setShowOverlay} />
        </div>
      )}
      <div className='w-8/12 mx-auto'>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          setCallSuggestionAPI={setCallSuggestionAPI}
        />
        {/* {cuisines && ( */}
          <Outlet
            context={[
              searchText,
              setSearchText,
              callSuggestionAPI,
              setCallSuggestionAPI,
              cuisines,
              suggestions,
              setSearchQuery,
              showOverlay,
              setShowOverlay
            ]}
          />
        {/* )} */}
      </div>
    </>
  );
};

export default Search;
