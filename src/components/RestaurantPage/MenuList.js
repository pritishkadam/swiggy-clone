import React from 'react';
import Menu from './Menu';

const MenuList = (props) => {
  const { menuDetails, restaurantDetails,setShowOverlay } = props;
  const { info } = restaurantDetails ? restaurantDetails : {};
  const { id, name, areaName, cloudinaryImageId } = info ? info : {};
  const restaurantInfo = {
    restaurantId: id,
    restaurantName: name,
    areaName,
    cloudinaryImageId,
  };

  return (
    <div className='my-8'>
      {menuDetails &&
        menuDetails.map((item, index) => {
          const lastRow = menuDetails.length - 1 === index;
          return (
            <Menu
              key={index}
              item={item}
              lastRow={lastRow}
              restaurantInfo={restaurantInfo}
              setShowOverlay={setShowOverlay}
            />
          );
        })}
      <hr className='h-4 bg-slate-200 rounded-sm my-8' />
    </div>
  );
};

export default MenuList;
