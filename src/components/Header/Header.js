import { Link } from 'react-router-dom';
import Logo from './Logo';
import LocationDropdown from './LocationDropdown';
import optionsConfig from './optionsConfig';
import { useDispatch, useSelector } from 'react-redux';
import { toggle_menu } from '../../utils/locationSlice';
import { locationConfig } from '../SideBar/locationConfig';
import { toggle_login } from '../../utils/loginSlice';
import { useEffect, useState } from 'react';
import filledCartIcon from './../../assets/img/filledCart.png';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    if (cart) {
      setCartItems(Object.keys(cart).length);
    }
  }, [cart]);

  const options = optionsConfig();

  const handleClick = () => {
    dispatch(toggle_menu());
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(toggle_login());
  };

  return (
    <div
      id='headerComponent'
      className='max-w-full h-24 sticky top-0 shadow-md bg-white z-10'
    >
      <div className='flex w-full lg:w-9/12 mx-auto justify-between px-4 items-center h-full'>
        <div className='flex items-center gap-2 sm:gap-4 md:gap-10'>
          <Logo />
          <LocationDropdown handleClick={handleClick} />
        </div>
        <nav>
          <ul className='flex'>
            {options &&
              options.map(({ id, title, icon, redirectTo }) => {
                return (
                  <li key={id} className='mx-1 md:mx-2 text-gray-700'>
                    <Link to={redirectTo}>
                      <h3
                        className='flex items-center font-medium'
                        onClick={redirectTo === '' ? handleSignIn : () => {}}
                      >
                        {title === 'Cart' ? (
                          <div className='relative'>
                            <img
                              alt='icon'
                              src={
                                cartItems && cartItems.length !== 0
                                  ? filledCartIcon
                                  : icon
                              }
                              className='w-4 md:w-9 md:p-2'
                            />

                            <span
                              className={
                                `absolute text-xs md:text-base bottom-0 md:top-0 left-0 md:left-2 mt-[6px] px-1
                                  ${cartItems && cartItems.length !== 0
                                  ? ' text-white'
                                  : '' }`}
                            >
                              {cartItems}
                            </span>
                          </div>
                        ) : (
                          <img
                            alt='icon'
                            src={icon}
                            className='w-3 md:w-8 md:p-2'
                          />
                        )}
                        <span className='text-xs sm:text-sm md:text-base'>
                          {title}
                        </span>
                      </h3>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
