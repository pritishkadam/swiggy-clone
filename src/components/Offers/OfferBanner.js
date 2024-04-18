import React from 'react';

const OfferBanner = () => {
  return (
    <div className='w-full h-80 bg-[#005062] mb-10'>
      <div
        id='offer'
        className='w-10/12 h-full flex items-center justify-around mx-auto'
      >
        <div id='left'>
          <h2 className='text-5xl font-bold text-white'>Offers for you</h2>
          <h3 className='text-xl my-1 text-white'>
            Explore top deals and offers exclusively for you!
          </h3>
        </div>
        <div id='right'>
          <img
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham'
            alt='offers-banner'
            className='w-72'
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
