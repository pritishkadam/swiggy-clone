import React, { useEffect, useState } from 'react';
import veg from './../../assets/img/veg.svg';
import nonVeg from './../../assets/img/nonveg.svg';
import { IMG_CDN_URL } from './../../config';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../utils/cartSlice';

const Menu = (props) => {
  const { item, lastRow, restaurantInfo } = props;
  const { card } = item;
  const { info } = card;
  const { id, name, description, isVeg, imageId, price, defaultPrice } = info;

  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const menuDetails = { ...info, ...restaurantInfo };

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    if (Object.keys(cart).includes(id)) {
      const foodItem = cart[id];
      const { quantity: foodQuantity } = foodItem;
      setQuantity(foodQuantity);
      setShowQuantity(true);
    }
  }, [cart]);

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

  const handleAddButton = () => {
    setShowQuantity(true);
    dispatch(addToCart(menuDetails));
  };

  const handleRemoveButton = () => {
    if (quantity - 1 === 0) {
      setShowQuantity(false);
    }
    dispatch(removeFromCart(menuDetails));
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
          {!imgError && imageId && (
            <img
              src={IMG_CDN_URL + imageId}
              alt='dish'
              className='w-32 h-24 rounded-lg'
              onError={onImgError}
            />
          )}
          {!showQuantity && (
            <button
              onClick={handleAddButton}
              className='w-10/12 absolute -bottom-2 left-3 rounded-md shadow-md text-xs font-medium bg-white text-green-500 py-2 px-4 mx-auto'
            >
              ADD
            </button>
          )}
          {showQuantity && (
            <div className='w-10/12 flex justify-between items-center absolute -bottom-2 left-3 rounded-md shadow-md text-xs font-medium bg-white text-green-500 px-4 mx-auto'>
              <button onClick={handleRemoveButton} className=''>
                <span className='text-lg'>{'−'}</span>
              </button>
              <span>{quantity}</span>
              <button onClick={handleAddButton}>
                <span className='text-lg'>+</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {!lastRow && <hr className='bg-gray-300 my-6' />}
    </>
  );
};

export default Menu;
