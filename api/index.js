import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// === Startup Logs ===
// Debug: Server startup - can be enabled for debugging
// console.log("🟡 Booting Express server...");
// console.log("📦 NODE_ENV:", process.env.NODE_ENV);
// console.log("📦 PORT (from Cloud Run?):", process.env.PORT);

// === Constants ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "..", ".env") });
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "https://localhost:5173",
  "http://localhost:5174/",
  "https://localhost:5174/",
  "http://signal-remains.chrismahlke.io",
  "https://signal-remains.chrismahlke.io/",
].filter(Boolean);

// === Global Error Handlers ===
process.on("uncaughtException", (err) => {
  // Debug: Uncaught exception - can be enabled for debugging
  // console.error("❌ Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  // Debug: Unhandled rejection - can be enabled for debugging
  // console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
});

// === Middleware ===
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  })
);
app.use(express.json());

// === Health Check ===
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Gemini API server is running" });
});

// === Gemini Proxy Endpoint ===
app.post("/api/gemini", async (req, res) => {
  // Debug: API endpoint hit - can be enabled for debugging
  // console.log("🔧 /api/gemini endpoint hit from origin:", req.get("origin"));

  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Debug: Missing API key - can be enabled for debugging
    // console.error("❌ Missing Gemini API key. Please set GEMINI_API_KEY in .env file");
    return res.status(500).send({ message: "Missing Gemini API key" });
  }

  if (!prompt) {
    return res.status(400).send({ message: "Prompt is required" });
  }

  try {
    // Debug: Requesting Gemini response - can be enabled for debugging
    // console.log("🌐 Requesting Gemini response...");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      let errorBody;
      try {
        errorBody = await response.text();
        // Debug: Gemini error body - can be enabled for debugging
        // console.error("❌ Gemini error body:", errorBody);
      } catch (parseError) {
        // Debug: Parse error - can be enabled for debugging
        // console.error("❌ Could not parse Gemini error body:", parseError);
        errorBody = "Unable to parse error response";
      }

      // Debug: Gemini API error - can be enabled for debugging
      // console.error("❌ Gemini API error:", {
      //   status: response.status,
      //   statusText: response.statusText,
      //   headers: Object.fromEntries(response.headers.entries()),
      //   body: errorBody,
      // });

      return res.status(response.status).send({
        message: `Gemini API error: ${response.status} ${response.statusText}`,
        raw: errorBody,
      });
    }

    const data = await response.json();

    const rawText = (data?.candidates?.[0]?.content?.parts?.[0]?.text || "")
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .replace(/^[\s\S]*?({)/, "$1")
      .replace(/,\s*}/g, "}")
      .replace(/[""]/g, '"')
      .trim();

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch (err) {
      // Debug: Failed to parse Gemini JSON - can be enabled for debugging
      // console.error("❌ Failed to parse Gemini JSON:", rawText);
      return res.status(200).json({
        content: "Unable to parse structured response.",
        raw: rawText,
      });
    }

    // Debug: Gemini response parsed successfully - can be enabled for debugging
    // console.log("✅ Gemini response parsed successfully");
    return res.status(200).json(parsed);
  } catch (error) {
    // Debug: Gemini API fetch failed - can be enabled for debugging
    // console.error("❌ Gemini API fetch failed:", error);
    return res.status(500).json({
      message: "Failed to fetch from Gemini",
      error: error.message || error,
    });
  }
});

// === Secure Config Endpoint for Client ===
app.get("/api/config", (req, res) => {
  const mapsKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!mapsKey) {
    return res.status(500).json({ message: "Google Maps API key is missing" });
  }

  res.json({ googleMapsApiKey: mapsKey });
});

// === Serve frontend (dist/) in production ===
app.use(express.static(path.join(__dirname, "..", "dist")));

try {
  app.get("/*", (req, res) => {
    // Debug: Serving frontend for unmatched route - can be enabled for debugging
    // console.log("📦 Serving frontend for unmatched route:", req.originalUrl);
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
  });
  // Debug: Fallback route set - can be enabled for debugging
  // console.log("✅ Fallback route set.");
} catch (err) {
  // Debug: Error setting fallback route - can be enabled for debugging
  // console.error("❌ Error setting fallback route:", err);
}

// === Start Server ===
try {
  app.listen(PORT, "0.0.0.0", () => {
    
  });
} catch (err) {
  // Debug: Failed to start server - can be enabled for debugging
  // console.error("❌ Failed to start server:", err);
}
