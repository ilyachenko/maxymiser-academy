/*
 Создай функцию extractOddItems(arr), которая принимает аргументом массив или массивоподобный объект, и возвращает новый массив, в котором находятся только элементы с нечетным индексом.
 */

var arr = [0, 1, 2, 3, 4, 5, 6];
var arr2 = extractOddItems(arr);
console.log(arr2);
function extractOddItems(arr) {
    var result = [];
    for (var i in arr){
        if (i % 2) {
            result[result.length] = (arr[i]);
        }
    }
    return result;
}
