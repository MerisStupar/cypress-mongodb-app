const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "ReportList",
    embeddedScreenshots: false,
    inlineAssets: true,
    saveAllAttempts: false,
    failOnStatusCode: false,
    chromeWebSecurity: false,
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: 3000,
    waitForAnimations: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
