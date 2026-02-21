const fs = require("fs");
const { generate } = require("./ollama.service");

async function analyzeFailure(error, screenshotPath) {
  const base64 = fs.readFileSync(screenshotPath)
    .toString("base64")
    .substring(0, 1000);

  const prompt = `
  Error: ${error}
  Screenshot: ${base64}
  Suggest fix.
  `;

  return await generate(prompt);
}

module.exports = { analyzeFailure };