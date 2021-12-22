const request = require("request");
const cheerio = require("cheerio");
const getPortalPageHtml = require("./getPortalPageHtml.js")

function getEnglishPageHtml(url) {
  request(url, cb);

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      //getEnglishLink(html);
      //console.log(html);
      getEnglishLink(html);

    }
  }

  function getEnglishLink(html) {
    //cheerio
    let i = 0;
    let $ = cheerio.load(html);
    let getLinkArr = $(".portal-hright.portal-vbot");
    let anchor = $(getLinkArr[i]).find("a");
    let link = $(anchor[i]).attr("href");
    //console.log(link);
    let fullLink = `${url}${link}`;
    //console.log(fullLink);
    //console.log(href);
    //console.log(url);
    getPortalPageHtml(fullLink, url);
  }

}
module.exports = getEnglishPageHtml;
