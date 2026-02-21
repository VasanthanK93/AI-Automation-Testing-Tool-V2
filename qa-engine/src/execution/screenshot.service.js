const path = require("path");

function buildScreenshotPath(prefix = "failure") {

  const timestamp = Date.now();

  return path.resolve(
    `screenshots/${prefix}-${timestamp}.png`
  );
}

module.exports = { buildScreenshotPath };