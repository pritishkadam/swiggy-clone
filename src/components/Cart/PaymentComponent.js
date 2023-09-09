import React from 'react';
import AddressDetails from './AddressDetails';
import PaymentDetails from './PaymentDetails';

const PaymentComponent = () => {
  return (
    <div className='w-full lg:w-7/12 h-auto my-10'>
      <AddressDetails />
      <PaymentDetails />
    </div>
  );
};

export default PaymentComponent;
