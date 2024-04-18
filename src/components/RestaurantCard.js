import { IMG_CDN_URL } from '../config';
import ratingStar from './../assets/img/ratingStar.svg';
import offers from './../assets/img/offers.svg';

const getRatingColor = (avgRating) => {
  if (avgRating && !avgRating.isNan) {
    if (Math.floor(avgRating) === 4) {
      return 'green';
    }
  }
  return 'orange';
};

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = props;

  const { slaString } = sla;
  const header = aggregatedDiscountInfoV3?.header;
  const subHeader = aggregatedDiscountInfoV3?.subHeader;
  const discountTag = aggregatedDiscountInfoV3?.discountTag;

  const showOffer = header && subHeader && discountTag ? true : false;

  return (
    <div className='w-[18rem] h-full p-4 border border-gray-200 hover:border-gray-300 hover:shadow'>
      <img
        src={`${IMG_CDN_URL}` + cloudinaryImageId}
        alt='card'
        className='w-full'
      />
      <div className='flex flex-col w-full h-24'>
        <h2 className='text-lg font-medium leading-6 my-2'>{name}</h2>
        <h3 className='text-xs overflow-hidden'>{cuisines.join(', ')}</h3>
      </div>
      <div className='flex flex-row items-center justify-between text-gray-800 pb-4 border-b border-gray-300'>
        <h3
          className={`text-xs font-medium flex text-white px-1 ${
            getRatingColor(avgRating) === 'green'
              ? 'bg-[#48c479]'
              : 'bg-[#db7c38]'
          }`}
        >
          <img src={ratingStar} alt='rating' className='w-3 bg-transparent' />{' '}
          &nbsp;
          <span>{avgRating}</span>
        </h3>
        <span className='text-[8px] mx-1'> &#9679; </span>
        <h3 className='text-xs'>{slaString}</h3>
        <span className='text-[8px] mx-1'> &#9679; </span>
        <h3 className='text-xs'>{costForTwo}</h3>
      </div>
      <div id='offer' className='flex items-center h-10 text-[#8a584b] gap-2'>
        {showOffer && (
          <>
            <img src={offers} alt='offer' className='w-4' />
            <span className='text-xs font-medium'>{header}</span>
            <span className='text-xs font-medium'>{subHeader}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
