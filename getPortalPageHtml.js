const request = require("request");
const cheerio = require("cheerio");
const getAplhaPage = require("./getAplhaPage");

function getPortalPageHtml(url, enlink) {
  request(url, cb);

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      //console.log(html);
      getIndexPage(html, enlink);
    }
  }

  function getIndexPage(html, enlink) {
    let i = 0;
    let j = 0
    let elink = enlink;
    let $ = cheerio.load(html);
    let getLinkArr = $(".hlist.noprint");
    let anchor = $(getLinkArr[0]).find("a");
    //  let link=$(anchor[8]).attr("href");
    let link = $(anchor[0]).attr("title");
    //console.log(link);
    //let val=link.split("/").pop();
    //console.log(link);
    let fullLink = `https://en.wikipedia.org/wiki/${link}/A-Z_index`;
    //console.log(fullLink);
    //console.log(elink);
    getAplhaPage(fullLink, elink);

  }
}

module.exports = getPortalPageHtml;
