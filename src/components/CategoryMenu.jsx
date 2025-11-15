import React, { useEffect, useState } from 'react'
import food_list from '../Fooddata/Fooddata'
// import Fooddata from '../Fooddata/Fooddata'
import { useDispatch,useSelector } from 'react-redux'
import { setCategory } from '../redux/Slice/CategorySlice'
const CategoryMenu = () => {
const [categories ,setcategories] = useState([])
const darkMode = useSelector((state) => state.darkMode.isDarkMode);
const listUniqueCategories =()=>{

  const uniqueCategories =[
    ...new Set(food_list.map((food)=> food.category)),
  ];
  setcategories(uniqueCategories)
  console.log(uniqueCategories)
}

useEffect(()=>{
  listUniqueCategories()
},[]);

const dispatch = useDispatch()
const SelectedCategory = useSelector((state)=> state.category.category)





  return (
    <div className={`ml-2 my-12 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
    <h1 className='flex items-start text-3xl font-semibold'>Explore our Menu</h1> 
    <p className='max-w-2xl mx-0 py-1   font-extralight flex items-start'>Choose from a diverse Menu featuring a delactable array of dishes .Our mission is to satisfy your cravings and elevate your dining experience ,one delicious meal at a time </p>
        <br/>
        
    <div className='py-3 flex pr-6 gap-3  overflow-x-scroll scroll-smooth lg:overflow-x-hidden '>
    <button onClick={()=>dispatch(setCategory("All"))}  className={` px-3 py-2  font-bold rounded-lg hover:bg-orange-400 border-2 border-white   ${SelectedCategory === "All" && "bg-orange-500 text-white"} ` }>
          All
         </button>

    {categories.map((category,index)=>{
           return (
         <button onClick={()=>dispatch(setCategory(category))} key={index} className={`px-3 py-2  font-bold rounded-lg hover:bg-orange-400 border-2 border-white   ${SelectedCategory === category && "bg-orange-500 text-white"}`}>
          {category}
         </button>
                )
        })

        }
    </div>
<br/>
    <div className='flex items-start font-extrabold text-2xl mt-2'>
      <h1>Your delicious Meals 😋😋</h1> <br/>
    </div>

</div>
  )
}

export default CategoryMenu
