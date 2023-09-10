import React, { useEffect, useState } from 'react';
import { IMG_CDN_URL } from '../../config';
import star from './../../assets/img/black-star.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './../../utils/cartSlice';
import ConfirmationOverlay from './ConfirmationOverlay';

const DishCard = (props) => {
  const { dish, showOverlay, setShowOverlay } = props;
  const { info, restaurant } = dish;
  const { id, name, price, imageId } = info;
  const { info: restaurantInfo } = restaurant;
  const {
    id: restaurantId,
    name: restaurantName,
    avgRatingString,
    sla,
    areaName,
    cloudinaryImageId,
  } = restaurantInfo;
  const { slaString } = sla;

  const restaurantData = {
    restaurantId,
    restaurantName,
    areaName,
    cloudinaryImageId,
  };

  const [imgError, setImgError] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const menuDetails = { ...info, ...restaurantData };

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  let priceStr = '-';
  if (price) {
    priceStr = price !== 0 ? price / 100 : 0;
  }

  useEffect(() => {
    if (Object.keys(cart).includes(id)) {
      const foodItem = cart[id];
      const { quantity: foodQuantity } = foodItem;
      console.log('FoodItem: ', foodItem);
      console.log('FOodQuantity: ', foodQuantity);
      setQuantity(foodQuantity);
      setShowQuantity(true);
    } else {
      setQuantity(0);
      setShowQuantity(false);
    }
  }, [cart]);

  const onImgError = (e) => {
    setImgError(true);
  };

  const handleAddButton = () => {
    setShowQuantity(true);
    if (cart && Object.keys(cart).length !== 0) {
      const cartItem = cart[Object.keys(cart)[0]];
      const { restaurantId: resId } = cartItem;
      if (restaurantId !== resId) {
        setShowOverlay(true);
        setShowQuantity(false);
      } else {
        dispatch(addToCart(menuDetails));
      }
    } else {
      dispatch(addToCart(menuDetails));
    }
  };

  const handleRemoveButton = () => {
    if (quantity - 1 === 0) {
      setShowQuantity(false);
    }
    dispatch(removeFromCart(menuDetails));
  };

  return (
    <div className='w-10/12 lg:w-5/12 rounded-2xl mx-auto mb-10 border shadow-lg flex flex-col px-3'>
      <div id='header' className='w-full flex border-b-2 border-dotted py-4'>
        <div id='details' className='w-full flex flex-col'>
          <h2 className='text-base font-bold'>By {restaurantName}</h2>
          <h3 className='w-24 text-xs font-normal flex justify-between gap-1'>
            <span className='flex'>
              <img src={star} alt='rating' className='w-3 mr-1' />
              {avgRatingString}
            </span>
            <span>{slaString}</span>
          </h3>
        </div>
        <Link to={`/restaurant/${restaurantId}`} key={restaurantId}>
          <div className='text-gray-400'>
            <span className='text-2xl'>&#10132;</span>
          </div>
        </Link>
      </div>
      <div className='flex w-full my-6'>
        <div className='w-full flex flex-col'>
          <h2 className='text-base font-medium'>{name}</h2>
          <h3 className='flex'>{priceStr} &#8377;</h3>
        </div>
        <div id='end' className='relative w-40 h-24 self-center'>
          {imgError && (
            <div className='w-full h-24 rounded-lg flex justify-center items-center bg-gray-200 text-gray-400 font-medium'>
              NO IMG
            </div>
          )}
          {!imgError && (
            <img
              src={IMG_CDN_URL + imageId}
              alt='dish'
              className='w-full h-24 rounded-lg'
              onError={onImgError}
            />
          )}
          {!showQuantity && (
            <button
              onClick={handleAddButton}
              className='w-10/12 absolute -bottom-2 left-2 rounded-md shadow-md text-xs font-medium bg-white text-green-500 py-2 px-4 mx-auto'
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
    </div>
  );
};

export default DishCard;
