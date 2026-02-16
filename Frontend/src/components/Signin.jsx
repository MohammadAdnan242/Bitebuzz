import React, { useState } from 'react'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth, db } from './firebase'
// import { toast } from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Signin = () => {
    const [pass, setpassword] = useState("")
    const [email, SetEmail] = useState("")
    
    const darkMode = useSelector((state) => state.darkMode.isDarkMode);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, pass)
            const user = auth.currentUser
            console.log(user)
            if (user) {
                setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    
                })
            }
            console.log("User LoggedIn successfully");
            toast.success("User LoggedIn Successfully", { position: "top-center" },
                {durattion:5000}
            )
            window.location.href = "/"
           
        } catch (error) {
            console.log(error.message);
            toast.success(error.message, { position: "bottom-center" },)
        }
    }

    return (
      <>
      <Toaster position="top-center" reverseOrder={false}/>
        <div className={`flex items-center justify-center min-h-screen bg-gray-100 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
            <div className='w-full max-w-md  p-8 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-6 text-center '>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block ' htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            value={email} 
                            className='w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                            placeholder='Enter Email'
                            onChange={(e) => SetEmail(e.target.value)}
                        />
                    </div>
                   

                    <div className='mb-4'>
                        <label className='block ' htmlFor='password'>Password</label>
                        <input 
                            type='password' 
                            value={pass} 
                            className='w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                            placeholder='Enter Password'
                            onChange={(e) => setpassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className='mb-6'>
                        <button className='w-full bg-orange-600 hover:bg-orange-700  py-2 rounded-md transition duration-300'>
                            Login
                        </button>
                    </div>
                </form>
                
                <div className='text-center'>
                    <span className=''>Don't have an account? </span>
                   <Link to='/register'>
                   <button className='text-orange-500 hover:text-orange-600 transition duration-300'>
                            Sign Up
                        </button>
                   </Link>
                </div>
            </div>
        </div>
      </>
    )
}

export default Signin