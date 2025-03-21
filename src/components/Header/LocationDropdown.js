import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const LocationDropdown = (props) => {
  const { handleClick } = props;
  const location = useSelector((store) => store.location.locationID);

  return (
    <div className='hover:text-orange-600 cursor-pointer'>
      <h3 className='flex items-center gap-2 text-sm' onClick={handleClick}>
        <span className='border-b-2 font-medium border-gray-600 text-gray-800 hover:text-orange-600 '>
          {location}
        </span>
        <BsChevronDown />
      </h3>
    </div>
  );
};

export default LocationDropdown;
