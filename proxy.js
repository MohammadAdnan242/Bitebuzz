import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());  // <-- This line is crucial to parse JSON bodies!

app.get("/translate", async (req, res) => {
  const { lang, text } = req.body;  // Now req.body will be defined
  if (!lang || !text) {
    return res.status(400).json({ error: "Missing lang or text" });
  }

  try {
    const url = `https://lingva.garudalinux.org/api/v1/en/${lang}/${encodeURIComponent(text)}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Translation failed:", error.response?.data || error.message);
    res.status(500).json({ error: "Translation failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
