/*
 Написать функцию createSummator(initialValue), с опциональным первым параметром, который является точкой отчета счетчика. Если аргумент initialValue не передан, то отчет начинается с 0. При каждом вызове функция возвращает объект с методами inc(num), dec(num), get(). Объектов, которые возвращает функция createSummator(initialValue), может быть любое количество.

 Реализация должна позволять манипуляции со значением счетчика только с использованием этих методов.

 Вызов метода inc(num) увеличивает значение счетчика на значение аргумента num. Если метод вызван без аргумента, то значение счетчика увеличивается на 1
 Вызов метода dec(num) уменьшает значение счетчика на значение num, если метод вызван с аргументом. Если метод вызван без аргумента, то значение счетчика уменьшается на 1
 Вызов метода get() возвращает текущее значение счетчика.
 */

function createSummator(initialValue) {
    var count = 0;
    if (initialValue){
        count = initialValue;
    }
    var obj = {
        inc: function(num){
            if (num){
                count += num;
            }
            else{
                count++;
            }
        },
        dec: function(num){
          if (num){
              count -= num;
          }
            else {
              count--;
          }
        },
        get: function(){
            return count;
        }
    }
    return obj;
}

var s1 = createSummator();
s1.inc();
s1.inc();
s1.inc();
console.log(s1.get()); // 3

var s2 = createSummator(10);
s2.inc(2);
s2.inc(3);
s2.inc(4);
console.log(s2.get()); // 19

var s3 = createSummator(5);
s3.inc(5);
s3.dec(10);
console.log(s3.get()); // 0