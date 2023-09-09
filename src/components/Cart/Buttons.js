import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearCart } from '../../utils/cartSlice';

const Buttons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleClearButton = (e) => {
    e.preventDefault();
    dispatch(clearCart());
  };

  return (
    <div id='buttons' className='flex justify-between pt-10'>
      <div className=''>
        <button
          onClick={handleBackButton}
          className='border border-orange-500 bg-white font-semibold py-2 px-5 rounded-sm leading-5 hover:shadow-md text-[#3d4152]'
        >
          BACK
        </button>
      </div>

      <div className=''>
        <button
          onClick={handleClearButton}
          className=' bg-orange-500 font-semibold py-2 px-5 rounded-sm leading-5 hover:shadow-md text-white'
        >
          CLEAR CART
        </button>
      </div>
    </div>
  );
};

export default Buttons;
