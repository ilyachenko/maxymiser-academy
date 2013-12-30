/*
 Написать функцию isInArray(), которая принимает переменное количество аргументов. Возвращает true, если все аргументы, кроме последнего входят в последний. Последним всегда должен быть массив.
 */

isInArray(1, [1]); // true
isInArray(1, 2, [1]); // false
isInArray(1, 2, [1,2,2,2]); // true

console.log(isInArray(1, 2, [1,2,2,2]));
function isInArray() {
    var find = function (array, value) {
        for(var i=0; i<array.length; i++) {
            if (array[i] == value) {
                return i;
            }
        }
        return -1;
    };
    for(var i=0; i<arguments.length-1; i++) {
        if (find(arguments[arguments.length-1], arguments[i])==-1) return false;
    }
    return true;
}