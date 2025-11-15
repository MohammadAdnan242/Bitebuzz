import React from 'react';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div
      className={`py-8 ${
        darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-200 text-black'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:flex md:justify-between md:items-center">
        {/* Logo */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span className="text-orange-500 text-2xl font-bold">BiteBuzz</span>
        </div>

        {/* Designed By */}
        <div className="text-center text-lg mb-4 md:mb-0">
          <p>
            &lt;Designed by{' '}
            <span className="text-orange-500 font-semibold">Mohd_Adnan ❤️/&gt;</span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/MohammadAdnan242"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/mohd_adnan_7860a/profilecard/?igsh=MTZ2MnA2cjM5eGljMw=="
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-pink-600"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4 text-sm">
        <p>© 2024 BiteBuzz. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
