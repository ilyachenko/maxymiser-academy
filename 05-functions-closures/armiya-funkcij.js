/*
 http://learn.javascript.ru/task/armiya-funkcij
 */

function makeArmy() {
    'use strict';
    var shooters = [];
    for(var i=0; i<10; i++) {
        (function(x) {
            shooters.push(function(){
                console.log(x);
            })
        })(i);
    }
    return shooters;
}

var army = makeArmy();
army[0](); 
army[5]();
