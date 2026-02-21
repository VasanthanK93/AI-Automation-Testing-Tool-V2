require("dotenv").config();

const config = {

  PORT: process.env.PORT || 5000,

  OLLAMA_BASE_URL:
    process.env.OLLAMA_BASE_URL || "http://localhost:11434",

  DEFAULT_MODEL_PROVIDER:
    process.env.DEFAULT_MODEL_PROVIDER || "ollama",

  SEMANTIC_THRESHOLD:
    parseFloat(process.env.SEMANTIC_THRESHOLD) || 0.92,

  GEMINI_API_KEY:
    process.env.GEMINI_API_KEY || null,

  MAX_PARALLELISM:
    parseInt(process.env.MAX_PARALLELISM) || 3
};

module.exports = { config };