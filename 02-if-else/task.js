//Задать такие b, для которых логические выражения будут возвращать значение, описанное в комментарии рядом

console.clear();

var b1 = true;
true && b1; // -> true
 
var b2 = false;
!'Hey there' || b2; // -> false
 
var b3 = false; // b3 = 0;
0 || !b3 && true; // -> true
 
var b4 = true; //b4 = 1;
!10 && !(b4 || false); // -> false
 
var b5 = true;
!(null && undefined) && (![] || b5); // -> true
 
var b6 = false;
(!!!!(false) || !b6) && !!({} && []); // -> true
