import { Link } from 'react-router-dom';
import Logo from './Logo';
import LocationDropdown from './LocationDropdown';
import optionsConfig from './optionsConfig';
import { useDispatch, useSelector } from 'react-redux';
import { toggle_menu } from '../../utils/locationSlice';
import {locationConfig} from '../SideBar/locationConfig';
import { toggle_login } from '../../utils/loginSlice';

const HeaderComponent = () => {
  const dispatch = useDispatch();
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
      <div className='flex w-11/12 lg:w-9/12 mx-auto justify-between px-4 items-center h-full'>
        <div className='flex items-center gap-10'>
          <Logo />
          <LocationDropdown handleClick={handleClick} />
        </div>
        <nav>
          <ul className='flex'>
            {options &&
              options.map(({ id, title, icon, redirectTo }) => {
                return (
                  <li className='mx-2 text-gray-700'>
                    <Link to={redirectTo}>
                      <h3
                        className='flex items-center font-medium'
                        onClick={redirectTo === '' ? handleSignIn : ''}
                      >
                        <img alt='icon' src={icon} className='w-8 p-2' />
                        <span className='text-base'>{title}</span>
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
