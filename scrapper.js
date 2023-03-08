const fs = require("fs");
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
      newsArray.push({url: $(link).attr("href"), heading: $(link).text()});
    })
    getNewsText(newsArray);
  }
});

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
  .then(res => console.log(newsArr))
  .then(res => writeToFiles(newsArr));
}

const writeToFiles = (newsArr) => {
  newsArr.forEach((el, index) => {
    fs.writeFile(`${index}.txt`, `${el.heading}\n${el.text}`, (err) => {
      if(err) throw err;
    });
  });
}