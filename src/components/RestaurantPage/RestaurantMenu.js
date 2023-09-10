import React from 'react';
import MenuList from './MenuList';

const RestaurantMenu = (props) => {
  const { restaurantMenu, restaurantDetails, setShowOverlay } = props;

  if (restaurantMenu.length === 0) return null;

  return (
    <div className='my-4'>
      {restaurantMenu &&
        restaurantMenu.map((element, index) => {
          const { title, itemCards } = element;
          const dataCount = itemCards ? itemCards.length : '';
          return (
            <div key={index}>
              {dataCount && (
                <div className='my-2'>
                  <Title title={title} dataCount={dataCount} />
                  <MenuList menuDetails={itemCards} restaurantDetails={restaurantDetails} setShowOverlay={setShowOverlay} />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

const Title = (props) => {
  const { title, dataCount } = props;
  return (
    <div>
      <h2 className='text-xl font-bold'>
        {title}({dataCount})
      </h2>
    </div>
  );
};

export default RestaurantMenu;
