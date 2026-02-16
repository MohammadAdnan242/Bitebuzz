import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from './firebase'
import { setDoc, doc } from 'firebase/firestore'

import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Register = () => {
    const [name, setname] = useState("")
    const [email, Setemail] = useState("")
    const [phnNum,SetphnNum] = useState("")
    const [password, setpassword] = useState("")

    //  dark mode
    const darkMode = useSelector((state) => state.darkMode.isDarkMode);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
           const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            // const user = auth.currentUser
            const user =  userCredential.user;
            console.log(user)
            if (user) {
                setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    Name: name ,
                    Phn_Num:phnNum,
                    role: "user",
                })
            }
            // console.log("user registered successfully")
            toast.success("User Registered Successfully", { position: "top-center" },)
        } catch (error) {
            console.log(error.message)
            toast.error(error.message, { position: "bottom-center" },)
        }
    }

    return (
        <>
        <Toaster position="top-center" reverseOrder={false}/>
          <div className={`flex items-center justify-center min-h-screen bg-gray-100 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
            <div className='w-full max-w-md  p-8 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-6 text-center '>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <div className='mb-4'>
                        <label className='block '>Name</label>
                        <input 
                            type='text' 
                            className='w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500'
                            placeholder='Enter Name'
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block '>Email</label>
                        <input 
                            type='email' 
                            className='w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500'
                            placeholder='Enter Email'
                            onChange={(e) => Setemail(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block '>Phn Number</label>
                        <input 
                            type='number' 
                            className='w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                            placeholder='Enter Phn Number'
                            onChange={(e) => SetphnNum(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block '>Password</label>
                        <input 
                            type='password' 
                            className='w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500'
                            placeholder='Enter Password'
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>

                    <div className='mb-6'>
                        <button className='w-full bg-orange-500 hover:bg-orange-600  py-2 rounded-md transition duration-300'>
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className='text-center'>
                    <span className=''>Already have an account? </span>
                  <Link to='/signin'>
                  <button className='text-red-400 hover:text-orange-600 transition duration-300'>
                            Login
                        </button>
                  </Link>
                </div>
            </div>
        </div>
        </>
      
    )
}

export default Register