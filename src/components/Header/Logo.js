import SwiggyIcon from './../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <img alt='swiggyIcon' src={SwiggyIcon} className='w-full' />
    </Link>
  );
};

export default Logo;
