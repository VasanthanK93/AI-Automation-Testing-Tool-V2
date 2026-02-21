const mammoth = require("mammoth");

async function extractAcceptanceCriteria(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value;
}

module.exports = { extractAcceptanceCriteria };