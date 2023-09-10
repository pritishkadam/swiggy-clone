import { useParams } from 'react-router';
import { FETCH_MENU_URL } from '../../config';
import { useEffect, useState } from 'react';
import RestaurantDetails from './RestaurantDetails';
import RestaurantMenu from './RestaurantMenu';
import { getMenuDetails, getRestaurantInfo } from './../../utils/getDetails';
import { useNavigate } from 'react-router-dom';
import RestaurantDetailsSkeleton from './RestaurantDetailsSkeleton';
import RestaurantMenuSkeleton from './RestaurantMenuSkeleton';
import { useSelector } from 'react-redux';
import { getLocationDetails } from './../SideBar/locationConfig';
import ConfirmationOverlay from './../Search/ConfirmationOverlay';

const RestaurantPage = () => {
  const { resId } = useParams();
  const navigate = useNavigate();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantCoupons, setRestaurantCoupons] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const location = useSelector((store) => store.location.locationID);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const { latitude, longitude } = getLocationDetails(location);
    const url = FETCH_MENU_URL.replace('LATITUDE', latitude).replace(
      'LONGITUDE',
      longitude
    );
    const response = await fetch(url + resId);
    const data = await response.json();
    const restaurantData = getRestaurantInfo(data.data.cards, 'Restaurant');
    const restaurantCoupons = getRestaurantInfo(data.data.cards, 'GridWidget');
    const menuDetails = getMenuDetails(data.data.cards);
    setRestaurantDetails(restaurantData);
    setRestaurantCoupons(restaurantCoupons.gridElements.infoWithStyle);
    setRestaurantMenu(menuDetails);
  };

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    if (showOverlay) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'unset';
    }
  }, [showOverlay]);

  return (
    <>
      {showOverlay && (
        <div>
          <ConfirmationOverlay setShowOverlay={setShowOverlay} />
        </div>
      )}
      <div className='w-10/12 lg:w-2/3 xl:w-1/2 flex flex-col mx-auto h-full'>
        {/* <h2>RestaurantDetails: {resId}</h2> */}
        <div className='mt-4'>
          <button
            className='border border-orange-500 font-semibold py-2 px-5 rounded-sm leading-5 hover:shadow-md text-[#3d4152]'
            onClick={handleBackButton}
          >
            BACK
          </button>
        </div>
        {restaurantDetails === null && <RestaurantDetailsSkeleton />}
        {restaurantDetails && (
          <RestaurantDetails
            restaurantDetails={restaurantDetails}
            restaurantCoupons={restaurantCoupons}
          />
        )}
        {restaurantMenu === null && (
          <RestaurantMenuSkeleton restaurantMenu={restaurantMenu} />
        )}
        {restaurantMenu && (
          <RestaurantMenu
            restaurantMenu={restaurantMenu}
            restaurantDetails={restaurantDetails}
            setShowOverlay={setShowOverlay}
          />
        )}
      </div>
    </>
  );
};

export default RestaurantPage;
