const { generateEmbedding } =
  require("../knowledge/embedding.service");
const { findSimilar, store } =
  require("../knowledge/semantic.cache");
const { classify } =
  require("../knowledge/drift.detector");

const { mapStoryToScenario } =
  require("./story.mapper");
const { classifyStoryWithLLM } =
  require("./story.classifier");
const { routeScenario } =
  require("./scenario.router");

function splitUserStories(text) {
  return text
    .split(/User Story/i)
    .filter(s => s.trim().length > 20);
}

async function runAITest({ acceptanceCriteria }) {

  const startTime = Date.now();

  const embedding =
    await generateEmbedding(acceptanceCriteria);

  const { bestScore } =
    findSimilar(embedding);

  const stories =
    splitUserStories(acceptanceCriteria);

  const scenarioResults = [];

  for (const story of stories) {

    // LLM classification
    const llmType =
      await classifyStoryWithLLM(story);

    // Fallback mapping
    const mapped =
      mapStoryToScenario(story);

    const scenario = {
      ...mapped,
      type: llmType || mapped.type
    };

    const result =
      await routeScenario(scenario);

    scenarioResults.push({
      id: `TC-${scenarioResults.length + 1}`,
      name: scenario.name,
      module: scenario.module,
      status: result.success ? "PASSED" : "FAILED",
      durationMs: 0,
      healingApplied: false,
      confidenceScore: result.success ? 0.95 : 0.6
    });
  }

  const summary = {
    total: scenarioResults.length,
    passed: scenarioResults.filter(r => r.status === "PASSED").length,
    failed: scenarioResults.filter(r => r.status === "FAILED").length,
    healed: 0,
    durationMs: Date.now() - startTime
  };

  return {
    executionId: `EXEC-${Date.now()}`,
    timestamp: new Date().toISOString(),
    summary,
    similarity: bestScore,
    drift: classify(bestScore),
    testCases: scenarioResults
  };
}

module.exports = { runAITest };