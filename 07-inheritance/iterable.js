/*
 Написать функцию makeIterable, которая принимает аргументом функцию, которая умеет обрабатывать данные некоторым
 образом, и возвращает функцию, которая умеет обрабатывать массивы данных. Если оригинальная функция что-то возвращала,
 то новая функция должна возвращать массив результатов
 */
'use strict';
function makeIterable(func) {
    return function (arr) {
        var res = [];
        for (var i = 0; i < arr.length; i++) res.push(func(arr[i]));
        return res;
    };
}

function trim(str) {
    return str.replace(/\s+/g, '');
}

console.log(trim('     Hello      \r\n') , trim('     Kitty      \r\n'));

var iTrim = makeIterable(trim);
console.log(iTrim(['   Hello', ' how   ', ' are', 'you'])); // -> ['Hello', 'how', 'are', 'you']