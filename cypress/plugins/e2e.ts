// /// <reference types="cypress" />

// const cucumber = require('cypress-cucumber-preprocessor').default;
// const resolve = require('resolve');

// export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
//   const options = {
//     typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
//   };

//   on('file:preprocessor', cucumber(options));
// }