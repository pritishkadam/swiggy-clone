import React, { useState } from 'react';
import veg from './../../assets/img/veg.svg';
import nonVeg from './../../assets/img/nonveg.svg';
import { IMG_CDN_URL } from './../../config';

const Menu = (props) => {
  const { item, lastRow } = props;
  const { card } = item;
  const { info } = card;
  const { id, name, description, isVeg, imageId, price, defaultPrice } = info;

  let priceStr = '-';
  if (price) {
    priceStr = price !== 0 ? price / 100 : 0;
  } else if (defaultPrice) {
    priceStr = defaultPrice !== 0 ? defaultPrice / 100 : 0;
  }

  const [imgError, setImgError] = useState(false);

  const onImgError = (e) => {
    setImgError(true);
  };

  return (
    <>
      <div key={id} className='flex justify-between relative z-0'>
        <div id='start' className='w-7/12'>
          <img src={isVeg === 1 ? veg : nonVeg} alt='type' className='w-4' />
          <h2 className='my-1 font-medium text-base'>{name}</h2>
          <h3 className='my-1'>
            <span>{priceStr} &#8377;</span>
          </h3>
          <h3 className='text-xs font-medium text-gray-600'>{description}</h3>
        </div>
        <div id='end' className='relative w-32 h-24 self-center'>
          {imgError && (
            <div className='w-32 h-24 rounded-lg flex justify-center items-center bg-gray-200 text-gray-400 font-medium'>
              NO IMG
            </div>
          )}
          {!imgError && (
            <img
              src={IMG_CDN_URL + imageId}
              alt='dish'
              className='w-32 h-24 rounded-lg'
              onError={onImgError}
            />
          )}
          <button className='w-10/12 absolute -bottom-1 left-3 rounded-md shadow-md text-xs font-medium bg-white text-green-500 py-2 px-4 mx-auto'>
            ADD
          </button>
        </div>
      </div>
      {!lastRow && <hr className='bg-gray-300 my-6' />}
    </>
  );
};

export default Menu;
