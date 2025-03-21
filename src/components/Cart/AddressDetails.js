import React from 'react';
import { useSelector } from 'react-redux';

const AddressDetails = () => {
  const location = useSelector((store) => store.location.locationID);

  return (
    <div className='w-full h-auto bg-white p-5 mb-5'>
      <div id='top' className='w-full md:w-2/3 relative flex'>
        <svg
          stroke='currentColor'
          fill='currentColor'
          stroke-width='0'
          viewBox='0 0 24 24'
          className=' bg-gray-900 text-white text-3xl my-1 p-1'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Location_On'>
            <g>
              <path d='M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z'></path>
              <path d='M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z'></path>
            </g>
          </g>
        </svg>
        <div className='flex flex-col mx-2'>
          <h3 className='text-lg font-semibold'>Select delivery address</h3>
          <h3 className='text-base text-gray-600 leading-6'>
            You have a saved address in this location
          </h3>
        </div>
      </div>
      <div id='bottom' className='border w-3/4 md:w-1/2 h-44 mx-7 my-4'>
        <div className='flex flex-col justify-between p-4 border h-full'>
          <div className='flex items-start'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              className=''
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Location_On'>
                <g>
                  <path d='M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z'></path>
                  <path d='M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z'></path>
                </g>
              </g>
            </svg>
            <div className='flex flex-col'>
              <h3 className='text-sm'>Add New Address</h3>
              <span className='text-sm'>{location}</span>
            </div>
          </div>
          <button className='w-1/2 p-1 shadow shadow-green-600 text-green-600 text-sm font-semibold border border-green-600'>
            ADD NEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
