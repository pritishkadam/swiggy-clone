import React from 'react';

const SuggestionListSkeleton = () => {
  return (
    <div className='w-full flex flex-col my-2 animate-pulse'>
      {Array(6)
        .fill('')
        .map((el, index) => (
          <SuggestionSkeleton key={index} />
        ))}
    </div>
  );
};

const SuggestionSkeleton = () => {
  return (
    <div className='w-full flex my-2'>
      <div className='w-20 h-16 bg-gray-300 rounded-md' />
      <div className={'flex flex-col justify-center mx-2 gap-2'}>
        <h3 className='w-32 h-5 bg-gray-300' />
        <span className='w-16 h-3 bg-gray-300' />
      </div>
    </div>
  );
};

export default SuggestionListSkeleton;
