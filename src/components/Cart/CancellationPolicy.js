import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className='w-full bg-white py-8'>
      <div className='w-10/12 h-auto mx-auto border border-gray-300 rounded-md p-4'>
        <h3 className='text-base font-semibold leading-5'>Review your order and address details to avoid cancellations</h3>
        <p className='text-sm my-4'><span className='text-red-600'>Note:</span> If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.</p>
        <p className='text-xs mb-4'>Avoid cancellation as it leads to food wastage.</p>
        <a href='#' className='text-sm text-red-600 border-b border-b-red-600 border-dotted cursor-pointer'>Read cancellation policy</a>
      </div>
    </div>
  );
};

export default CancellationPolicy;
