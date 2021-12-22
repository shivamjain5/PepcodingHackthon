const request = require("request");
const cheerio = require("cheerio");

function getNxtTopic(url) {
  let link = url
  const puppeteer = require("puppeteer");
  console.log("before");
  let page;
  let browserOpenPromise = puppeteer.launch({
    headless: false
  })
  browserOpenPromise
    .then(function(browser) {
      const pageArrPromise = browser.pages();
      return pageArrPromise;

    }).then(function(browserPages) {
      page = browserPages[0];
      let gotoPromises = page.goto(link);
      return gotoPromises
    })
}
module.exports = getNxtTopic;
