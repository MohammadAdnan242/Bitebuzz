import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Contact = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div className={`min-h-screen  py-16 ${
      darkMode ? 'bg-gray-900 text-white ' : 'bg-white text-black'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <h1 className="text-4xl font-bold  text-center mb-6 underline underline-offset-8">
          Contact Us
        </h1>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Have questions, feedback, or need help with an order? We’re here to assist you. Reach out to us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={ `rounded-lg shadow-lg p-8 ${
      darkMode ? 'bg-gray-900 text-white border-2 border-white' : 'bg-gray-200 text-black'
    }`}>
            <h2 className="text-2xl font-semibold  mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block ">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block ">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block ">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your message here"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className={` rounded-lg shadow-lg p-8 ${
      darkMode ? 'bg-gray-900 text-white border-2 border-white' : 'bg-gray-200 text-black'
    }`}>
            <h2 className="text-2xl font-semibold  mb-4">Get In Touch</h2>
            <div className="space-y-6">
              
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-orange-500 text-2xl" />
                <div>
                  <p className="text-lg font-medium ">Phone</p>
                  <p >+919536081086</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-orange-500 text-2xl" />
                <div>
                  <p className="text-lg font-medium ">Email</p>
                  <p >support@BiteBuzz.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                <div>
                  <p className="text-lg font-medium ">Location</p>
                  <p >Village and post Miyaun district Budaun </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
