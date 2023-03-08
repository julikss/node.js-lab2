const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const url = 'https://tsn.ua/news';

let newsArray = [];

const sendRequest = () => {
  newsArray = [];
  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const siteHeading = $('.c-section__title');
      const links = $('.c-card__link');
    
      links.each((i, link) => {
        newsArray.push({url: $(link).attr("href"), heading: $(link).text()});
      })
      getNewsText(newsArray);
    }
  });
}

const setIntervalRequest = () => {
  sendRequest();
  setInterval(() => {
    sendRequest();
  }, 10000);
}

const requestNewsPage = (urlPage) => {
  return new Promise((resolve, reject) => {
    request(urlPage, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const newsText = $('.c-article__body p');  
        resolve(newsText.text());
      }
    })
  })
}

const getNewsText = (newsArr) => {
  let requests = newsArr.map(element =>
    requestNewsPage(element.url)
  );

  Promise.all(requests)
  .then(res => res.forEach((el, index) => {newsArr[index].text = el}))
  .then(res => writeToFiles(newsArray));
}

const writeToFiles = (newsArr) => {
  newsArr.forEach((el, index) => {
    fs.writeFile(`news/${index}.txt`, `${el.heading}\n${el.text}`, (err) => {
      if(err) throw err;
    });
  });
}

module.exports = setIntervalRequest;