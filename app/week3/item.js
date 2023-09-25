import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <ul>
    <li className='p-2 m-4 bg-slate-900 max-w-sm'>
      <h2 className='text-xl font-bold'>{name}</h2>
      <div className='text-sm'>Buy {quantity} in {category}</div>
    </li>
    </ul>
  );
};

export default Item;