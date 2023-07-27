const {defineConfig} = require('cypress');

module.exports = defineConfig({
    chromeWebSecurity: false,
    video: false,
    defaultCommandTimeout: 25000,
    screenshotOnRunFailure: true,
    numTestsKeptInMemory: 4,
	pageLoadTimeout: 120000,
   "reporter": "cypress-mochawesome-reporter",
   "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "My Test Suite",
    "embeddedScreenshots": true,
    "inlineAssets": true
  },
    env: {
        monEnvironnement: 'local',
    },
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        specPattern: 'cypress/e2e/**/*.feature',
        excludeSpecPattern: '**/*.{js,ts}',
    },
});
