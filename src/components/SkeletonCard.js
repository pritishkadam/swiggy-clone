import React from 'react';

const SkeletonCard = () => {
  return (
    <div className='w-[18rem] h-full animate-pulse p-4 border border-gray-200 hover:border-gray-300 hover:shadow'>
      <div className='w-full h-36 bg-gray-300 ' />
      <div className='flex flex-col w-full h-16 gap-1 my-2'>
        <h2 className='w-11/12 h-8 bg-gray-300 leading-6' />
        <h3 className='w-8/12 h-6 bg-gray-300 text-xs overflow-hidden' />
      </div>
      <div className='w-full border-b border-gray-300 my-2' />

      <div
        id='offer'
        className='w-full bg-gray-300 h-8 text-[#8a584b] gap-2'
      />
    </div>
  );
};

export default SkeletonCard;
