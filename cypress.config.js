const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: 3000,
    waitForAnimations: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalSessionAndOrigin: true,
  },
});
