import {configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slice/CartSlice'
import CategorySlice from '../redux/Slice/CategorySlice'
import SearchSlice from '../redux/Slice/SearchSlice'
import darkModeReducer from './Slice/DarkModeSlice'
const Store = configureStore({
reducer:{
    cart: CartSlice,
    category:CategorySlice,
    search:SearchSlice,
    darkMode:darkModeReducer

},

});
export default Store ;