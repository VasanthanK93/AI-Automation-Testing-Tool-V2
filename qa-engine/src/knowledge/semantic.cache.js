let cache = [];

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((s, v) => s + v*v, 0));
  const normB = Math.sqrt(b.reduce((s, v) => s + v*v, 0));
  return dot / (normA * normB);
}

function findSimilar(newEmbedding) {
  let best = null;
  let bestScore = 0;

  for (const entry of cache) {
    const score = cosineSimilarity(newEmbedding, entry.embedding);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return { best, bestScore };
}

function store(entry) {
  cache.push(entry);
}

module.exports = { findSimilar, store };