/*
 Создай функцию с именем summ, которая возвращает сумму всех передаваемых ей аргументов. Функция должна отрабатывать с любыми входящими данными. Функция должна всегда возвращать число.
 */

console.log(summ(1, 9, "ascd", 1.2, "sdcsd123"));

function summ() {
    var sum = 0;
    for (ind in arguments){
        var foo = arguments[ind] * 1.0;
        if (!isNaN(foo)){
            sum += foo;
        }
    }
    return sum;
}