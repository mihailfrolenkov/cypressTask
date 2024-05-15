const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, // workaraund for saucedemo.com erorr 401 issue
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    baseUrl:'https://fakerestapi.azurewebsites.net'
    }
  },
});
