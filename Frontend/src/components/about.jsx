import React from 'react';
import images from '../Fooddata/aboutsec';
// import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useSelector } from 'react-redux';

const About = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <div className={`min-h-screen  py-16 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-center mb-16 text-center">
  {/* Owner Image */}
  <img
    src={images.owner}
    alt="Owner"
    className="h-32 w-32 sm:h-32 sm:w-332 md:h-40 md:w-40 rounded-full absolute right-2 sm:right-6 md:right-10 top-2 shadow-lg opacity-40"
  />

  {/* Title */}
  <h1 className="text-4xl font-bold text-gray-900 mb-6 underline underline-offset-8">
    About Us
  </h1> <br/>

  {/* Subtitle with Quotes */}
  <div className="flex items-center justify-center  max-w-2xl mx-auto text-2xl">
    {/* <RiDoubleQuotesL className="text-blue-600 mr-3" />  */}
    <p>
     <span className='text-blue-700 font-bold text-3xl'>"</span> Welcome to our restaurant, where we serve fresh, delicious meals that bring people together.<span className='text-blue-700 font-bold text-3xl'>"</span>
    </p>
    {/* <RiDoubleQuotesR className="text-blue-600 ml-3" /> */}
  </div>
</div>


        {/* Our Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold  mb-6 underline underline-offset-8">Our Story</h2>
          <p className="text-lg  max-w-2xl mx-auto">
            Our journey began with a passion for food and a desire to offer something unique to the community.
            From our humble beginnings, we’ve grown into a beloved local spot, known for our diverse menu and
            commitment to using only the freshest ingredients. Whether you’re ordering online or dining with us,
            we promise a delightful experience with every meal.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold  mb-6 underline underline-offset-8">Our Mission</h2>
          <p className="text-lg  max-w-2xl mx-auto">
            Our mission is simple: to provide a quick, delicious, and memorable dining experience. We believe that food should be more than just fuel for the body — it should be an experience that nourishes the soul. We’re committed to delivering the highest quality meals while supporting sustainable, local ingredients.
          </p>
        </div>

        {/* Meet Our Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold  mb-6 underline underline-offset-8">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className=" rounded-lg shadow-lg p-6 w-64 text-center">
              <img src={images.headchef} alt="Chef" className="rounded-full mx-auto mb-4 h-24 w-24" />
              <h3 className="text-xl font-medium ">Chef Sanjeev Kapoor</h3>
              <p >Head Chef</p>
            </div>

            {/* Team Member 2 */}
            <div className=" rounded-lg shadow-lg p-6 w-64 text-center">
              <img src={images.Resmanager} alt="Manager" className="rounded-full mx-auto mb-4 h-24 w-24" />
              <h3 className="text-xl font-medium ">Jane Smith</h3>
              <p className="">Restaurant Manager</p>
            </div>

            {/* Team Member 3 */}
            <div className=" rounded-lg shadow-lg p-6 w-64 text-center">
              <img src={images.waiter} alt="Waiter" className="rounded-full mx-auto mb-4 h-24 w-24" />
              <h3 className="text-xl font-medium ">Michael Lee</h3>
              <p >Senior Waiter</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold  mb-6">Ready to Order?</h2>
          <p className="text-lg  mb-8">
            Explore our full menu and place your order online today. Let us bring the flavors to your door!
          </p>
          <a
            href="/"
            className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
