// http://nightwatchjs.org/api
//
module.exports = {
    tags: ['home'],
    "Index Page Loads" : function (browser) {
        browser
            .pause(2000)
            .url(browser.globals.default_url)
            .waitForElementVisible('body', 1000)
            .end();
    },

};
