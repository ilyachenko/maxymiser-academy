/*
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число, возвращает новый массив. Число показывает количество элементов в подмассивах, элементы подмассивов беруться из массива data. Оригинальный массив не должен быть изменен.
 */

toMatrix([1,2,3,4,5,6,7,8,9], 3); // [[1,2,3], [4,5,6], [7,8,9]]
toMatrix([1,2,3,4,5,6,7], 3); // [[1,2,3], [4,5,6], [7]]
toMatrix([1,2,3], 5); // [[1,2,3]]
toMatrix([], 3); // []

var data = [1,2,3,4,5,6,7,8];
var rowSize = 3;

var res = toMatrix(data, rowSize);
console.log(res);
function toMatrix(data, rowSize) {
    var result = [];
    var i=0;
    for (i; i<data.length;){
        var arr = [];
        for (var j=0;j<rowSize;j++){
            //debugger
            if (data[i]) arr.push(data[i++]);
        }
        result.push(arr);
    }
    return result;
}