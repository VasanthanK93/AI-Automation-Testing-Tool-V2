function normalize(text) {
  return text
    .replace(/\r/g, "")
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 5)
    .join("\n");
}

module.exports = { normalize };