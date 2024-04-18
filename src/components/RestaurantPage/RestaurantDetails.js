import React from 'react';
import RatingCard from './RatingCard';
import CouponsList from './CouponsList';
import duration from './../../assets/img/duration.svg';
import rupee from './../../assets/img/rs.svg';

const RestaurantDetails = (props) => {
  const { restaurantDetails, restaurantCoupons } = props;
  const { info } = restaurantDetails ? restaurantDetails : {};
  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
  } = info ? info : {};
  const { slaString, lastMileTravelString } = sla ? sla : {};
  const cuisinesStr = cuisines ? cuisines.join(', ') : '';
  return (
    <div className='flex flex-col'>
      <div
        id='restaurant-info'
        className='w-full flex justify-between py-4 border-dashed border-b border-b-gray-300'
      >
        <div>
          <h2 className='text-xl font-medium'>{name}</h2>
          <div className='text-xs font-medium my-2 text-gray-500 leading-4'>
            <h3 className=''>{cuisinesStr}</h3>
            <h3 className=''>
              <span>{areaName}</span>,&nbsp;<span>{lastMileTravelString}</span>
            </h3>
          </div>
        </div>
        <RatingCard avgRatingString={avgRatingString} totalRatingsString={totalRatingsString} />
      </div>
      <div>
        <div className='flex gap-4 my-2'>
          <h3 className='flex'>
            <img alt='duration' src={duration} className='w-4 mr-2' />
            <span className='font-bold'>{slaString}</span>
          </h3>
          <h3 className='flex'>
            <img alt='rs' src={rupee} className='w-4 mr-2' />
            <span className='font-bold'>{costForTwoMessage}</span>
          </h3>
        </div>
        {restaurantCoupons && <CouponsList restaurantCoupons={restaurantCoupons} />}
      </div>
    </div>
  );
};

export default RestaurantDetails;
