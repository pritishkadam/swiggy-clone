import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';
import OrderBillingDetails from './OrderBillingDetails';
import { useSelector } from 'react-redux';

const OrderList = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    setCartItems(Object.keys(cart));
  }, [cart]);

  return (
    <div className='flex flex-col my-4'>
      {cartItems &&
        cartItems.map((key) => {
          return <OrderRow data={cart[key]} />;
        })}

      <OrderBillingDetails />
    </div>
  );
};

export default OrderList;
