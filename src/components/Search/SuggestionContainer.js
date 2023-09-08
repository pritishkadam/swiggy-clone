import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import SuggestionList from './SuggestionList';
import SuggestionListSkeleton from './SuggestionListSkeleton';
import { FETCH_URL, SEARCH_LINK_API } from '../../config';
import { getCuisines } from '../../utils/getDetails';
import { useSelector } from 'react-redux';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import SearchQueryPage from './SearchQueryPage';

const SuggestionContainer = () => {
  const [
    searchText,
    setSearchText,
    callSuggestionAPI,
    setCallSuggestionAPI,
    cuisines,
    suggestions,
    setSearchQuery,
  ] = useOutletContext();

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query');

  return (
    <div>
      {keyword && <SearchQueryPage keyword={keyword} />}
      {!keyword && (
        <>
          <Categories
            cuisines={cuisines}
            searchText={searchText}
            setSearchText={setSearchText}
            setCallSuggestionAPI={setCallSuggestionAPI}
          />
          {callSuggestionAPI && <SuggestionListSkeleton />}
          {suggestions && (
            <SuggestionList
              suggestions={suggestions}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SuggestionContainer;
