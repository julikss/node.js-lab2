const request = require("request");
const cheerio = require("cheerio");


request('https://tsn.ua/news', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const siteHeading = $('.c-section__title');
    const siteContainer = $('.c-card__body__embed');
    const output = $('.c-card__title');

    console.log(siteHeading.text());
    //console.log(siteContainer.text());
    console.log(output.text());
  }
});