module.exports = {
    concurrency: 1,
    apiKey: 'hqiXr7CVUOBpqkBCHE5101vdC5dceR110ILWlFftNN3txG0110',
    //
    browser: [
        // Add browsers with different viewports
        {width: 1200, height: 800, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {width: 1200, height: 800, name: 'edgechromium'},
        {width: 1200, height: 800, name: 'safari'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
    ],
    // set batch name to the configuration
    batchName: 'Testing Lifecycle'
}