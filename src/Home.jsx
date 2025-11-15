import React from 'react'
import Navbar from './components/Navbar'
import CategoryMenu from './components/CategoryMenu'
import Fooditems from './components/Fooditems'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Darktheme from './components/Darktheme'
const Home=()=>{
    return(
      <>
           <Navbar/>
           <CategoryMenu/>
           <Fooditems/>
           <Cart/>
           <Footer/>
          
      </>
    )
}
export default Home ;