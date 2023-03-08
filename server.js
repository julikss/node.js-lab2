const http = require("http");
const fs = require("fs");
const setIntervalRequest = require("./scrapper.js");
const host = 'localhost';
const port = 8000;
const newsFolder = './news/';
let newsFiles = {};

setIntervalRequest();

fs.readdir(newsFolder, (err, files) => {

  files.forEach(el => {
    fs.readFile(`news/${el}`, 'utf8', (err, data) => {
      newsFiles[`${el}`] = data;
    })
  })
});

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.writeHead(200);
  
  response.write(`${JSON.stringify(newsFiles)}`);

  response.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});