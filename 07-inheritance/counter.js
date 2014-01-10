/*
    Реализовать counter на прототипах. Значение счетчика не нужно инкапсулировать. Методы вынести в прототип.
*/

'use strict';

function Counter(initialValue){
    this.count = initialValue || 0;
}

Counter.prototype.inc = function(num){
    this.count += (num === undefined) ? 1 :  num;
};

Counter.prototype.dec = function(num){
    this.count -= (num === undefined) ? 1 : num;
};

Counter.prototype.get = function(){
    return this.count;
};

var c1 = new Counter();
c1.inc(1);
c1.inc(1);
c1.inc(1);
console.log(c1.get());

var c2 = new Counter(10);
c2.inc(2);
c2.inc(3);
c2.inc(4);
console.log(c2.get());

var c3 = new Counter(5);
c3.inc(5);
c3.dec(10);
console.log(c3.get());