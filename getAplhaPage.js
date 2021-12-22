const request = require("request");
const cheerio = require("cheerio");
const getSValue = require("./getSValue.js");

function getAplhaPage(url, enlink) {
  request(url, cb);

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      //console.log(html);
      specialVal(html, enlink);
    }
  }

  function specialVal(html, enlink) {
    let i = 0;
    let j = 0;
    let link = 0;
    let elink = enlink;
    let $ = cheerio.load(html, enlink);
    let getLinkArr = $(".contentsPage__section");
    let tr = $(getLinkArr).find("a");
    // for(i=0;i<tr.length;i++){
    //  link=$(tr[i]).attr("href");
    //
    // }
    link = $(tr[972]).attr("href");
    //console.log(link);
    //console.log(elink);
    let fullLink = `${elink}${link}`;
    //console.log(fullLink);
    getSValue(fullLink, elink);
  }
}
module.exports = getAplhaPage;
