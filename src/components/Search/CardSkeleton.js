import React from 'react';

const CardSkeleton = () => {
  return (
    <div className='w-8/12 animate-pulse md:w-5/12 rounded-2xl mx-auto mb-10 border shadow-xl flex flex-col px-3'>
      <div id='header' className='w-full flex border-b-2 border-dotted py-4'>
        <div id='details' className='w-full flex flex-col'>
          <h2 className='w-48 h-6 bg-gray-300 text-base font-bold' />
        </div>
      </div>
      <div className='flex w-full my-6'>
        <div className='w-full flex flex-col gap-2'>
          <h2 className='w-36 h-6 bg-gray-300 text-xl font-medium' />
          <h3 className='w-24 h-6 bg-gray-300 flex' />
        </div>
        <div id='end' className='relative w-40 h-24 bg-gray-300 self-center' />
      </div>
    </div>
  );
};

export default CardSkeleton;
