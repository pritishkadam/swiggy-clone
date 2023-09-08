import React from 'react';

const RestaurantMenuSkeleton = () => {
  return (
    <div className='animate-pulse my-6'>
      <h2 className='w-1/2 h-8 bg-gray-300 text-xl font-bold' />
      <div className='my-8'>
        {Array(6)
          .fill('')
          .map((el, index) => (
            <MenuSkeleton key={index} />
          ))}
        <hr className='h-4 bg-slate-200 rounded-sm my-8' />
      </div>
    </div>
  );
};

const MenuSkeleton = () => {
  return (
    <>
      <div className='w-full flex justify-between relative z-0'>
        <div id='start' className='w-7/12'>
          <h2 className='w-1/2 h-8 bg-gray-300 my-1' />
          <h3 className='w-1/2 h-5 bg-gray-300 my-1' />
          <h3 className='w-full h-5 bg-gray-300' />
        </div>
        <div id='end' className='relative w-32 h-24 self-center'>
          <div className='w-32 h-24 rounded-lg bg-gray-300'></div>
        </div>
      </div>
      <hr className='bg-gray-300 my-6' />
    </>
  );
};

export default RestaurantMenuSkeleton;
