import { useState } from "react";
import axios from "axios";

const Recipe = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Waiting for your delicious query!");
 

  const generateAnswer = async () => {
    setAnswer("Loading...");
    
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAN06XMeBh8qfXD0NqWP44yxP0nLNASJx4",
        method: "post",
        data: {
          contents: [{ parts: [{ text: `recipe of ${question} ` }] }],
        },
      });

      let cleanAnswer = response.data.candidates[0].content.parts[0].text
        .replace(/\*/g, "")
        .replace(/#/g, "");

      cleanAnswer = cleanAnswer.replace(/([.!?])\s+/g, "$1\n\n");
      setAnswer(cleanAnswer.slice(0, 800));
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("Error generating answer. Please try again later.");
    }
  };


  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-indigo-500 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Find Your Delicious Recipe 🍳
        </h1>

        <textarea
          placeholder="Type a dish name, e.g., Pasta, Pancakes..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full h-28 rounded-lg border border-gray-300 p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none placeholder-gray-500"
        />

        <div className="flex justify-center">
          <button
            onClick={generateAnswer}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
          >
            Get Recipe 😎
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner overflow-auto max-h-96">
          <pre id="google_translate" className="text-gray-700 font-mono whitespace-pre-wrap">
            {answer}
          </pre>
        </div>

      

       
      </div>
    </div>
  );
};

export default Recipe;
