import React from 'react'
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/Slice/CartSlice';
import { FaStar } from "react-icons/fa6"; 
import { useSelector } from 'react-redux';
const Foodcard = ({id,name,price,desc,img,rating,handleToast}) => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();
  return (
    <div className={`font-bold w-[250px]  p-5 flex flex-col rounded-lg gap-2 ${
      darkMode ? 'bg-gray-900 text-white border-2 border-white' : 'bg-white text-black border-2 border-black'
    } `}>
      <img src={img} alt='food_!'
      className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
      />

      <div className='flex justify-between '>
        <h2>{name}</h2>
        <span className='text-orange-400'>₹{price}</span>
      </div>
 
    <p className='text-sm font-normal'>
        {desc.slice(0,50)}...
    </p>
    <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
            <FaStar className='mr-1 text-yellow-400'/> {rating}
        </span>
        <button onClick={()=>{
          dispatch(addtoCart({id,name,price,img,qty:1}))
          handleToast(name);
        }} className='p-1 text-white bg-orange-500 hover:bg-orange-600  rounded-lg text-sm'>
              Add to Cart
        </button>
    </div>

    </div>
  )
}

export default Foodcard
