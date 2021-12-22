const puppeteer = require('puppeteer');
const axios = require('axios');
const jsdom = require('jsdom');
const main = require('./main.js')
let url = "https://www.wikipedia.org/";

// Automation code below
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });
  const page = await browser.newPage();
  await page.goto('https://www.wikipedia.org/');

  await page.waitForSelector("#js-link-box-en strong");
  await page.click("#js-link-box-en strong");
  await page.waitForSelector(`a[title="Wikipedia:Contents/Portals"]`);
  await page.click(`a[title="Wikipedia:Contents/Portals"]`)
  await page.waitForSelector(`a[title="Wikipedia:Contents/A–Z index"]`);
  await page.click(`a[title="Wikipedia:Contents/A–Z index"]`)
  await page.waitForSelector(`a[title="Special:AllPages/S"]`);
  await page.click(`a[title="Special:AllPages/S"]`);
  await page.waitForSelector(`.mw-allpages-chunk li a`);
  await page.click(`.mw-allpages-chunk li a`);
  main(url);
})();
