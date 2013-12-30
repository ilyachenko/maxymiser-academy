/*
 Написать функцию toQueryString(obj), которая принимает аргументом объект и возвращает строку.
 */

toQueryString({}); // -> ''
toQueryString({test: true}); // -> 'test=true'
toQueryString({test: true, foo: 'bar'}); // -> 'test=true&foo=bar'

var str = toQueryString({});
console.log(str);

function toQueryString(obj) {
    var str = "";
    var first = true;
    for (var i in obj){
        if (!first) str += "&";
        str += i + "=" + obj[i];
        first = false;
    }
    return str;
}