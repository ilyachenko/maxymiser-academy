/*
Написать функцию createObject(keys, values), которая принимает аргументами 2 массива, и возвращает объект, название ключей которого которого - строки из массива keys, а значения - значения из массива values. Если ключей меньше, чем значений, игнорировать не вмещающиеся значения. Если ключей больше, чем значений, установить значения в undefined.
 */
createObject(['name', 'age'], ['Vasiliy', 45]); // {name: 'Vasiliy', age: '45'}
createObject(['name', 'age'], ['Vasiliy']); // {name: 'Vasiliy', age: undefined}
createObject(['name'], ['Vasiliy', 45]); // {name: 'Vasiliy'}
createObject([], []); // {}

var keys = ["nullKey", "one", "two", "three", "for"];
var values = [0, 1, 2, 3, 4, 5];
console.log(createObject(keys, values));
function createObject(keys, values) {
    var result = new Object();
    for (var i in keys){
        if (keys[i]){
            result[keys[i]] = values[i];
        }
    }
    return result;
}
