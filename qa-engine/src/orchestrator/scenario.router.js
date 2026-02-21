const { runScenario } =
  require("../execution/playwright.runner");

async function routeScenario(scenario) {

  switch (scenario.type) {

    case "login-success":
    case "login-failure":
    case "patient-navigation":
    case "appointment-access":
    case "role-check":
      return await runScenario(scenario);

    default:
      return {
        success: false,
        scenario: scenario.name,
        error: "Unsupported scenario type"
      };
  }
}

module.exports = { routeScenario };