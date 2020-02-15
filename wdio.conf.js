const CONFIG = require('./test/config.js');

exports.config = {
  specs: [
    //Fro running test scipt
    // `./test/testScripts/${CONFIG.folderTest}-test/attachment.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/text.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/datetime.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/tabs.js`,
    `./test/testScripts/${CONFIG.folderTest}-test/alert.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/textarea.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/spinner.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/label.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/dialog.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/fieldgroup.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/colorpicker.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/icon-button.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/normalButton.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/submitButton.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/radio-button.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/multiplechoice.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/notify-popup.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/checkbox.js`,

    // `./test/testScripts/${CONFIG.folderTest}-test/dropdown.js`,
    // `./test/testScripts/${CONFIG.folderTest}-test/table.js`,

  ],

  suites: {
    preparation: [
      './test/testScripts/preparation/importSource.js'
    ],
  },

  maxInstances: 10,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: ['--headless', '--disable-gpu', 'no-sandbox', "--window-size=1920,1080"],
    },
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 900000
  },
};
