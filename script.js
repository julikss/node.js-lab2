const namesBlock = document.querySelector('.namesBlock');
const newsBlock = document.querySelector('.newsBlock');

const displayNews = (arrOfNews) => {
  let listOfFiles = '';
  
  for (const el of arrOfNews) {
      listOfFiles += `
        <div class="names">${Object.keys(el)[0]}</div>
      `
    }
  
  namesBlock.innerHTML = listOfFiles;

  const names = document.querySelectorAll('.names');

  for (const name of names) {
    name.addEventListener('click', () => {
      for (const el of arrOfNews) {
        if (name.innerHTML === Object.keys(el)[0]) {
          newsBlock.innerHTML =Object.values(el)
        }
      }
    })
  }
}


const getFiles = async () => {
  let response = await fetch("http://localhost:8000/")
  .then(res => res.json());
  displayNews(response);
}


getFiles();