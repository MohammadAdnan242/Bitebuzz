import { React, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { db, auth } from './firebase'; // Import your Firebase config
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Carditem from './Carditem';

const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

  const handleCheckout = async () => {
    try {
      const user = auth.currentUser; // Get the current logged-in user
      if (user) {
        // Save order to Firestore
        await addDoc(collection(db, 'orders'), {
          userEmail: user.email,
          items: cartItems,
          totalQty,
          totalPrice,
          orderDate: new Date().toISOString(), // Optional: add date of order
        });
        // Clear cart and navigate to success page
        navigate("/success");
      } else {
        alert("Please log in to place an order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };


  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    }   ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-2'>
          <span className='text-xl font-bold '> My Orders</span>
          <IoMdClose onClick={() => setActiveCart(!activeCart)} className='border-2 border-gray-600  font-bold p-0 text-xl rounded-md hover:text-orange-400 hover:border-orange-500 cursor-pointer '/>
        </div>

       <div className="overflow-y-auto max-h-[70vh] pr-2">
  {cartItems.length > 0 ? (
    cartItems.map((food) => (
      <Carditem key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
    ))
  ) : (
    <h2 className='text-center text-xl font-bold'>Your cart is empty</h2>
  )}
</div>

        
        <div className='absolute bottom-0'>
          <h3 className='float-left font-semibold '>Items: {totalQty}</h3> <br />
          <h3 className='float-left font-semibold '>Total Amount: ₹{totalPrice}</h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2'/>
          <button onClick={handleCheckout} className='bg-orange-500 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
        </div>
      </div>
      <FaCartShopping onClick={() => setActiveCart(!activeCart)} className={`rounded-md bg-white shadow-md text-5xl p-4 fixed bottom-4 right-4 size-15 cursor-pointer ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
  );
}

export default Cart;
