const scenarioCatalog = [
  { keyword: "log in", type: "login-success", module: "Authentication" },
  { keyword: "invalid", type: "login-failure", module: "Authentication" },
  { keyword: "patient", type: "patient-navigation", module: "Patient Management" },
  { keyword: "appointment", type: "appointment-access", module: "Appointment Management" },
  { keyword: "unauthorized", type: "role-check", module: "RBAC" }
];

function mapStoryToScenario(storyText) {

  const lower = storyText.toLowerCase();

  for (const rule of scenarioCatalog) {
    if (lower.includes(rule.keyword)) {
      return {
        name: storyText.split("\n")[0].slice(0, 60),
        type: rule.type,
        module: rule.module,
        storyText
      };
    }
  }

  return {
    name: "Generic Scenario",
    type: "generic",
    module: "Unknown",
    storyText
  };
}

module.exports = { mapStoryToScenario };