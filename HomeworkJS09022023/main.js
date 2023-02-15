"use strict"



/**
 * 
 * Описание занятия: - Описать функцию, которая получает в качестве аргумента число
и возвращает массив из чисел от 0 до указанного числа. (Кто сделал это на уроке, может не делать в дз)
 */

// function array(ar) {
//     const array = [];   
//     for(let a = 0; a <= ar; a++){
//     array.push(a)
//     }
//      return array;
// }


/**
 * Написать результат выполнения выражения и пояснить в комментариях к коду, почему результат именно такой:
-- "Winter" || "Summer" && "Srping" || "Autumn"
-- ("Winter" || "Summer") && ("Srping" || "Autumn")
-- !"" && !505 && !!0 && !"Hello!"
-- !!(!"" && !505 && !!0 && !"Hello!")
-- "Как дела?" && (!505 && !!0) || "Hello!"
-- (false || "Новая строка" && "" || 2023) && !(0 && 10 && "Еще одна строка")
-- false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка"
 */


// console.log("Winter" || "Summer" && "Srping" || "Autumn"); // winter ==> т.к && имеет приоритет, получается winter || spring || Autumn, возвращает первое истинное;
// console.log(("Winter" || "Summer") && ("Srping" || "Autumn"));//получается winter && spring, возвращает первое истинное
// console.log(!"" && !505 && !!0 && !"Hello!"); // && возвращает первый false (!505)
// console.log(!!(!"" && !505 && !!0 && !"Hello!")); // !"" && !505 возвращает false, !!false === false
// console.log("Как дела?" && (!505 && !!0) || "Hello!");// "Как дела?===>true" && (!505 && !!0 ===> false) == FALSE || "Hello!"(true)
// console.log((false || "Новая строка" && "" || 2023) && !(0 && 10 && "Еще одна строка"));// (false || true || 2023) && !(false) === true && true === true 
// console.log(false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка");// (false || false || 10 && "Еще одна строка") возвращает первое истинное


/**
 * Написать функцию hasProp, которая принимает в себя объект и название ключа. Если ключа с таким названием нет в объекте, функция возвращает false. Если ключ есть, функция возвращает значение этого ключа. 
 */

// function hasProp(obj, keyName){
//     for (var key in obj){
//         if(key === keyName){
//             return obj[key]
//         }
//     }
//     return false;
// }


/**
 * Написать функцию поиска адреса(города) пользователя по его id. У Вас должен быть массив из пользователей (2-3 элемента достаточно) со свойствами id, username, address. Также должна быть отдельная функция (не метод объекта), которая принимает в себя id, находит пользователя по этому id в массиве и возвращает его адрес. Если пользователь с таким айди не найден, функция должна вернуть сообщение “Извините, такого пользователя не существует”.
 */

// const users = [
//     {
//         id: 1,
//         username: `assashin`,
//         address: `44781 Salvador Shoals, Apt. 775, 52986, Hansenland, Oregon, United States`
//     },
//     {
//         id: 2,
//         username: `shakab`,
//         address: `657 Schoen Lodge, Apt. 776, 76533-3700, East Gwen, Florida, United States`
//     },
//     {
//         id: 3,
//         username: `maoSaddao`,
//         address: `6389 Alysha Ports, Suite 045, 10602, Marysemouth, South Carolina, United States`
//     }
// ]

// function returnUserAddress(id) {
//     for (let i = 0; i < users.length; i++){
//         if(users[i].id === id){
//             return users[i].address
//         }
//     }
//     return "Извините, такого пользователя не существует"
// }
// console.log(returnUserAddress(2))

