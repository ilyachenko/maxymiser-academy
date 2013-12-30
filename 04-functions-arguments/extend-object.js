/*
 Написать функцию extend(), которая принимает аргументом любое количество объектов и возвращает новый объект, в котором собраны все свойства из переданных объектов.
 */

extend({foo: true}, {bar: false}); // -> {foo: true, bar: false}
extend({}, {bar: false}); // -> {bar: false}

/*
 Значения имен свойств с одинаковым именем перезатираются в пользу тех, что встретились позже.
 */
extend({foo: true}, {foo: false}); // -> {foo: false}

console.log(extend({foo: true}, {bar: false}, {bars: false}));
function extend() {
    var obj_merge = {};
    for(var i=0; i<arguments.length; i++) {
        if(arguments[i+1] != undefined){
            for (var attrname in arguments[i]) { obj_merge[attrname] = arguments[i][attrname]; }
            for (var attrname in arguments[i+1]) { obj_merge[attrname] = arguments[i+1][attrname]; }
        }
        else {
            for (var attrname in arguments[i]) { obj_merge[attrname] = arguments[i][attrname]; }
        }
    }
    return obj_merge;
}