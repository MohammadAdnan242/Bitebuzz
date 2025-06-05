import { useState } from "react";
import axios from "axios";

const Recipe = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Waiting for your delicious query!");
  const [translatedAnswer, setTranslatedAnswer] = useState("");
  const [language, setLanguage] = useState("hi"); // Default Hindi
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    setAnswer("Loading...");
    setTranslatedAnswer(""); // Reset translated text

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

  const translateAnswer = async () => {
  if (!answer || answer === "Loading..." || answer.startsWith("Error")) return;

  setLoading(true);
  try {
    // Clean the answer: replace newlines and limit length
    let cleanText = answer.replace(/[\r\n]+/g, " ").slice(0, 100);

    const res = await axios.get(
      `http://localhost:5000/translate?lang=${language}&text=${encodeURIComponent(cleanText)}`
    );
    const translated = res.data.translation;
    setTranslatedAnswer(translated);
  } catch (err) {
    console.error("Translation Error:", err);
    setTranslatedAnswer("Translation failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "fr", label: "French" },
    { code: "es", label: "Spanish" },
    { code: "bn", label: "Bengali" },
    { code: "ur", label: "Urdu" },
  ];

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

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={generateAnswer}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300"
          >
            Get Recipe 😎
          </button>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>

          <button
            onClick={translateAnswer}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50"
          >
            {loading ? "Translating..." : "Translate 🌍"}
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner overflow-auto max-h-96">
          <pre className="text-gray-700 font-mono whitespace-pre-wrap">
            {translatedAnswer || answer}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
