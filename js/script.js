// "use strict";

// let number = 4.6;

// console.log(-4/0);
// console.log("string" * 4);

// const person = "Alex";

// const bool = true;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//      name: "John",
//      age: 25,
//      isMarried: false
// };

// console.log(obj);

// console.log(obj["name"]);

// let arr = ["plum", "big", 6, "small"];
// console.log(arr[1]);








// !ЛЕКЦИЯ 12

// const arr = ["a", "b", "c"];

// arr[10] =5678;
// console.log(arr);

// const arrObj = {
//      a: "a",
//      "1": "b",
//      2: "c"
// };

// arrObj.b = 1234;
// console.log(arrObj["b"]);
// console.log(arrObj.b);


// const obj = {
//      "Anna": 500,
//      "Alice": 800

// };







// !ЛЕКЦИЯ 13

// 

// const result = confirm("Вилкой в глаз?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));                      -  ответ пользователя всегда строка, но...

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer));                         -  получаем число

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5); 

// const answers = [];

// answers[0] = prompt("Как вас зовут?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);

// console.log(typeof(answers));





// !ЛЕКЦИЯ 14

// const category = "toys";
// console.log("http://someurl.com/" + category);
// console.log(`http://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);





// !ЛЕКЦИЯ 15

// console.log("arr" + " - object");
// console.log(4 + " - object");
// console.log(4 + "5");
// console.log(4 + +"5");

// let  incr = 10,
//      decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);     < -----  Остфиксная форма записи не работает во время выведения

// console.log(++incr);
// console.log(--decr); 

// console.log(5%2);     < -----  знак % делит число и оставляет остаток

// console.log(2 * 4 == 8); 

//  < ----- // && - и (правда правда)
// || - или или (правда)

// const     isChecked = true,
//           isClose = true;

// console.log(isChecked && isClose);       <------- Если два true то будет правда

// const     isChecked = true,
//           isClose = true;

// console.log(isChecked || isClose);        <------- Если хотябы один true то правда

// <------- ! оператор отрицания









// !ЛЕКЦИЯ 19 - СОЗДАЕМ КОНСОЛЬНОЕ ПРИЛОЖЕНИЕ

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//      count: numberOfFilms,
//      movies: {},
//      actors: {},
//      genres: [],
//      privat: false
// };

// const a = prompt("Один из последних просмотреных фильмов?", ""),
//       b = prompt("На сколько вы его оценили?", ""),
//       c = prompt("Один из последних просмотреных фильмов?", ""),
//       d = prompt("На сколько вы его оценили?", "");

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);
      





// !ЛЕКЦИЯ 21 - ДОМАШКА В КОНСОЛЕ

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log("Done!");
// }









// !ЛЕКЦИЯ 22 ЦИКЛЫ

// let num = 50;

// while (num <= 55) {
//      console.log(num);
//      num++;
// }

// do {
//      console.log(num);
//      num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//      console.log(num);
//      num++;
// }

// for (let i = 1; i < 10; i++) {   <-------- break (отменяет цикл)
//      if (i === 6) {
//           break;
//      }
//      console.log(i);
// }

// for (let i = 1; i < 10; i++) {    <------------- continue (убирает значение из цикла)
//      if (i === 6) {
//           continue;
//      }
//      console.log(i);
// }




// !ЛЕКЦИЯ 23 ВЛОЖЕННЫЕ ЦИКЛЫ

// for (let i = 0; i < 3; i++) {
//      console.log(i);
//      for (let j = 0; j < 3; j++) {
//           console.log(j);
//      }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//      for (let j = 0; j < i; j++) {
//           result += "*";
//      }

//      result += "\n";
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//      console.log(`First level: ${i}`);
//      for (let j = 0; j < 3; j++) {
//           console.log(`Second level: ${j}`);
//           for (let k = 0; k < 3; k++) {
//                if (k === 2) continue first;
//                console.log(`Third level: ${k}`);
//           }
//      }
// }

// first: for (let i = 0; i < 3; i++) {
//      console.log(`First level: ${i}`);
//      for (let j = 0; j < 3; j++) {
//           console.log(`Second level: ${j}`);
//           for (let k = 0; k < 3; k++) {
//                if (k === 2) break first;
//                console.log(`Third level: ${k}`);
//           }
//      }
// }



// for (let i = 5; i < 11; i++) {
//      console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//      if (i === 13) {
//           break;
//      }
//      console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//      if (i % 2 == 0)
//      console.log(i);
// }




// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 1;
// while (num <= 13) { 
//      num +=2;
//      console.log(num);
// }


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//      result[i] = arr[i];
//      console.log(result);
// }



// const lines = 7;
// let result = "";

// for (let i = 1; i < lines; i++) {
//      for (let j = 0; j < i; j++) {
//           result += "*";
//      }

//      result += "\n";
// }

// console.log(result);

// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
//     console.log(result);
// }



// ! ЛЕКЦИЯ 25  ФУНКЦИИ И СТРЕЛОЧНЫЕ ФУНКЦИИ

// function showFirstMessage() {
//      console.log("Hello world!");
// }
// showFirstMessage();

let num = 20;

function showFirstMessage(text) {
     console.log(text);
     num = 10;
}

showFirstMessage("Hello world!");
console.log(num);



function calc (a, b) {
     return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret () {
     let num = 50;

     //

     return num;
}
const anotherNum = ret();
console.log(anotherNum);



const loger = function () {
     console.log("Hello");
};
loger ();

// const caalc = (a, b) => a + b;

const caalc = (a, b) => {
     console.log("1");
     return a + b;
};


// ! ЛЕКЦИЯ 26  ДОПОЛНИТЕЛЬНО ПРО АРГУМЕНТЫ ФУНКЦИЙ

// const usdCurr = 28;
// const eurCurr = 32;

// function convert (amount, curr) {
//      console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);


// ! ЛЕКЦИЯ 27  ПРО ВАЖНОСТЬ RETURN

const usdCurr = 28;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}

function promotion (result) {
     console.log(result * discount);

}

// *promotion(convert(500, usdCurr)); <----------- функция в функции не всегда удобна

const res = convert(500, usdCurr);
promotion(res);

