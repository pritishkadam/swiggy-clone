import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice } from '../../utils/getDetails';

const OrderBillingDetails = () => {
  const [itemPrice, setItemPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    const price = getTotalPrice(cart);
    setItemPrice(price);
    const finalAmount = Number(price + 50 + 13).toFixed(2);
    setTotalPrice(finalAmount);
  }, [cart]);

  return (
    <div className='flex flex-col text-gray-600 text-sm'>
      <h2 className='w-full my-4 text-base text-black'>Bill Details</h2>
      <h3 className='flex justify-between pb-2'>
        <span>Item Total</span>
        <span>&#8377; {itemPrice}</span>
      </h3>
      <h3 className='flex justify-between pb-2 border-b border-b-gray-600'>
        <span>Delivery Fee</span>
        <span>&#8377; 50</span>
      </h3>
      <h3 className='flex justify-between my-2'>
        <span>GST and Restaurant Charges</span>
        <span>&#8377; 13</span>
      </h3>
      <hr className='w-full h-1 bg-gray-900' />
      <h3 className='flex justify-between my-2 text-gray-900 font-bold text-base'>
        <span>TO PAY</span>
        <span>&#8377; {totalPrice}</span>
      </h3>
    </div>
  );
};

export default OrderBillingDetails;
