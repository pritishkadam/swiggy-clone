import { useEffect, useState } from 'react';
import DishCard from './DishCard';
import { getQueryData } from './../../utils/getDetails';
import { useNavigate } from 'react-router-dom';
import { SUGGESTION_ITEM_API } from './../../config';
import DishCardSkeletonList from './DishCardSkeletonList';
import { useSelector } from 'react-redux';
import { getLocationDetails } from '../SideBar/locationConfig';

const SearchQueryPage = (props) => {
  const { keyword, showOverlay, setShowOverlay } = props;
  const navigate = useNavigate();
  const [queryData, setQueryData] = useState(null);
  const location = useSelector((store) => store.location.locationID);

  useEffect(() => {
    if (keyword) {
      getSearchQueryData();
    }
  }, [keyword]);

  const getSearchQueryData = async () => {
    try {
      const q = `&str=${keyword}`;
      const finalQuery = encodeURI(q);
      const { latitude, longitude } = getLocationDetails(location);
      const url = SUGGESTION_ITEM_API.replace('LATITUDE', latitude).replace(
        'LONGITUDE',
        longitude
      );
      const response = await fetch(url + finalQuery);
      const responseData = await response.json();
      const resultantData = getQueryData(responseData.data);
      setQueryData(resultantData);
    } catch (e) {
      console.error('Error in Search Query Data', e);
    }
  };

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <div className='my-4'>
        <button
          className='border border-orange-500 font-semibold py-2 px-5 rounded-sm leading-5 hover:shadow-md text-[#3d4152]'
          onClick={handleBackButton}
        >
          BACK
        </button>
      </div>
      {queryData === null && <DishCardSkeletonList />}
      <div className='w-full flex flex-wrap justify-between'>
        {queryData &&
          queryData.map((element, index) => {
            return (
              <DishCard
                key={index}
                dish={element}
                showOverlay={showOverlay}
                setShowOverlay={setShowOverlay}
              />
            );
          })}
          {queryData && queryData.length === 0 && (
            <div className='w-full h-full mt-5 mb-5 p-10 rounded-lg flex justify-center items-center bg-gray-200 text-gray-400 font-medium'>
                Currently, there's no data available
              </div>
          )}
      </div>
    </>
  );
};

export default SearchQueryPage;
