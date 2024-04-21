import React from 'react';

const CategoriesSkeleton = () => {
  //   return <>HIII</>;
  return (
    <div className='w-full flex mx-auto justify-evenly bg-slate-100'>
      {Array(6)
        .fill('')
        .map((el, index) => (
          <CategorySkeleton key={index} />
        ))}
    </div>
  );
};

const CategorySkeleton = () => {
  return (
    <div className='flex flex-col w-24 py-1 mb-1'>
      <div className='w-full animate-pulse border h-16 bg-slate-300 mb-1 rounded-md' />
      <h3 className='w-14 mx-auto text-xs font-medium capitalize h-4 bg-slate-300' />
    </div>
  );
};

export default CategoriesSkeleton;
