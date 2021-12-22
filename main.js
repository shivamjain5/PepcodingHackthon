let url = "https://www.wikipedia.org/";
const request = require("request");
const cheerio = require("cheerio");
const getEnglishPageHtml = require("./pageenglish.js");

function main(url) {
  request(url, cb);

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      //console.log(html)
      getEnglishPageLink(html);
    }
  }

  function getEnglishPageLink(html) {
    let i = 0;
    let $ = cheerio.load(html);
    let link = $(".link-box");
    let href = $(link).attr("href");
    //console.log(href);
    let fullLink = `https:${href}`;
    getEnglishPageHtml(fullLink);

  }
}
module.exports = main;
