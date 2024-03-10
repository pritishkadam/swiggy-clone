import { restaurantList } from '../../../constants/constant';
import RestaurantCard from '../RestaurantCard';
import { useEffect, useState } from 'react';
import SkeletonCards from '../SkeletonCardsList';
import { Link } from 'react-router-dom';
import LocationSideBar from '../SideBar/LocationSideBar';
import { useSelector } from 'react-redux';
import { getLocationDetails, locationConfig } from '../SideBar/locationConfig';
import SignInSideBar from '../SideBar/SignInSideBar';
import { FETCH_URL } from '../../config';
import {
  getRestaurantList,
  getRestaurantInfo,
  getSortedData,
} from './../../utils/getDetails';
import OfferBanner from './OfferBanner';
import { getDefaultSortOption } from './sortConfig';
import SortOptions from './SortOptions';

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
};

const Offers = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const defaultOption = getDefaultSortOption();
  const [filter, setFilter] = useState(defaultOption);
  const location = useSelector((store) => store.location.locationID);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredRestaurants(null);
    getRestaurantData();
  }, [filter, location]);

  const getRestaurantData = async (filterStr) => {
    try {
      const { latitude, longitude } = getLocationDetails(location);
      const url = FETCH_URL.replace('LATITUDE', latitude).replace(
        'LONGITUDE',
        longitude
      );
      const response = await fetch(url);
      const resultantData = await response.json();
      const restaurantList = getRestaurantList(resultantData?.data?.cards);
      const sortedData = getSortedData(restaurantList, filter);
      setFilteredRestaurants(sortedData);
    } catch (e) {
      setFilteredRestaurants(undefined);
    }
  };

  return (
    <>
      <OfferBanner />

      <div className='w-2/3 mx-auto'>
        <div className='flex items-end justify-between'>
          <span className='text-2xl my-1 font-bold text-gray-700'>
            All offers {filteredRestaurants && `(${filteredRestaurants.length})`}
          </span>
          <SortOptions filter={filter} setFilter={setFilter} />
        </div>
        <hr className='border-b-gray-300 border-b my-1' />
      </div>

      {filteredRestaurants === null && <SkeletonCards />}
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

export default Offers;
