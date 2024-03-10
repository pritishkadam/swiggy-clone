import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import SuggestionList from './SuggestionList';
import SuggestionListSkeleton from './SuggestionListSkeleton';
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
    showOverlay,
    setShowOverlay,
  ] = useOutletContext();

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('query');

  return (
    <div>
      {keyword && (
        <SearchQueryPage
          keyword={keyword}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
      )}
      {!keyword && (
        <>
          <Categories
            cuisines={cuisines}
            searchText={searchText}
            setSearchText={setSearchText}
            setCallSuggestionAPI={setCallSuggestionAPI}
          />
          {callSuggestionAPI && <SuggestionListSkeleton />}
          {suggestions && <SuggestionList suggestions={suggestions} />}
        </>
      )}
    </div>
  );
};

export default SuggestionContainer;
