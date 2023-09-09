import OrderList from './OrderList';
import RestaurantInfo from './RestaurantInfo';

const OrderDetails = () => {
  
  return (
    <div>
      <div className='flex flex-col'>
        <RestaurantInfo />
        <OrderList />
      </div>
    </div>
  );
};

export default OrderDetails;
