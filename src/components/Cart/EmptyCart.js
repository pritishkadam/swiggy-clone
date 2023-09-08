import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center relative -top-24 '>
      <div>
        <img
          className='w-80 mx-auto mb-0'
          src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'
          alt=''
        />
        <h2 className='text-3xl font-semibold text-center my-4'>Your cart is empty</h2>
        <h3 className='text-base font-medium text-gray-800'>
          You can go to home page to view more restaurants
        </h3>
        <div className='w-full text-center'>
          <Link to='/'>
            <button className='bg-orange-500 text-white font-medium p-2 my-4 mb-10'>
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
