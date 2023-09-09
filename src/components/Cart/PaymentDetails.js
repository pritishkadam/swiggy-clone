import React from 'react';

const PaymentDetails = () => {
  return (
    <div className='w-full h-auto bg-white p-5 border'>
      <div id='top' className='w-2/3 relative flex'>
        <svg
          stroke='currentColor'
          fill='currentColor'
          stroke-width='0'
          viewBox='0 0 24 24'
          className='bg-gray-900 text-white text-3xl p-1 my-1'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'></path>
        </svg>
        <div className='flex flex-col mx-2'>
          <h3 className='text-lg font-semibold'>Payments</h3>
          <h3 className='text-base text-gray-600 leading-6'>
            Credit & Debit cards
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
