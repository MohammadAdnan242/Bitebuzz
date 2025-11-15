import React from 'react'
import Foodcard from './Foodcard'
import food_list from '../Fooddata/Fooddata'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const Fooditems = () => {
  const category = useSelector((state)=> state.category.category)
  const Search = useSelector((state)=> state.search.search)
  const handleToast = (name)=> toast.success(`Added ${name}`)
    let cardArr = food_list
  return (
     <>
     <Toaster position="top-center" reverseOrder={false}/>
        <div className='flex flex-wrap gap-10 justify-center mx-6 my-1'>
      {cardArr.filter((food)=>{
        if(category === "All"){
          return food.name.toLowerCase().includes(Search.toLowerCase())
        }
        else{
          return category === food.category && food.name.toLowerCase().includes(Search.toLowerCase())
        }
      }).map((food)=>{
        return (
          
          <Foodcard
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.description}
          img={food.image}
          rating={food.rating}
          handleToast={handleToast}
        />
        )
         
      })
      }

{/* {cardArr.map((food)=>{
       return (
        <Foodcard
        key={food.id}
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.description}
        img={food.image}
        handleToast={handleToast}
      />
       )
       }) } */}
    </div>  
     </>
  )
}

export default Fooditems
