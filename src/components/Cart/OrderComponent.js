import OrderDetails from './OrderDetails';
import CancellationPolicy from './CancellationPolicy';

const OrderComponent = () => {
  return (
    <div className='flex flex-col w-full lg:w-5/12'>
      <div className='w-full h-auto lg:mt-10 border bg-white p-3 md:p-5'>
        <OrderDetails />
      </div>
      <div className='w-full my-4'>
        <CancellationPolicy />
      </div>
    </div>
  );
};

export default OrderComponent;
