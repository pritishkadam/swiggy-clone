import React from 'react';
import Menu from './Menu';

const MenuList = (props) => {
  const { menuDetails } = props;
  return (
    <div className='my-8'>
      {menuDetails &&
        menuDetails.map((item, index) => {
          const lastRow = menuDetails.length - 1 === index;
          return <Menu item={item} lastRow={lastRow} />;
        })}
        <hr className='h-4 bg-slate-200 rounded-sm my-8' />
    </div>
  );
};

export default MenuList;
