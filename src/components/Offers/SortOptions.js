import React from 'react';
import {sortConfig} from './sortConfig';

const SortOptions = (props) => {
  const { filter, setFilter } = props;
  const sortOptions = sortConfig();
  
  return (
    <div className='flex'>
      {sortOptions &&
        sortOptions.map(({ id, key, title }) => {
          return (
            <div
              key={id}
              className={filter === key ? 'border-b border-b-gray-800 mx-2' : 'mx-2'}
            >
              <button onClick={() => setFilter(key)} className='my-1 text-base text-gray-600'>{title}</button>
            </div>
          );
        })}
    </div>
  );
};

export default SortOptions;
