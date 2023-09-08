import React from 'react';

const CouponsList = (props) => {
  const { restaurantCoupons } = props;
  const { offers } = restaurantCoupons;

  return (
    <div className='w-full flex overflow-x-auto'>
      {offers &&
        offers.map((element, index) => (
          <Coupon key={index} offerDetails={element} />
        ))}
    </div>
  );
};

const Coupon = (props) => {
  const { offerDetails } = props;
  const { info } = offerDetails;
  const { header, couponCode, description } = info;
  return (
    <div className='w-44 flex flex-col gap-1 px-3 py-2 border border-slate-300 rounded-md mr-2'>
      <h2 className='w-full text-sm font-medium text-gray-600'>{header}</h2>
      <h3 className='text-[10px] text-gray-800'>
        {couponCode} | {description}
      </h3>
    </div>
  );
};

export default CouponsList;
