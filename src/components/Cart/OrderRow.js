import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../utils/cartSlice';

const OrderRow = (props) => {
  const { data } = props;
  if(!data) {
    return null;
  }
  const { id, name, defaultPrice, price } = data;

  const [quantity, setQuantity] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);
  
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    if (Object.keys(cart).includes(id)) {
      const foodItem = cart[id];
      const { quantity: foodQuantity } = foodItem;
      setQuantity(foodQuantity);
      const foodPrice = getActualPrice(price);
      setDisplayPrice(foodPrice * foodQuantity);
    }
  }, [cart]);

  const getActualPrice = (price) => {
    let foodPrice = 0;
    if (price || price === 0) {
      foodPrice = price;
    } else if (defaultPrice || defaultPrice === 0) {
      foodPrice = defaultPrice;
    } 
    return foodPrice !== 0 ? foodPrice / 100 : 0;
  };

  let priceStr = '-';

  const handleAddButton = () => {
    dispatch(addToCart(data));
  };

  const handleRemoveButton = () => {
    dispatch(removeFromCart(data));
  };

  return (
    <div className='flex items-center mb-2'>
      <h3 className='text-sm w-3/5 md:w-2/5'>{name}</h3>
      <div className='w-2/4 md:w-1/4 border border-gray-300 flex justify-between items-center font-medium bg-white px-1 mx-auto'>
        <button onClick={handleRemoveButton}>
          <span className='text-xl text-red-500'>{'−'}</span>
        </button>
        <span className='text-base font-normal'>{quantity}</span>
        <button onClick={handleAddButton}>
          <span className='text-xl text-green-500'>+</span>
        </button>
      </div>
      <h3 className='text-base w-24 text-center'>
        <span>&#8377; {displayPrice}</span>
      </h3>
    </div>
  );
};

export default OrderRow;
