const request = require("request");
const cheerio = require("cheerio");
const axios = require('axios');
const jsdom = require('jsdom');
const fs = require("fs");
const getNxtTopic = require("./getNxtTopic.js");

function getInfo(url) {
  request(url, cb)

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      // console.log(html);
      getData(html);

    }
  }

  function getData(html) {
    let i = 0;
    let $ = cheerio.load(html)
    let getLinkArr = $(".toclevel-1.tocsection-1");
    // let li=$(getLinkArr).find("li");
    // for(i=0;i<li.length;i++){
    //   let link=$(li[i]).attr("href");
    //   console.log(link);
    // }
    console.log(url);
    let li = $(getLinkArr).find("a");
    let link = $(li[0]).attr("href");
    let fullLink1 = `${url}${link}`;
    //---------------------------------------------------------------
    let link2 = $(".toclevel-1.tocsection-4")
    let li2 = $(link2).find("a");
    let lnk = $(li2[0]).attr("href");
    let fullLink2 = `${url}${lnk}`;
    //console.log(fullLink2);
    //console.log(fullLink);
    //----------------------------------------------------------------
    let link3 = $(".toclevel-1.tocsection-5")
    let li3 = $(link3).find("a");
    let lnk1 = $(li3[0]).attr("href");
    let fullLink3 = `${url}${lnk1}`;
    //-------------------------------------------------------------
    // getNxtTopic(fullLink1);
    // getNxtTopic(fullLink2);
    // getNxtTopic(fullLink3);

    //-==============================================-
    scrap(url);
  }

  function scrap(url) {
    let prom = axios.get(url);
    prom.then(function(res) {
      let html = res.data;
      // console.log(html);
      let dom = new jsdom.JSDOM(html);
      let document = dom.window.document;
      let para_content = document.querySelectorAll('.mw-parser-output p');

      for (var i = 2; i <= 13; i++) {
        console.log(para_content[i].textContent);
      }
      let heading = document.querySelectorAll('#Descendants_and_related_characters_in_the_Latin_alphabet');

      let heading_array1 = document.querySelectorAll('#Descendants_and_related_characters_in_the_Latin_alphabet');
      let ul_List = document.querySelectorAll('#mw-content-text ul');
      for (var i = 13; i <= 15; i++) {
        console.log(`${heading[0].textContent} ${ul_List[i].textContent}`);
      }
    })
  }
}
module.exports = getInfo;
