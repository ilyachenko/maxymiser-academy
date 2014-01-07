/*
 Написать функцию createCachable(func), принимающую аргументом функцию. createCachable(func) возвращает новую функцию,
 которая возвращает результат вызова func и запоминает его, или возвращает уже запомненный результат для текущего
 аргумента. Функция func может иметь только один аргумент. createCachable(func) может создавать какое угодно количество
 кешированных версий функций.
 */

function createCachable(func) {
    'use strict';
    var keeper = createKeeper();
    function createKeeper() {
        var storage = [];
        return {
            put: function(key, value) {
                for (var i=0; i<storage.length; i++){
                    if (storage[i][0] === key){
                        //если есть - сохраним туда значение
                        storage[i][1] = value;
                        return storage[i][1];
                    }
                }
                storage.push([key, value]);
                return null;
            },
            get: function(key) {
                for (var i=0; i<storage.length; i++){
                    if (storage[i][0] === key){
                        return storage[i][1];
                    }
                }
                return null;
            }
        };
    }

    return function(arg) {
        if (keeper.get(arg) !== null){
            return keeper.get(arg);
        }
        else {
            var res = func(arg);
            keeper.put(arg, res);
            return res;
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
console.log(cachableMultiplier(20));
console.log(cachableMultiplier(20));
console.log(cachableMultiplier(20));
console.log(cachableMultiplier(10));