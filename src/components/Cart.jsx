import { React, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { db, auth } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Carditem from './Carditem';

const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleCheckout = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await addDoc(collection(db, 'orders'), {
          userEmail: user.email,
          items: cartItems,
          totalQty,
          totalPrice,
          orderDate: new Date().toISOString(),
        });
        navigate("/success");
      } else {
        alert("Please log in to place an order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 flex flex-col ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      } ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>

        {/* Header */}
        <div className='flex justify-between items-center mb-4'>
          <span className='text-xl font-bold'>My Orders</span>
          <IoMdClose onClick={() => setActiveCart(!activeCart)} className='border-2 border-gray-600 font-bold text-xl rounded-md hover:text-orange-400 hover:border-orange-500 cursor-pointer' />
        </div>

        {/* Scrollable Cart Items */}
        <div className="overflow-y-auto flex-grow pr-2 mb-4">
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <Carditem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            ))
          ) : (
            <h2 className='text-center text-xl font-bold'>Your cart is empty</h2>
          )}
        </div>

        {/* Checkout Section - Sticky Bottom */}
        <div className='pt-3 border-t border-gray-300'>
          <h3 className='font-semibold'>Items: {totalQty}</h3>
          <h3 className='font-semibold'>Total Amount: ₹{totalPrice}</h3>
          <hr className='my-2' />
          <button
            onClick={handleCheckout}
            className='bg-orange-500 font-bold px-3 py-2 text-white rounded-lg w-full'
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Floating Cart Button */}
      <FaCartShopping
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-md bg-white shadow-md text-5xl p-4 fixed bottom-4 right-4 size-15 cursor-pointer ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
      />
    </>
  );
};

export default Cart;
