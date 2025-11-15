
import React, { useState,useEffect } from 'react'
import Button from './Button';

import { IoRestaurant,IoSunnyOutline,IoMoonOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import {useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../redux/Slice/SearchSlice';
import { Link } from 'react-router-dom';

import useUserRole from './Firestore/useUserRole';


// firebase datastore
import { auth, db } from './firebase';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// dark theme
import { toggleDarkMode } from '../redux/Slice/DarkModeSlice';

const Nav = () => {
  // dark theme
 const dispatch = useDispatch()
 
 const darkMode = useSelector((state) => state.darkMode.isDarkMode); // Get the dark mode state from Redux

 const toggleTheme = () => {
     dispatch(toggleDarkMode());
 };

//  useEffect(() => {
//   if (darkMode) {
//       document.documentElement.classList.add('dark');
//   } else {
//       document.documentElement.classList.remove('dark');
//   }
// }, [isDarkMode]);
    let Links =[
      {name:"HOME",link:"/"},
      {name:"RECIPE",link:"/recipe"},
      {name:"ABOUT",link:"/about"},
      {name:"CONTACT",link:"/contact"},
    
    ];
    let [open,setOpen]=useState(false);

    const { role, loading } = useUserRole();
    const [user, setUser] = useState(null);
    useEffect(() => {
      

      // Listen for auth state changes
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser) {
              // Fetch user data from Firestore
              const userDocRef = doc(db, "Users", currentUser.uid);
              const userDoc = await getDoc(userDocRef);
              
              if (userDoc.exists()) {
                  setUser(userDoc.data());
              } else {
                  console.log("No such document!");
              }
          } else {
              setUser(null); // User is logged out
          }
      });

      return () => unsubscribe();
  }, []);


const handleLogout = async () => {
    try {
        await signOut(auth);
        console.log("User logged out successfully");
        
    } catch (error) {
        console.error("Error logging out:", error);
    }
};



// const { role } = useUserRole();
// console.log(role);
  return (
    <div className={`z-50 shadow-md w-full fixed top-0 left-0 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-orange-600'>
        <span className='text-3xl text-orange-600 mr-1 pt-2'>
        <IoRestaurant />
        </span>
       BiteBuzz
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
     <IoMenu/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[50] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
       ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}  ${open ? 'top-20 ':'top-[-490px] z-100'}`}>
      <div className='flex items-center md:ml-8 text-2xl cursor-pointer text-center float-right right-3 top-0' onClick={toggleTheme}>
            {darkMode ? <IoSunnyOutline className='text-yellow-400' /> : <IoMoonOutline className='text-gray-800' />}
          </div>


        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
             <Link to={link.link} className=' hover:text-orange-500 duration-500'>{link.name}</Link>
            </li>
          ))
        }

        {!loading && role === 'admin' && (
            <li className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to="/admin" className='text-orange-500 hover:text-orange-700 duration-500'>ADMIN</Link>
            </li>
          )} 




         <div className='ml-2 pl-2 w-full lg:w-[200px] md:my-0 my-7'>
          <input type='search' name='search' id='' placeholder='Search here' className='p-2 border text-black border-gray-400 text-sm rounded-lg outline-none ' autoComplete='off' onChange={(e)=>dispatch(setSearch(e.target.value))}>
          </input>
        </div>

          <div className='flex justify-center'>
         
                {user ? (
                    <div className='ml-2 px-2 w-full lg:w-[200px] md:my-0 my-7'>
                        <span >{user.Name}</span> 
                        <button onClick={handleLogout} className='text-orange-500 pl-5 '>Logout</button>
                        {/* <img
                            src={prof.Prof}  // Replace with an actual icon path if desired
                            alt="User Icon"
                            className=" px-6 w-1 h-1 rounded-full right-0 top-0 "
                        /> */}
                    </div>
                ) : (
                    <Link to='/signin' className='bg-orange-500 hover:bg-orange-600 text-black rounded-lg py-2 w-20 sm:w-24 md:w-28 lg:w-[10vw] text-center '>LOGIN</Link>
                )}
                </div>
      
       
      </ul>
      </div>
    </div>
  )
}

export default Nav
