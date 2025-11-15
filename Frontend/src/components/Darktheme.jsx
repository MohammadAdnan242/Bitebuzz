import React, { useEffect, useState } from 'react'
import { IoToggleOutline } from "react-icons/io5";
const Darktheme = () => {
    const [theme,SetTheme] =useState("light");
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
        }
    },[])

    const handleThemeSwitch =()=>{
        SetTheme === "dark" ? "light" : "dark"
    }
  return (
    <div>
      <IoToggleOutline className='bg-orange-400 p-4 rounded-xl' onClick={handleThemeSwitch} />
    </div>
  )
}

export default Darktheme
