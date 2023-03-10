# Laboratory work 2 - Node.js
Лабораторна робота №2 студенток групи ІП-04, Легенької Юлії, Васильєвої Марини, Саніної Анастасії.

## Setup
1. Install Node JS

2. Clone the repository with the following command:
```bash
https://github.com/julikss/node.js-lab2.git
```

## Description of work
В даній роботі було реалізовано найпростіший web-scrapper. Було обрано сайт з новинами ТСН для наступного функціоналу:
1. Раз в хв відправляється запит на головну сторінку та отримується відповідь.
2. Оброблюється отримана HTML відповідь - список новин.
3. Новини зберігаються в директорії *news* в окремих файлах txt.
4. Реалізований веб-сервер, шо віддає список файлів у директорії.
5. При кліку по елементу списка на сторінці - віддається текст новини.

To try it use the following command:
```bash
node server.js
```


## Відповіді на контрольні запитання

***1. В чому різниця між setTimeout та setInterval?***
<br/>
setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

***2. Що таке блокуючий код?***
<br/>
Blocking is when the additional Javascript operation is blocked until the non-javascript operation is completed. The blocking method is executed synchronously. That means that the program is executed line by line.

***3. Які переваги асинхронного читання з диску перед синхронним?***
<br/>
Асинхронне читання з диску є кращою практикою, коли програма повинна обробляти багато запитів з диску та забезпечувати високу продуктивність та стійкість до помилок.
1. Синхронне читання з диску блокує потік виконання, що означає, що інші процеси будуть чекати, доки завершиться операція читання з диску. У випадку асинхронного читання з диску запускається операція читання у фоновому режимі, тоді як програма продовжує виконуватися. Це зменшує час очікування та забезпечує більш ефективне використання ресурсів комп'ютера.
2. Асинхронне програмування дозволяє обробляти багато запитів одночасно та забезпечує швидкий відгук на запити користувачів.
3. У випадку синхронного читання з диску, якщо виникає помилка, вона призводить до зупинки програми. У випадку асинхронного читання з диску, програма може продовжувати виконання і обробляти інші запити, тоді як помилка оброблюється окремо. Це дозволяє програмі бути більш стійкою до помилок та уникати зупинки всього процесу.
4. Асинхронний код дає більш гнучкий контроль над тим, як і коли виконувати код, особливо у випадку, коли потрібно обробити декілька запитів з диску одночасно.

***4. Опишіть різницю між Callbacks API, Promise API та async/await.***
<br/>
Callbacks API, Promise API та async/await - це різні підходи до асинхронного програмування в JavaScript.
<br/>*Callbacks API* - це підхід до асинхронного програмування, в якому функції, що працюють асинхронно, передаються як аргументи в інші функції. Після виконання асинхронної операції, функція зворотного виклику (callback) виконується з результатом. Цей підхід може бути важким у використанні, особливо якщо потрібно обробляти послідовність асинхронних операцій.
<br/>*Promise API* - це підхід до асинхронного програмування, в якому результат асинхронної операції представляється об'єктом Promise. Promise - це об'єкт, який представляє невиконаний або виконаний асинхронний запит. Promise має стан (pending, fulfilled, rejected) та значення. Promise API дозволяє легко обробляти послідовність асинхронних операцій, використовуючи методи then() та catch().
<br/>*async/await* - це синтаксичний цукор для Promise API. async оголошує функцію, яка повертає Promise, а await очікує на виконання Promise та повертає результат. async/await дозволяє писати асинхронний код так, ніби він синхронний, що робить його більш зрозумілим та легко зчитуваним.
<br/>Отже, основна різниця між цими підходами полягає в тому, як обробляються результати асинхронних операцій. Callbacks API передає функції зворотного виклику для обробки результатів, Promise API та async/await повертають Promise, але async/await надає більш зрозумілий та легкий у використанні синтаксис для роботи з Promise.

***5. Як обробляються помилки при використанні Promise API?***
<br/>
Обробка помилок відбувається за допомогою
1. catch
```
fetch('https://exampleserver.com')
  .then(response => response.json())
  .catch(err => console.log(err)) 
```
2. використання функції then(), де її другий параметр представляє обробник помилки, який як параметр отримує передане з функції reject значення:
```
promise
  .then(function(value){
  },
  function(error){
  });
```
3. try..catch
```
const myPromise = new Promise(function(resolve, reject){
    try{
        console.log("Start");
        startWork();      // doesn't exist func
        resolve("Resolve");
    }
    catch(err){
        reject(`|Error: ${err.message}`);
    }
});

myPromise.catch( function(error){
    console.log(error);
});
```

***6. Як створити директорію через модуль fs? За що відповідає параметр mode?***
<br/>
Для створення нових папок можна скористатися методами fs.mkdir() і fs.mkdirSync():
<br/>
Синтаксис для створення каталогу
```
fs.mkdir(path[, mode], callback)
```
path– це ім'я каталогу, включаючи шлях.
<br/>
mode – це роздільна здатність каталогу, який потрібно встановити. За замовчуванням 0777.
<br/>
callback – це функція зворотного виклику. Жодні аргументи, окрім можливого виключення, не передаються для зворотного виклику завершення.

