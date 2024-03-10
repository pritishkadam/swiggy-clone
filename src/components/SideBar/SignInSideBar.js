import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cancelBtn from './../../assets/img/cancel-button.svg';
import { close_login } from '../../utils/loginSlice';
import { useLocation, useNavigate } from 'react-router';
import { setLocationID } from '../../utils/locationSlice';

const SignInSideBar = (props) => {
  const { locations } = props;
  const [location, setLocation] = useState('Mumbai');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoginOpen = useSelector((store) => store.login.isLoginOpen);
  // Early Return
  if (!isLoginOpen) return null;

  const { pathname } = useLocation();

  const handleClose = () => {
    dispatch(close_login());
  };

  const handleSubmit = () => {
    navigate(pathname);
  };

  return (
    <div className='absolute z-20'>
      <div
        className='w-screen h-screen bg-black opacity-80'
        onClick={handleClose}
      />
      <div className='w-2/5 h-full bg-white fixed top-0 right-0 font-roboto'>
        <div className='flex flex-col w-2/3 mx-12 my-10 gap-4'>
          <button onClick={handleClose} className='self-start'>
            <img alt='cancel' src={cancelBtn} className='w-4' />
          </button>
          <div className='my-2'>
            <div className='flex w-full justify-between'>
              <div className='flex flex-col'>
                <h3 className='text-3xl mt-5'>Login</h3>
                <h4 className='text-xs font-semibold my-1 mb-2'>
                  or{' '}
                  <span className='text-orange-500 cursor-pointer'>
                    create an account
                  </span>
                </h4>
                <h4 className='w-8 border border-black border-b my-6' />
              </div>
              <img
                src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'
                alt=''
                className='w-28 h-28'
              />
            </div>

            <form
              className='w-full my-4 text-lg'
              method='POST'
              onSubmit={handleSubmit}
            >
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='w-full p-5 border border-slate-300 mb-4 outline-none'
              />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='w-full p-5 border border-slate-300 mb-4 outline-none'
              />
              <button
                type='submit'
                className='w-full p-5 bg-orange-500 text-white font-semibold'
                disabled={true}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSideBar;
