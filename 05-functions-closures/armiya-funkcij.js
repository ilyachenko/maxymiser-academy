/*
 http://learn.javascript.ru/task/armiya-funkcij
 */

function makeArmy() {
    var shooters = [];
    for(var i=0; i<10; i++) {
        var shooter = (function(x) {
            return function() {
                console.log(x);
            };
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
