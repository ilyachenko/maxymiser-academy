/*
 Написать функцию createCachable(func), принимающую аргументом функцию. createCachable(func) возвращает новую функцию,
 которая возвращает результат вызова func и запоминает его, или возвращает уже запомненный результат для текущего
 аргумента. Функция func может иметь только один аргумент. createCachable(func) может создавать какое угодно количество
 кешированных версий функций.
 */

function createCachable(func) {
    var cache = null;
    return function(){
        if (cache){
            return cache;
        }
        else {
            cache = func(arguments[0]);
            return cache;
        }
    };
}

// функция возвращает квадрат аргумента,
// но выполняется секунду
function longTimeMultiplier(num) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + 1000);
    return num * num;
}

var cachableMultiplier = createCachable(longTimeMultiplier);

// Первый вызов выполняется так же долго, как и оригинальная функция
console.log(cachableMultiplier(10));

// Последующие вызовы с тем-же аргументом моментальны
console.log(cachableMultiplier(10));
console.log(cachableMultiplier(10));
console.log(cachableMultiplier(10));