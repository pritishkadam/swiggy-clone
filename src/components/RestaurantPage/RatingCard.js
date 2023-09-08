import React from 'react';
import ratingStar from './../../assets/img/greenStar.svg';

const RatingCard = (props) => {
  const { avgRatingString, totalRatingsString } = props;
  return (
    <div className='w-20 flex flex-col border border-gray-300 rounded-md'>
      <div className='w-10/12 flex justify-center items-center border-b border-b-gray-300 mx-auto py-2'>
        <img src={ratingStar} alt='rating' className='w-6' />
        <span className='text-base font-medium text-green-500'>
          {avgRatingString}
        </span>
      </div>
      <span className='text-xs text-gray-600 font-medium text-center py-1'>
        {totalRatingsString}
      </span>
    </div>
  );
};

export default RatingCard;
