// Даны 3 инпута и кнопка.
// По нажатию на кнопку получите числа, стоящие в этих инпутах и
// запишите их сумму в четвертый инпут.

// const number1 = document.getElementById("number1");
// const number2 = document.getElementById("number2");
// const number3 = document.getElementById("number3");

// const button__result = document.getElementById("button__result");



// button__result.onclick = function () {
//     let result = +number1.value + +number2.value + +number3.value;
//     document.getElementById("result__input").value = result;
// }

// const number = document.querySelector(".number");
// const button = document.querySelector(".button");

// button.onclick = function () {
    
//     for (let i = 0; i < number.velue; i++) {
//         number.velue++;
//         console.log(number);
        
//     }
// }

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }


// const str1 = "Hello",
//     str2 = "World";

//     console.log(str1 + " " + str2 + "!");

// const name = "Alex";
// console.log(`Hello ${name}!`);

// const age = 36;
// console.log(`Мне ${age} лет!`);

// const name = prompt("Ведите Ваше имя");
// alert(`Ваше имя ${name}!`);
// const number = prompt('Введите число');
// alert(Math.pow(number, 2));

// alert(60 * 60 * 60 * 24 * 31)

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


////////////////////////////////////////// Задачи Эйлера //////////////////////////////////


////////////////////////////////////////////////// Задача 1 ///////////////////////////////////////////

// Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.

// const number = 10;
// let sum = 0;

// for (let i = 1; i < number; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     };
    
// }
// console.log(sum);

// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

// const number = 1000;
// let sum = 0;

// for (i = 0; i < 1000; i += 1) {
    
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     };
// }
// console.log(sum);


/////////////////////////////////////////////Задача 2/////////////////////////////////////////

// Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...


// function f(n) {
//     let f1 = 1, f2 = 2, cf = 3;

//     for (i = 3; i <= n; i++) {
//         cf = f1 + f2;
//         f1 = f2;
//         f2 = cf;
//     }
//     return cf;
    
// }
// console.log(f(10));

// const n = 10;

// let f1 = 0, f2 = 1, cf = 0;

// for (i = 1; i <= n; i++) {
//     cf = f1 + f2;
//     f1 = f2;
//     f2 = cf;
//     // return cf;
//     console.log(cf);

// }


// Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.

// const n = 10000000000;

// let f1 = 0, f2 = 1, cf = 0;

// for (i = 1; i <= n; i++) {
//     cf = f1 + f2;
//     f1 = f2;
//     f2 = cf;
//     if (cf % 2 === 0 && cf <= 4000000) {
//         console.log(cf);
//     };

// }

/////////////////////////////////////////////Задача 3/////////////////////////////////////////

// Простые делители числа 13195 - это 5, 7, 13 и 29.



// let number = 13195;
// let sum = 0;

// nextPrime:
// for (i = 2; i <= number; i += 1) { // ЦИКЛ ДЛЯ ОПРЕДЕЛЕНИЯ ПРОСТОГО ЧИСЛА
//     if (13195 % i === 0) {
//         for (let j = 2; j < i; j += 1) {
//         if (i % j === 0) {
//             continue nextPrime;
//         };
//         };
//         console.log(i);   
//     };
// }

// Каков самый большой делитель числа 600851475143, являющийся простым числом?


// let number = 600851475143;
// let sum = 0;

// nextPrime:
// for (i = 2; i <= number; i += 1) { // ЦИКЛ ДЛЯ ОПРЕДЕЛЕНИЯ ПРОСТОГО ЧИСЛА
//     if (13195 % i === 0) {
//         for (let j = 2; j < i; j += 1) {
//         if (i % j === 0) {
//             continue nextPrime;
//         };
//         };
//         console.log(i);   
//     };
// }