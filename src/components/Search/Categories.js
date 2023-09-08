import React from 'react';
import { IMG_CDN_URL } from '../../config';

const Categories = (props) => {
  const { cuisines, searchText, setSearchText, setCallSuggestionAPI } = props;

  return (
    <div className='w-full'>
      <h3 className='my-4 text-xl font-bold'>Popular Cuisines</h3>
      <div className='w-full overflow-x-scroll flex'>
        {cuisines &&
          cuisines.map((element) => {
            return (
              <Category
                key={element.id}
                element={element}
                setSearchText={setSearchText}
                setCallSuggestionAPI={setCallSuggestionAPI}
              />
            );
          })}
      </div>
      {searchText === '' && <div className='mb-40' />}
    </div>
  );
};

const Category = (props) => {
  const { element, setSearchText, setCallSuggestionAPI } = props;
  const { imageId, action } = element;
  const { text } = action;

  return (
    <div
      className='flex flex-col w-24 h-24 py-1 mx-2 cursor-pointer'
      onClick={() => {
        setCallSuggestionAPI(true);
        setSearchText(text);
      }}
    >
      <img src={IMG_CDN_URL + imageId} alt='food' className='w-full' />
      <h3 className='w-24 text-center text-xs font-medium capitalize'>
        {text}
      </h3>
    </div>
  );
};

export default Categories;
