require('@babel/register')({
  presets: [[
    '@babel/preset-env',
    { targets: { node: 8 } },
  ]],
  babelrc: false,
});

const video = require('wdio-video-reporter');

const config = {
  // Setup the browser window
 // before: function (capabilities, specs) {
  //  browser.setWindowPosition(0, 0);
  //  browser.setWindowSize(1320, 768);
 // },


  // ===============
  // Custom settings
  // ===============
  logLevel: 'silent', // trace | debug | info | warn | error | silent
  outputDir: './_results_',
  reporters: [
    'spec',
    [video, {
      saveAllVideos: true,       // If true, also saves videos for successful test cases
      videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
      videoRenderTimeout: 5,      // Max seconds to wait for a video to finish rendering
    disableWebdriverStepsReporting: true,
}],
  //  ['allure', {
   //   outputDir: './_results_/allure-raw',
    //  disableWebdriverStepsReporting: true,
    //  disableWebdriverScreenshotsReporting: true,
  //  }],
  ],



  // ============
  // Capabilities
  // ============
  services:[ [
    'selenium-standalone'],
['image-comparison',
        // The options
        {
            // Some options, see the docs for more
            baselineFolder: './tests/Baseline/',
            formatImageName: '{tag}-{logName}-{width}x{height}',
            screenshotPath: './tests/screenshot/',
            savePerInstance: true,
            autoSaveBaseline: true,
            blockOutStatusBar: true,
            blockOutToolBar: true,
            // NOTE: When you are testing a hybrid app please use this setting
            isHybridApp: true,
            // Options for the tabbing image
            tabbableOptions:{
                circle:{
                    size: 18,
                    fontSize: 18,
                    // ...
                },
                line:{
                    color: '#ff221a', // hex-code or for example words like `red|black|green`
                    width: 3,
                },
            }
            // ... more options
        }],
   ],
  capabilities: [
    {
      maxInstances: 2,
      browserName: 'chrome',
      acceptInsecureCerts : true,
    },
    {
      maxInstances: 2,
      browserName: 'firefox',
      acceptInsecureCerts : true,
    },
  ],



  // ==================
  // Some nice defaults
  // ==================
  specs: [
    './test/specs/yahoomailtest.spec.js'
],
  deprecationWarnings: true,
  maxInstances: 10,
  sync: true,
  coloredLogs: true,
  bail: 1,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
    mochaOpts: {
        // Babel setup
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
};

module.exports = {
  config,
};
