"use strict";

// let number = 4.6;

// console.log(-4/0);
// console.log("string" * 4);

// const person = "Alex";

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);

// // const obj = {
// //      name: "John",
// //      age: 25,
// //      isMarried: false
// // };

// // console.log(obj);

// console.log(obj["name"]);

// // let arr = ["plum", "big", 6, "small"];
// // console.log(arr[1]);








// // ЛЕКЦИЯ 12

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







// // ЛЕКЦИЯ 13

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





// ЛЕКЦИЯ 14

// const category = "toys";
// console.log("http://someurl.com/" + category);
// console.log(`http://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);





// ЛЕКЦИЯ 15

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

