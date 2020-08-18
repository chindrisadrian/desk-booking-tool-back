
require('dotenv').config();
// Application insight config
// Do not run on if it's not defined
if (process.env.applicationInsightsInstrumentation !== undefined) {
    const appInsights = require("applicationinsights");
    appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
        .setAutoDependencyCorrelation(true)
        .setAutoCollectRequests(true)
        .setAutoCollectPerformance(true, true)
        .setAutoCollectExceptions(true)
        .setAutoCollectDependencies(true)
        .setAutoCollectConsole(true)
        .setUseDiskRetryCaching(true)
        .setSendLiveMetrics(false)
        .start();
}

/** Require package.json to expose the app name for the logger */
const packageJson = require(`./package.json`);

//Standard server setup.

/**
 * Require morgan so we can capture and log request and response headers
 */
const morgan = require('morgan');

/** Custom Morgan format */
morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.component(`${packageJson.name}`),
        tokens.appShortName(`${packageJson.appShortName}`),
        tokens.appLongName(`${packageJson.appLongName}`),
        tokens.host(`${os.hostname()}`)
    ].join(' ')
})


