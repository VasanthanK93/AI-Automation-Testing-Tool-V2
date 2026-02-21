const { chromium } = require("playwright");

async function runScenario(scenario) {

  if (!scenario) {
    throw new Error("Scenario is required");
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {

    await page.goto("http://localhost:3000");

    if (scenario.type === "login-success") {
      await page.fill('[name="username"]', "doctor1");
      await page.fill('[name="password"]', "Doctor@123");
      await page.click('[data-testid="login-button"]');
      await page.waitForSelector('[data-testid="dashboard-title"]');
    }

    if (scenario.type === "role-check") {
      await page.fill('[name="username"]', "doctor1");
      await page.fill('[name="password"]', "Doctor@123");
      await page.click('[data-testid="login-button"]');
      await page.goto("http://localhost:3000/appointments");
      await page.waitForSelector('[data-testid="unauthorized"]');
    }

    if (scenario.type === "patient-navigation") {
      await page.fill('[name="username"]', "doctor1");
      await page.fill('[name="password"]', "Doctor@123");
      await page.click('[data-testid="login-button"]');
      await page.goto("http://localhost:3000/patients");
      await page.click('[data-testid="patient-1"]');
      await page.waitForSelector('[data-testid="patient-details"]');
    }

    await browser.close();

    return {
      success: true,
      scenario: scenario.name
    };

  } catch (err) {

    await browser.close();

    return {
      success: false,
      scenario: scenario.name,
      error: err.message
    };
  }
}

module.exports = { runScenario };