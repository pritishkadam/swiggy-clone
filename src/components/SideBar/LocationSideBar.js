import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { close_menu, setLocationID } from '../../utils/locationSlice';
import cancelBtn from './../../assets/img/cancel-button.svg';
import { Link } from 'react-router-dom';

const LocationSideBar = (props) => {
  const { locations } = props;
  const initialLocation = useSelector((store) => store.location.locationID);
  const [location, setLocation] = useState(initialLocation);
  const dispatch = useDispatch();
  const isLocationOpen = useSelector((store) => store.location.isLocationOpen);
  // Early Return
  if (!isLocationOpen) return null;

  const handleOnClick = (e) => {
    setLocation(e.target.value);
    dispatch(setLocationID(e.target.value));
  };

  const handleClose = () => {
    dispatch(close_menu());
  };

  return (
    <div className='absolute z-20'>
      <div
        className='w-screen h-screen fixed bg-black opacity-80'
        onClick={handleClose}
      />
      <div className='w-full md:w-2/5 h-screen bg-white fixed top-0 left-0 font-roboto'>
        <div className='flex flex-col w-2/3 mx-auto my-10 gap-4'>
          <button onClick={handleClose} className='self-start'>
            <img alt='cancel' src={cancelBtn} className='w-4' />
          </button>
          <select
            id='location'
            onChange={handleOnClick}
            value={location}
            className='border p-4 w-full text-lg'
          >
            {locations &&
              locations.map(({ id, value }) => {
                return (
                  <option key={id} value={value}>
                    {value}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LocationSideBar;
