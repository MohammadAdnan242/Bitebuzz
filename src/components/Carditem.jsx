import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removefromCart, incrementQty, decrementQty } from '../redux/Slice/CartSlice';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';

const Carditem = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={`flex gap-3 shadow-md rounded-lg p-2 mb-3 items-center justify-between ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    }`}>

      {/* Left - Image */}
      <img src={img} alt={name} className='w-[50px] h-[50px] object-cover rounded' />

      {/* Center - Name & Price & Quantity */}
      <div className='flex flex-col flex-grow'>
        <h2 className='font-bold text-sm'>{name.slice(0, 20)}</h2>
        <span className='text-orange-500 font-semibold text-sm'>₹{price}</span>
        <div className='flex items-center gap-2 mt-1'>
          <AiOutlineMinus
            onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : null}
            className='border border-gray-500 p-1 rounded hover:bg-orange-500 hover:text-white cursor-pointer text-base'
          />
          <span>{qty}</span>
          <AiOutlinePlus
            onClick={() => dispatch(incrementQty({ id }))}
            className='border border-gray-500 p-1 rounded hover:bg-orange-500 hover:text-white cursor-pointer text-base'
          />
        </div>
      </div>

      {/* Right - Delete Icon */}
      <MdDelete
        onClick={() => {
          dispatch(removefromCart({ id, img, name, price, qty }));
          toast(`${name} Removed`, { icon: '😒' });
        }}
        className='text-xl text-gray-500 hover:text-red-600 cursor-pointer ml-2'
      />
    </div>
  );
};

export default Carditem;
