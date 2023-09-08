const RestaurantDetailsSkeleton = () => {
  return (
    <div className='animate-pulse flex flex-col'>
      <div
        id='restaurant-info'
        className='w-full flex justify-between py-4 border-dashed border-b border-b-gray-300'
      >
        <div className='w-2/3'>
          <h2 className='w-full h-5 bg-gray-300' />
          <div className='w-1/2 h-5 my-2 bg-gray-300' />
        </div>
        {/* Rating Skeleton starts */}
        <div className='w-20 flex flex-col border border-gray-300 rounded-md'>
          <div className='w-10/12 flex justify-center items-center border-b border-b-gray-300 mx-auto py-2'>
            <div className='w-full h-4 bg-gray-300' />
            {/* {avgRatingString} */}
          </div>
          <div className='w-10/12 mx-auto my-1 h-4 bg-gray-300' />
        </div>
        {/* Rating Skeleton ends */}
      </div>
      <div className='flex gap-4 my-2 w-1/3 h-8'>
        <h3 className='flex w-1/2 bg-gray-300' />
        <h3 className='flex w-1/2 bg-gray-300' />
      </div>
      {/* Coupon list start */}
      <div className='w-40 h-12 flex flex-col gap-1 px-3 py-2 border border-slate-300 rounded-md mr-2'>
        <h2 className='w-full h-6 bg-gray-300' />
        <h3 className='w-full h-6 bg-gray-300' />
      </div>
      {/* Coupon list ends */}
    </div>
  );
};

export default RestaurantDetailsSkeleton;
