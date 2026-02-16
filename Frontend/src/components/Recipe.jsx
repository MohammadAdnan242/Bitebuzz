import React, { useState } from "react";

const Recipe = () => {
  const [question, setQuestion] = useState(""); // Dish input
  const [answer, setAnswer] = useState("Waiting for your delicious query!");
  const [translatedAnswer, setTranslatedAnswer] = useState(""); // For translated text
  const [language, setLanguage] = useState("hi"); // Default Hindi
  const [loading, setLoading] = useState(false);
  const [translating, setTranslating] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "fr", label: "French" },
    { code: "es", label: "Spanish" },
    { code: "bn", label: "Bengali" },
    { code: "ur", label: "Urdu" },
  ];

  // Generate Recipe
  const generateAnswer = async () => {
    if (!question.trim()) {
      setAnswer("Please enter a dish name!");
      return;
    }

    setAnswer("Loading...");
    setTranslatedAnswer("");
    setLoading(true);

    try {
      // const response = await fetch("http://localhost:5000/recipe", {
      const response = await fetch("https://bitebuzz-gamma.vercel.app/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dish: question }),
      });

      const data = await response.json();

      if (!data.answer) {
        setAnswer("Failed to generate recipe. Please try again.");
      } else {
        setAnswer(data.answer.replace(/([.!?])\s+/g, "$1\n\n"));
      }
    } catch (err) {
      console.error(err);
      setAnswer("Error generating recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Translate Recipe
  const translateAnswer = async () => {
    if (!answer || answer === "Loading..." || answer.startsWith("Error")) return;

    setTranslating(true);
    try {
      const response = await fetch("https://bitebuzz-gamma.vercel.app/translate", {
      // const response = await fetch("http://localhost:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: answer, language }),
      });

      const data = await response.json();
      setTranslatedAnswer(data.translation || "Translation failed.");
    } catch (err) {
      console.error(err);
      setTranslatedAnswer("Translation failed. Please try again.");
    } finally {
      setTranslating(false);
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

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={generateAnswer}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Get Recipe 😎"}
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
            disabled={translating || !answer || answer === "Loading..."}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md disabled:opacity-50 transition duration-300"
          >
            {translating ? "Translating..." : "Translate 🌍"}
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
