function classify(score) {
  if (score >= 0.95) return "NONE";
  if (score >= 0.85) return "MINOR";
  if (score >= 0.70) return "MODERATE";
  return "MAJOR";
}

module.exports = { classify };