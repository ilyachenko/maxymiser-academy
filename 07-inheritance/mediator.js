/*
 Написать функцию createMediator(), которая возвращает объект с тремя методами.
 subscribe(eventName, handler) подписка на событие. Первый аргумент строка, название события eventName при котором надо
 вызвать функцию handler. Запуск события происходит при вызове метода publish(eventName, data). Метод subscribe можно
 вызывать несколько раз для одного и того же события: все handler-ы запоминаются.
 publish(eventName, data) запуск события с названием eventName. Должны быть вызваны все handler-ы, добавленные с помощью
 метода subscribe. Если для события eventName нет ни одного обработчика, ошибки не должно происходить. Порядок вызова
 обработчиков должен совпадать с порядком их добавления.
 unsubscribe(eventName, handler) отписаться от события. То есть не запускать обработчик handler для события eventName.
 Может принимать только один первый аргумент. В этом случае убираются все обработчики для события eventName.
 Если нет у события eventName нет обработчиков или нет обработчика handler, ошибки не должно происходить.
 */
'use strict';
function createMediator() {
    var events = {};
    return {
        subscribe: function (eventName, handler) {
            if (!events[eventName]){
                events[eventName] = [];
            }
            events[eventName].push(handler);
        },
        publish: function (eventName, data) {
            //debugger
            if (events[eventName]) {
                for (var i=0; i<events[eventName].length; i++){
                    events[eventName][i](data);
                }
            }
        },
        unsubscribe: function (eventName){
            if (events[eventName]) {
                events[eventName] = [];
            }
        }
    }
}

var m = createMediator();
m.publish('customEvent'); // Ничего не происходит
var h2 = function(data) {console.log('handler 2', data)};
m.subscribe('customEvent', function(data) {console.log('handler 1', data)});
m.subscribe('anotherEvent', h2);
m.publish('customEvent'); // в консоли 'handler 1', undefined
console.log('-----------');
m.publish('anotherEvent', {test: true}); // в консоли 'handler 2', {test: true}
console.log('-----------');
m.subscribe('customEvent', function() {console.log('handler 3')});
m.publish('customEvent', {foo: "bar"}); // в консоли 'handler 1' {foo: "bar"}, 'handler 3'
console.log('-----------');
m.unsubscribe('customEvent');
m.publish('customEvent'); // Ничего не происходит