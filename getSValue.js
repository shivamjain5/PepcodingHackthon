const request = require("request");
const cheerio = require("cheerio");
const getInfo = require("./getInfo.js");

function getSValue(url, enlink) {
  request(url, cb);

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      //console.log(html);
      getSInfo(html, enlink);
    }
  }

  function getSInfo(html, enlink) {
    let $ = cheerio.load(html);
    let getLinkArr = $(".mw-allpages-chunk");
    let ul = $(getLinkArr).find("a");
    let link = $(ul[0]).attr("href");
    let elink = enlink
    let fullLink = `${elink}${link}`;
    //console.log(fullLink);
    getInfo(fullLink);
  }

}
module.exports = getSValue;
