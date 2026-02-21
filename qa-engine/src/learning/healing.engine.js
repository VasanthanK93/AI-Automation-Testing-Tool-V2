const { analyzeFailure } =
  require("../reasoning/multimodal.reasoner");

async function heal(error, screenshotPath) {
  return await analyzeFailure(error, screenshotPath);
}

module.exports = { heal };