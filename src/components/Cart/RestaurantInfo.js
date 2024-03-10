import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from './../../config';

const RestaurantInfo = () => {
  const cart = useSelector((store) => store.cart);
  const [data, setData] = useState(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (cart && cart.length !== 0) {
      setData(cart[Object.keys(cart)[0]]);
    }
  }, [cart]);

  const onImgError = (e) => {
    setImgError(true);
  };

  return (
    <>
      {data && (
        <div className='w-11/12 flex gap-4'>
          <div id='start' className='w-1/3 h-20 bg-gray-300'>
            {imgError && (
              <div className='w-full h-full rounded-lg flex justify-center items-center bg-gray-200 text-gray-400 font-medium'>
                NO IMG
              </div>
            )}
            {!imgError && (
              <img
                src={IMG_CDN_URL + data.imageId}
                alt='hotel'
                className='w-full h-full'
                onError={onImgError}
              />
            )}
          </div>
          <div id='end' className='self-center'>
            <h2 className='text-lg font-semibold'>{data.restaurantName}</h2>
            <h3 className='text-sm'>{data.areaName}</h3>
            <hr className='w-1/3 border-b-2 border-b-black' />
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantInfo;
