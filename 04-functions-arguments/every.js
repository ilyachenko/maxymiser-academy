/*
 Написать функцию every(arr, func), которая принимает аргументами массив и функцию, вызывает для каждого элемента массива функцию с аргументами arr[i], i, arr. Если для каждого i-ого элемента массива func(arr[i], i, arr) вернула true, every должна вернуть true.
 */

every([], function () {return true}); // true
every([NaN, NaN], function (el) {return isNaN(el)}); // true
every([NaN, 0], function (el) {return isNaN(el)}); // false
every([1,2,3], function (el, i) {return el > i}); // true
every([2,3,4], function (el, i) {return el < i}); // false

//console.log(every([1,2,3], function (el, i) {return el > i}));
//console.log(every([], function () {return true}));
console.log(every([{}, {}, {}], function(elem, index) {
    return typeof index === "number" && index >=0 && index <= 3
}));

function every(arr, func) {
    debugger
    if(arr.length>1){
        for (index in arr){
            if (func(arr[index],index*1) == false){
                return false;
            }
            return true;
        }
    }
    else {
        return func();
    }
}