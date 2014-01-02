/*
 Написать функцию getUnique(arr), которая принимает аргументом массив или массивоподоный объект, и возвращает массив
 уникальных элементов. Аргумент не должен изменяться. Порядок элементов результирующего массива должен совпадать
 с порядком, в котором они встречаются в оригинальной структуре.

 Специально обрабатывать значение NaN не обязательно.
 var u = getUnique([3,2,2,1,3,4]);
 */

var a = {};
var b = {};

var u = getUnique([a,b,b,a]);
console.log(u[0] === a); // true
console.log(u[1] === b); // true
console.log(u.length === 2); // true
var u = getUnique([3,2,2,1,3,4]);
var u = getUnique({0: "test", 1: "foo", 2: "test", length: 3});

function getUnique(arr) {
    var count = 0;
    var newArr = [];
    for (var i=0; i<arr.length; i++){
        if (newArr.indexOf(arr[i]) === -1){ //проверяем уникальность
            newArr[count] = arr[i];
            count++;
        }
    }
    return newArr;
}