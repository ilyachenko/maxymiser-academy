/*
 Дописать функцию contains. Если элементы массива what содержатся в массиве where, функция должна возвращать true иначе false. Пустой массив является подмножеством любого массива.
 */

var where = [0, 1, 2, 3, 4, 5, 6];
var what = [2, 1, 5, 4];
var foo = contains(where, what);
console.log(foo);

var where = ["qwe", "asx", "1rt"];
var what = ["qwe1", "asx", "1rt"];
var foo = contains(where, what);
console.log(foo);

function contains(where, what) {
    for (var i in what) {
        var exist = false;
        for (var j in where) {

            if (what[i] == where[j]){
                exist = true;
                break;
            }
        }
        if (!exist){
            return false;
        }
    }
    return true;
}
