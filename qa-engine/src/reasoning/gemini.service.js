const axios = require("axios");
const { config } = require("../config");

async function generate(prompt) {

  if (!config.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${config.GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ]
    }
  );

  return response.data.candidates[0].content.parts[0].text;
}

async function generateMultimodal(prompt, base64Image) {

  if (!config.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1/models/gemini-pro-vision:generateContent?key=${config.GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: "image/png",
                data: base64Image
              }
            }
          ]
        }
      ]
    }
  );

  return response.data.candidates[0].content.parts[0].text;
}

module.exports = {
  generate,
  generateMultimodal
};