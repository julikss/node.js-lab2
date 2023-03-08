const http = require("http");
const fs = require("fs");
const setIntervalRequest = require("./scrapper.js");
const host = 'localhost';
const port = 8000;
const newsFolder = './news/';
let newsFiles = [];

setIntervalRequest();

fs.readdir(newsFolder, (err, files) => {
  files.forEach(el => newsFiles.push(el));
});

const requestListener = (request, response) => {
  response.writeHead(200);
  response.write('<ul>')
  for (let i = 0; i < newsFiles.length; i++) {
    response.write(`<li>${newsFiles[i]}</li>`)
  }
  response.write('</ul>')
  response.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});