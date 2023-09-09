import Buttons from './Buttons';
import OrderComponent from './OrderComponent';
import PaymentComponent from './PaymentComponent';

const BillingPage = () => {
  return (
    <div className='w-full h-full bg-[#e9ecee]'>
      <div className='w-8/12 h-full mx-auto'>
        <Buttons />
        <div className='flex flex-col lg:flex-row gap-5'>
          <PaymentComponent />
          <OrderComponent />
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
