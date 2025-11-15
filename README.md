## BiteBuzz 🍽️

BiteBuzz is an innovative food ordering website that combines user-friendly design with cutting-edge technology. Built with React, Redux Toolkit, and Firebase, BiteBuzz offers a seamless food ordering experience with personalized recipe generation powered by the Gemini API.

The platform also includes a dark mode toggle, user data storage with Firebase Firestore, and sleek styling using Tailwind CSS. To enhance interactivity and user experience, the site utilizes popular npm packages like lottie-react, react-spinners, and react-confetti.


## Features 🌟

### 🚀 Core Functionalities
- **Authentication**: Secure user authentication powered by Firebase.
- **Recipe Generator**: Personalized meal recommendations using Gemini API.
- **Dark Mode**: A Redux Toolkit-powered toggle for a modern, user-friendly dark mode.
- **User Data Management**: Efficient storage and retrieval of user data via Firebase Firestore.
- **Admin Panel**: Manage client requests and user details securely.

### 🎨 Styling & Animation
- **Tailwind CSS**: Fully responsive design for a sleek and modern look.
- **Lottie Animations**: Engaging animations with `lottie-react`.
- **React Spinners**: Smooth loading spinners for better user experience.
- **Confetti Effects**: Celebration moments with `react-confetti`.


### 📦 Technologies Used
- **React**: For building the dynamic user interface.
- **Redux Toolkit**: For state management, including dark mode toggle.
- **Firebase**: Authentication and Firestore for database needs.
- **Gemini API**: For generating recipes tailored to user preferences.




## Installation  🛠️

Follow these steps to set up the project locally:
1. Clone the repository:
                                              
                                              
        git clone https://github.com/MohammadAdnan242/BITEBUZZ  

2. Navigate to the Project Directory:

  
  
  
  
        cd BiteBuzz

3. Install Dependencies:
  
  
        npm install

4. Configure Firebase:
Create a firebase.jsx file in the root directory and add the following Firebase configuration:

    apiKey: "",
    authDomain: "foodapp-e0284.firebaseapp.com",
    projectId: "",
    storageBucket: "foodapp-e0284.appspot.com",
    messagingSenderId: "384116941731",
    appId: "1:384116941731:web:7fd743ea4cd6a9985e3016",
    measurementId: "G-DQ7M2MZXVB"

5. Start the Development Server:

    
    
    
       npm start


# Usage 🚧

 Run Locally

 1. Visit (https://bitebuzz0070.netlify.app/) after starting the development server.
 2. Sign up or log in using Firebase authentication.
 3. Browse the app, toggle between light and dark modes, and enjoy personalized recipe suggestions.
 4. Access the admin panel (admin privileges required) to manage user data and client requests.
## Roadmap📂 (Vite)

    BiteBuzz/
    ├── public/                 # Public assets (static files)
    │   ├── index.html          # HTML template file (entry point for Vite)
    │   └── assets/             # Store images, icons, etc.
    ├── src/                    # Main source folder
    │   ├── assets/             # Static assets like images, logos, etc.
    │   ├── components/         # Reusable UI components
    │   │   ├── Navbar/         # Navbar component (navigation, branding)
    │   │   ├── Body/           # Main content component (home page, menu, etc.)
    │   │   ├── Cart/           # Shopping cart component
    │   │   └── Footer/         # Footer component (links, contact info)
    │   ├── features/           # Redux slices for managing state
    │   │   ├── darkModeSlice.js  # Slice for dark mode state
    │   │   ├── userSlice.js      # Slice for user authentication and data
    │   │   └── cartSlice.js      # Slice for cart management
    │   ├── store/              # Redux store configuration
    │   │   └── store.js        # Store setup and combining of reducers
    │   ├── pages/              # Pages of the website
    │   │   ├── Home.js         # Main home page component
    │   │   ├── AdminPanel.js   # Admin panel page (restricted access)
    │   │   └── RecipePage.js   # Recipe generation page
    │   ├── styles/             # Tailwind CSS configurations
    │   │   └── tailwind.css    # Tailwind base styles
    │   ├── utils/              # Utility functions (helpers, API calls, etc.)
    │   ├── App.jsx             # Main app entry point
    │   └── main.jsx            # Vite entry point (renders App.jsx)
    ├── .gitignore              # Git ignore rules
    ├── firebase.jsx                    # Environment variables (Firebase config, API keys, etc.)
    ├── package.json            # npm dependencies and scripts
    ├── vite.config.js          # Vite configuration file
    └── README.md               # Project documentation






## Dependencies📦

Here are the key packages used in the project:

- **Core Libraries**: react, redux, redux-toolkit
- **Firebase**: firebase
- **Styling**: tailwindcss
- **Animations**: lottie-react, react-spinners, react-confetti
Install additional dependencies as needed using:

    npm install <package-name>
## Admin Panel 🛡️

The admin panel is a crucial feature of BiteBuzz that allows administrators to manage the following:

- **Client Requests**: View and manage food orders.
- **User Information**: Access details like user names, email addresses, and phone numbers.
- **Access Control**: Only authorized admins can access this panel, ensuring secure data handling.

Admins can log in with specific credentials and seamlessly manage user data and orders through an intuitive interface.


## License 📜
This project is licensed under the MIT License. See the LICENSE file for details.
## Acknowledgments 🙌

Special thanks to:

- The Firebase team for providing powerful backend services.
- The Gemini API for its recipe generation capabilities.
- The open-source community for amazing libraries like react-spinners and lottie-react.
## Contact 📧

For any inquiries or feedback, feel free to reach out:

- GitHub:  https://github.com/MohammadAdnan242
- Email: adnan242029@gmail.com

# Enjoy using BiteBuzz and happy dining! 🍴🤩
