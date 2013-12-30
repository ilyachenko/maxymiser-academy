/*
 Напиши функцию parse(string), которая принимает аргументом query string, и возвращает объект. Типы данных, которые должны распознаваться: строки, числа (только целые), булевы.
 */

parse(''); // -> {}
parse('test=10'); // -> {"test": 10}
parse('test=bar'); // -> {"test": "bar"}
parse('test=10&foo=bar'); // -> {"test": 10, foo: "bar"}

console.log(parse("foo=true&bar=false"));
function parse(queryString) {
if (queryString == ""){
    return {};
}
    queryString = queryString.replace('?', '');
    var queries = queryString.split('&');
    var str = "{";
    var params = {};
    for(var q in queries) {
        var param = queries[q].split('=');
        var key = '"' + param[0] + '"';
        var value;
        if (param[1] == "false" || param[1] == "true"){
            value = param[1];
        }
        else value = '"' + param[1] + '"';

        str +=  key + ":" + value;
        if (!(typeof queries[parseInt(q)+1] === 'undefined')){
            str += ",";
        }
    }
    str += "}";
    return JSON.parse(str);
}