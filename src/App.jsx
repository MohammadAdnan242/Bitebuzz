import React from 'react'
import { useEffect } from 'react'
import './App.css'
import Home from './Home'
import Success from './Success'
import Recipe from './components/Recipe'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'
import Signin from './components/Signin'
import Register from './components/Register'

import { useSelector,useDispatch } from 'react-redux'
import { toggleDarkMode } from './redux/Slice/DarkModeSlice'

import Admin from './components/Admin/Admin';
import AdminRoute from './components/Admin/AdminRoute';
 const  App =()=> {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
   <BrowserRouter>
    <div>
          <Routes>
             <Route  path="/" element={<Home/>}></Route>
             <Route  path="/success" element={<Success/>}></Route>
             <Route  path="/recipe" element={<Recipe/>}></Route>
             <Route  path='/about'element={<About/>}/>
             <Route  path='/contact' element={<Contact/>}></Route>
             <Route  path='/signin' element={<Signin/>}/>
             <Route  path='/register' element={<Register/>}></Route>
             <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
          </Routes>
        </div>
   </BrowserRouter>

     
    </>
  )
}

export default App
