import React, { useEffect, useState } from 'react'
import {HashLoader} from 'react-spinners'
import Confetti from 'react-confetti'
// import ReactEmojis from "@souhaildev/reactemojis";
import { useSelector } from 'react-redux';
const Success=()=>{
    const [Loading,setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])

    const darkMode = useSelector((state) => state.darkMode.isDarkMode);
    return(
        <>
       <div className={`flex flex-col items-center justify-center h-screen  ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
         {Loading ? (<HashLoader color="orange" />) : (  <div>
         <Confetti/>
       <h2 className='text-3xl font-semibold mb-4'>Order Successfull</h2>
       <p> Your order is successfully placed ! <span className='flex justify-center'></span></p>
       </div>)}
     
       </div>
        
        </>
    )
}
export default Success ;