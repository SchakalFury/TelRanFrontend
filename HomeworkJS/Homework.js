"use strict";

/**
 * First level: - Написать программу, которая получает два числа и выводит информацию:
–- если первое число больше, то “Первое число больше второго”
–- если второе число больше, то “Второе число больше первого”
–- если числа равны, то информацию о том, что они равны.
 * 
 * 
 */

// function result(a, b) {
//     if(a > b){
//         console.log('Первое число больше второго')
//     }else{
//         console.log('Второе число больше первого')
//     }
// }

//  const firstNumber = Number(prompt("Enter first number::"));
//  const secondNumber = Number(prompt("Enter second number::"));
//  result(firstNumber, secondNumber)







 /**
  * 
  * Объявите две переменные: admin и username. Запишите строку со своим именем в переменную username. Скопируйте значение из переменной username в admin. Выведите в консоль значение admin.
*/

// let username = 'MIKALAI';
// let admin = username;
// console.log(admin);





/**
 * Сравните строки (больше/меньше): "оливье" и "ананас", "кодировка" и "котировка", "22" и "222". Опишите в комментариях, почему получился именно такой результат.
 */

// строки в JS сравниваются посимвольно. Если первый символ первой строки больше первого символа
//второй строки => первая строка больше второй. 

// let Olivie = 'оливье';
// let pineapple = 'ананас';
// console.log(Olivie > pineapple);
// let coding = 'кодировка';
// let quote= 'котировка';
// console.log(coding > quote);
// let twentyTwo = '22';
// let twoHundredTwentyTwo = '222';
// console.log(twentyTwo < twoHundredTwentyTwo)







/**
 * Напишите программу, которая считывает значение из prompt и выводит фразу “Это значение можно преобразовать в число” или “Это значение преобразовать в число не получится. Получится NaN
 */

// let numb = Number(prompt('Введите проверямое число'))
// if (typeof numb == 'number'){
//     console.log('Это можно преобразовать в число')
// }else {
//     console.log('ПОТРАЧЕНО')
// }








/**
 * Написать цикл, который выводит только четные числа массива (подсказка: посмотрите в сторону математических операций и взятия остатка от деления).
 */


// function randomInt(min, max){
//     return Math.floor(Math.random() * (max - min)) + min
// } 

// var numberlistB = [];
// numberlistB.length =  randomInt(10, 20); 


// for (let i = 0; i < numberlistB.length; i++ ){
//     numberlistB[i] = randomInt(0, 100)
//         if(numberlistB[i] % 2 === 0){
//             console.log(numberlistB[i])
//         }
// }



/**
 * Задача со *: Вывести значения произвольного массива (например, Ваши любимые музыкальные исполнители) справа налево с шагом два
 */
// var numberlistB = ['АNGST', 'Einsamkeit', 'Satura', 'Inferno', 'Stille', 'Elodia', 'Fassade', 'Echos', 'Lichtgestalt', 'Sehnsuht', 'Revolution', 'Hoffnung', 'Testimonium'];
// for (var i = numberlistB.length; i >= 0 ; i -= 2) {
//     console.log(numberlistB[i])
// }




/**
 * Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
 */

// function randomInt(min, max){
//     return Math.floor(Math.random() * (max - min)) + min
// } 

// var numberlistB = [];
// numberlistB.length =  randomInt(10, 20); 
// let evenNumber = 0;
// let oddNumber = 0;


// for (let i = 0; i < numberlistB.length; i++ ){
//     numberlistB[i] = randomInt(0, 100)
//     if(numberlistB[i] % 2 > 0){
//         oddNumber += numberlistB[i]
//     }if (numberlistB[i] % 2 === 0){
//         evenNumber += numberlistB[i]
//     }
//         }

// console.log('Чётные числа === '+ evenNumber)
// console.log('Нечётные числа === '+ oddNumber)
// console.log('Разница между ними:')
// if(evenNumber > oddNumber){
//     console.log(evenNumber - oddNumber)
// }else{
//     console.log(oddNumber - evenNumber)
// }



/**
 * Предпоследняя задача со *
 */


// const arr = [15, 38, 12, 38,82,84 ,46,90 ,25 ,83 ,67 ,4 ,58 ,39 ,91 ,36 ,58 ,89 ,76, 33, 85] 

// let firstNumber = 0;
// let lastNumber = 0;

// if(arr[0] > 10){
//   firstNumber += arr.shift() * 2 
// }
// if(arr.slice(-1) > 25){
//   lastNumber += arr.pop() - 25
// }

// if(lastNumber != 0){
//   arr.unshift(lastNumber)
// }

// if(firstNumber != 0){
//   arr.push(firstNumber)
// }

// console.log(arr)
// console.log(firstNumber)
// console.log(lastNumber)



/**
 * Последняя задача со звёздочкой
 */


// var arr = [15, 38, 12, 38, 82, 84, 46, 90, 25, 83, 67, 4, 58, 39, 91, 36, 58, 89, 76, 33, 85] 

// var result = Math.max(...arr) //извините мне мою наглость, я человек лаконичный...

// console.log('TOTAL :: ' + result)