const { normalize } = require("./normalization");

function mapRequest(body) {

  if (!body) {
    throw new Error("Request body is required");
  }

  if (!body.acceptanceCriteria) {
    throw new Error("acceptanceCriteria is required");
  }

  const mapped = {
    acceptanceCriteria: normalize(body.acceptanceCriteria),
    modelProvider: body.modelProvider || "ollama",
    parallelism: body.parallelism || 2,
    metadata: {
      requestTimestamp: new Date().toISOString(),
      clientId: body.clientId || "anonymous"
    }
  };

  return mapped;
}

module.exports = { mapRequest };