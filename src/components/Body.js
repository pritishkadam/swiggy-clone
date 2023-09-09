import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import SkeletonCards from './SkeletonCardsList';
import { Link } from 'react-router-dom';
import { FETCH_URL } from '../config';
import { getRestaurantList } from '../utils/getDetails';
import { useSelector } from 'react-redux';
import { getLocationDetails } from './SideBar/locationConfig';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const location = useSelector((store) => store.location.locationID);

  useEffect(() => {
    window.scrollTo(0, 0);
    getRestaurantData();
  }, [location]);

  const getRestaurantData = async () => {
    try {
      setAllRestaurants(null);
      setFilteredRestaurants(null);
      const { latitude, longitude } = getLocationDetails(location);
      const url = FETCH_URL.replace('LATITUDE', latitude).replace(
        'LONGITUDE',
        longitude
      );
      const response = await fetch(url);
      const resultantData = await response.json();
      console.log('ResultantData: ', resultantData);
      const restaurantList = getRestaurantList(resultantData?.data?.cards);
      setAllRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (e) {
      setAllRestaurants(undefined);
      setFilteredRestaurants(undefined);
    }
  };

  return (
    <>
      <Link to='/'>
        <img
          src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/faxdufvkcllzse67eqry'
          className='w-2/3 my-6 mx-auto'
        />
      </Link>
      {allRestaurants === null && <SkeletonCards />}
      <div className='w-2/3 mx-auto'>
        {allRestaurants === null && (
          <h4 className='w-1/2 h-10 my-1 bg-gray-300' />
        )}
        {filteredRestaurants && filteredRestaurants.length !== 0 && (
          <>
            <h4 className='text-3xl my-1 font-bold text-gray-700'>
              {filteredRestaurants.length} Restaurants
            </h4>
          </>
        )}
        <hr className='border-b-gray-300 border-b' />
      </div>
      <div className='card-container w-8/12 flex flex-wrap mx-auto justify-evenly gap-y-8 my-10 z-0'>
        {filteredRestaurants && filteredRestaurants.length === 0 && (
          <h4 className='no-data'>No Data Available</h4>
        )}
        {filteredRestaurants &&
          filteredRestaurants.map((element) => {
            const { id } = element.info;
            return (
              <Link to={`/restaurant/${id}`} key={id}>
                <RestaurantCard {...element.info} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Body;
