const request = require("request");
const cheerio = require("cheerio");
const url = 'https://tsn.ua/news';

let newsArray = [];

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const siteHeading = $('.c-section__title');
    const links = $('.c-card__link');

    console.log(siteHeading.text());

    links.each((i, link) => {
      requestNewsPage($(link).attr("href"), (newsText) => newsArray.push({heading: $(link).text(), text: newsText}));
    })
  }
});

const requestNewsPage = (urlPage, callback) => {
  request(urlPage, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const newsText = $('.c-article__body p');
    
      callback(newsText.text());      
    }
  });
}