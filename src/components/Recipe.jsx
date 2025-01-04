import { useRef, useState } from 'react';
// import Lottie from 'lottie-react';
// import animationData from '../assets/Animation - 1730827168885.json';
import axios from 'axios';

const Recipe = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('Loading...');
  // const chefAnim = useRef();

  const generateAnswer = async () => {
    setAnswer('Loading...');
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA3JEiRyS72oMvQi8V_gjV7q4SkHVsO4S8",
        method: "post",
        data: {
          contents: [{ parts: [{ text: `recipe of ${question} ` }] }],
        },
      });
  
      let cleanAnswer = response.data.candidates[0].content.parts[0].text
        .replace(/\*/g, '')
        .replace(/#/g, '');
  
      cleanAnswer = cleanAnswer.replace(/([.!?])\s+/g, '$1\n\n');
      setAnswer(cleanAnswer.slice(0, 500));
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("Error generating answer. Please try again later.");
    }
  };

  return (
    <div className="relative container mx-auto px-4 py-8 bg-blue-400 opacity-80">
      {/* Lottie animation positioned behind the heading */}
       {/* <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -z-10 opacity-80 w-full max-w-md md:max-w-lg">
        <Lottie animationData={animationData} lottieRef={chefAnim} />
      </div>  */}

      <h1 className="text-3xl font-bold text-center mb-4 text-gray-600 z-10 relative">
        Type Your Delicious Meal!
      </h1>

      <textarea
        cols="30"
        rows="10"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 opacity-70"
      />
      
      <div className="flex justify-center">
        <button
          onClick={generateAnswer}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 transition duration-500 ease-in-out"
        >
          Get Recipe 😎
        </button>
      </div>

      <br />

      <pre className="flex justify-center items-center py-3 min-w-full font-extrabold text-gray-700 bg-gray-200 rounded-md overflow-auto max-h-96 opacity-70">
        {answer}
      </pre>
    </div>
  );
};

export default Recipe;
