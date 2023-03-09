# Laboratory work 2 - Node.js
Лабораторна робота №2 студенток групи ІП-04, Легенької Юлії, Васильєвої Марини, Саніної Анастасії.

## Setup
1. Install Node JS

2. Clone the repository with the following command:
```bash
https://github.com/julikss/node.js-lab2.git
```

## Description of work
there must be sth

To try it use the following command:
```bash
there must be sth
```


## Відповіді на контрольні запитання

***1. В чому різниця між setTimeout та setInterval?***
<br/>
there must be sth

***2. Що таке блокуючий код?***
<br/>
there must be sth

***3. Які переваги асинхронного читання з диску перед синхронним?***
<br/>
there must be sth

***4. Опишіть різницю між Callbacks API, Promise API та async/await.***
<br/>
there must be sth

***5. Як обробляються помилки при використанні Promise API?***
<br/>
Обробка помилок відбувається за допомогою
<br/>
1)catch
<br/>
fetch('https://exampleserver.com')
<br/>
  .then(response => response.json())
  <br/>
  .catch(err => console.log(err)) 
  <br/>
2)використання функції then(), де її другий параметр представляє обробник помилки, який як параметр отримує передане з функції reject значення:
<br/>
promise
<br/>
  .then(function(value){
  <br/>
  },
  <br/>
  function(error){
<br/>
  });
  3)try..catch
  <br/>
const myPromise = new Promise(function(resolve, reject){
<br/>
    try{
    <br/>
        console.log("Start");
        <br/>
        startWork();      // doesn't exist func
        <br/>
        resolve("Resolve");
        <br/>
    }
    <br/>
    catch(err){
    <br/>
        reject(`|Error: ${err.message}`);
        <br/>
    }
    <br/>
});
<br/>
myPromise.catch( function(error){
<br/>
    console.log(error);
    <br/>
});
<br/>

***6. Як створити директорію через модуль fs? За що відповідає параметр mode?***
<br/>
there must be sth

