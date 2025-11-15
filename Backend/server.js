import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // max 10 requests per minute
});
app.use(limiter);

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ------------------------
// Recipe generation
// ------------------------
app.post("/recipe", async (req, res) => {
  try {
    const { dish } = req.body;
    if (!dish) return res.status(400).json({ error: "Dish name required" });

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      `Give me a detailed recipe for: ${dish}. Include ingredients and steps.`
    );

    res.json({ answer: await result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

// ------------------------
// Translation
// ------------------------
app.post("/translate", async (req, res) => {
  try {
    const { text, language } = req.body;
    if (!text || !language) return res.status(400).json({ error: "Text and language required" });

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      `Translate the following text to ${language}:\n\n${text}`
    );

    res.json({ translation: await result.response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Translation failed" });
  }
});

// ------------------------
// Start server
// ------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
module.exports = app;

