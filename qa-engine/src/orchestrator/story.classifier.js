const { generate } = require("../reasoning/ollama.service");

async function classifyStoryWithLLM(storyText) {

  const prompt = `
  Classify this user story into one of:
  - login-success
  - login-failure
  - patient-navigation
  - appointment-access
  - role-check

  Only return the type.

  Story:
  ${storyText}
  `;

  const response = await generate(prompt);

  return response.trim().toLowerCase();
}

module.exports = { classifyStoryWithLLM };