import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BillingPage from './BillingPage';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    setCartCount(Object.keys(cart).length);
  }, [cart]);

  return (
    <>
      {cartCount === 0 && <EmptyCart />}
      {cartCount !== 0 && <BillingPage />}
    </>
  );
};

export default Cart;
