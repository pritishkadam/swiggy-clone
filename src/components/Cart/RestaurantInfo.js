import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from './../../config';

const RestaurantInfo = () => {
  const cart = useSelector((store) => store.cart);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (cart && cart.length !== 0) {
      setData(cart[Object.keys(cart)[0]]);
      console.log('CART: ', cart[Object.keys(cart)[0]]);
    }
  }, [cart]);

  return (
    <>
      {data && (
        <div className='w-11/12 flex gap-4'>
          <div id='start' className='w-1/3 h-20 bg-gray-300'>
            <img
              src={IMG_CDN_URL + data.imageId}
              alt='hotel'
              className='w-full h-full'
            />
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
