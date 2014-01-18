Maxymiser - курсы по JavaScript/HTML/CSS
----------------------------------------

02. Ветвление, преобразование типов
-----------------------------------

#### 02-if-else/guess.js
Пользователь вводит целое число от 1 до 10, пытаясь угадать загаданное число. Программа выдает сообщения в следующих случаях:
- когда пользователь отказался от ввода (esc, отмена)
- когда пользователь ввел некорректное значение (то есть не число, число не указанное в диапазоне)
- когда пользователь не угадал загаданное число
- когда пользователь угалал загаданное число
Загаданное число не обязательно должно меняться при новом запуске программы.
Запрос данных у пользователя - prompt(str), где str - текст сообщения всплывшего окна
Преобразование строки в число - parseInt(str, 10)  

####02-if-else/task.js
Задать такие b, для которых логические выражения будут возвращать значение, описанное в комментарии рядом

**Почитать:**

Типы данных
http://learn.javascript.ru/types-intro

Имена переменных
http://learn.javascript.ru/variable-names

Операторы
Пропустить побитовые
http://learn.javascript.ru/operators

Выражения и операторы
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

Порядок операторов (иметь в виду, что такое бывает)
https://developer.mozilla.org/ru/docs/JavaScript/Reference/Operators/Operator_Precedence

03. Массивы, объекты, циклы
---------------------------

#### 03-objects-arrays-loops/contains.js
Дописать функцию contains. Если элементы массива what содержатся в массиве where, функция должна возвращать true иначе
false. Пустой массив является подмножеством любого массива.

#### 03-objects-arrays-loops/extracting-odd-elements-from-array.js
Создай функцию extractOddItems(arr), которая принимает аргументом массив или массивоподобный объект, и возвращает новый
массив, в котором находятся только элементы с нечетным индексом.

#### 03-objects-arrays-loops/object-from-arrays.js
Написать функцию createObject(keys, values), которая принимает аргументами 2 массива, и возвращает объект, название
ключей которого которого - строки из массива keys, а значения - значения из массива values. Если ключей меньше,
чем значений, игнорировать не вмещающиеся значения. Если ключей больше, чем значений, установить значения в undefined.

#### 03-objects-arrays-loops/to-matrix.js
Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число, возвращает новый массив.
Число показывает количество элементов в подмассивах, элементы подмассивов беруться из массива data.
Оригинальный массив не должен быть изменен.

#### 03-objects-arrays-loops/to-query-string-from-object.js
Написать функцию toQueryString(obj), которая принимает аргументом объект и возвращает строку.

**Почитать:**

Объекты
http://learn.javascript.ru/object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects (дальше Using a constructor function не надо читать)

Массивы
http://learn.javascript.ru/array

Циклы
http://learn.javascript.ru/while-for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#Loop_Statements (label не обязательно понимать, используется не так часто)

Флэнаган - строгий режим
https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-5/miscellaneous-statements

04. Функции, аргументы
----------------------
#### 04-functions-arguments/every.js
Написать функцию every(arr, func), которая принимает аргументами массив и функцию, вызывает для каждого элемента массива
функцию с аргументами arr[i], i, arr. Если для каждого i-ого элемента массива func(arr[i], i, arr) вернула true, every
должна вернуть true.

#### 04-functions-arguments/extend-object.js
Написать функцию extend(), которая принимает аргументом любое количество объектов и возвращает новый объект, в котором
собраны все свойства из переданных объектов.

#### 04-functions-arguments/is-in-array.js
Написать функцию isInArray(), которая принимает переменное количество аргументов. Возвращает true, если все аргументы,
кроме последнего входят в последний. Последним всегда должен быть массив.

#### 04-functions-arguments/query-string-to-object.js
Напиши функцию parse(string), которая принимает аргументом query string, и возвращает объект. Типы данных, которые
должны распознаваться: строки, числа (только целые), булевы.

#### 04-functions-arguments/summator.js
Создай функцию с именем summ, которая возвращает сумму всех передаваемых ей аргументов. Функция должна отрабатывать с
любыми входящими данными. Функция должна всегда возвращать число.

**Почитать:**

About functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Predefined_functions

Про функции
http://learn.javascript.ru/function-is-value
http://learn.javascript.ru/function-declaration-expression
http://learn.javascript.ru/arguments-pseudoarray
http://learn.javascript.ru/arguments-named

Про методы массива
http://learn.javascript.ru/array-methods

Список методов массивов и строк нужно смотреть на MDN. Учить не надо, просто понять что можно делать с типами данных, и время от времени возвращаться к этому reference-у.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#Methods

Сошников
http://dmitrysoshnikov.com/ecmascript/ru-chapter-5-functions/

05. Области видимости и замыкания
---------------------------------

#### 05-functions-closures/create-caching-function.js
Написать функцию createCachable(func), принимающую аргументом функцию. createCachable(func) возвращает новую функцию,
которая возвращает результат вызова func и запоминает его, или возвращает уже запомненный результат для текущего
аргумента. Функция func может иметь только один аргумент. createCachable(func) может создавать какое угодно количество
кешированных версий функций.

#### 05-functions-closures/incapsulated-counter.js
Написать функцию createSummator(initialValue), с опциональным первым параметром, который является точкой отчета счетчика. Если аргумент initialValue не передан, то отчет начинается с 0. При каждом вызове функция возвращает объект с методами inc(num), dec(num), get(). Объектов, которые возвращает функция createSummator(initialValue), может быть любое количество.

Реализация должна позволять манипуляции со значением счетчика только с использованием этих методов.

Вызов метода inc(num) увеличивает значение счетчика на значение аргумента num. Если метод вызван без аргумента, то значение счетчика увеличивается на 1
Вызов метода dec(num) уменьшает значение счетчика на значение num, если метод вызван с аргументом. Если метод вызван без аргумента, то значение счетчика уменьшается на 1
Вызов метода get() возвращает текущее значение счетчика.

#### 05-functions-closures/keeper.js
Написать функцию createKeeper(), которая возвращает объект с 2 методами put(key, value) и get(key). Метод get(key)
должен возвращать данные, которые были сохранены с помощью метода put, если вызывается с тем-же значением key, что и put.

Ключами могут быть как объекты, так и примитивы, про NaN не задумываться.

Если put был вызван с таким ключом, с которым уже был вызван ранее, старое значение перезатирается новым.

Доступ к ключам и значениями должен быть возможен только через методы put и get.

#### 05-functions-closures/unique.js
Написать функцию getUnique(arr), которая принимает аргументом массив или массивоподоный объект, и возвращает массив
уникальных элементов. Аргумент не должен изменяться. Порядок элементов результирующего массива должен совпадать
с порядком, в котором они встречаются в оригинальной структуре.

Специально обрабатывать значение NaN не обязательно.
var u = getUnique([3,2,2,1,3,4]);

**Почитать:**

http://learn.javascript.ru/global-object
http://learn.javascript.ru/closures
http://learn.javascript.ru/closures-usage

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Function_scope
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Closures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures

Очень подробно и детально. Не рекомендуется новичкам
http://dmitrysoshnikov.com/ecmascript/ru-chapter-4-scope-chain/
http://dmitrysoshnikov.com/ecmascript/ru-chapter-6-closures/

07. Наследование
----------------

#### 07-inheritance/counter.js
Реализовать counter на прототипах. Значение счетчика не нужно инкапсулировать. Методы вынести в прототип.

#### 07-inheritance/mediator.js
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

#### 07-inheritance/iterable.js
Написать функцию makeIterable, которая принимает аргументом функцию, которая умеет обрабатывать данные некоторым
образом, и возвращает функцию, которая умеет обрабатывать массивы данных. Если оригинальная функция что-то возвращала,
то новая функция должна возвращать массив результатов.

**Почиать:**

http://learn.javascript.ru/prototype
http://learn.javascript.ru/classes
http://learn.javascript.ru/why-prototypes-better

http://dmitrysoshnikov.com/ecmascript/ru-chapter-7-1-oop-general-theory/
http://dmitrysoshnikov.com/ecmascript/ru-chapter-7-2-oop-ecmascript-implementation/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain

08. DOM
-------

#### 08-dom-intro/next.js

Реализовать функцию next(node), которая вернет следующий узел, не учитывая текстовые узлы и узлы комментариев.

#### 08-dom-intro/add-class.js

Реализовать функцию addClass(node, classToAdd). Класс не должен добавляться, если такой уже есть у элемента.

```javascript
<div class="main-column"></div>
addClass(document.querySelector('.main-column'), 'main');
<div class="main-column main"></div>
```javascript

#### 08-dom-intro/remove-class.js

Реализовать функцию removeClass(node, classToRemove). Удаление несуществующего класса не должно приводить к ошибке. Если классов несколько, должны быть удалены все.

```javascript
<div class="main main main-column"></div>
removeClass(document.querySelector('.main-column'), 'main');
<div class="main-column"></div>
removeClass(document.querySelector('.main-column'), 'main-column');
<div></div>
```

#### 08-dom-intro/has-class.js

Реализовать функцию hasClass(node, classToCheck), которая вернет true, если у node есть класс classToCheck

#### 08-dom-intro/closest.js

Реализовать функцию closest(node, testFunc), которая вернет первого родителя, для которого testFunc вернет true. В testFunc получает аргументом DOM узел. Сам DOM узел node тоже проверять. Если ни один из родителей не подошел, функция возвращает null

```javascript
<div class="main">
  <div class="wrapper outer">
      <div class="wrapper inner">
        <div id="test"></div>
      </div>
  </div>
</div>
var testDiv = document.getElementById('test')

closest(testDiv, function (node) {
  return node.className.indexOf('wrapper') !== -1
}); // div.wrapper.inner
closest(testDiv, function () {
  return true
}); // div#test
closest(testDiv, function (node) {
  return node.id === 'form'
}); // null
```

#### 08-dom-intro/createList.js

Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. Использовать innerHTML нельзя. Второй и третий аргументы не обязательные. Значения по умолчанию для них - ul и li. listData - массив. Может содержать как элементы (текст), так и массивы элементов. Вложенность - любая.
Примеры возвращаемых узлов:

```javascript
createList(['мясо', 'рыба']) /* ->
<ul>
	<li>мясо</li>
	<li>рыба</li>
</ul>
*/

createList(['мясо', ['яблоки', 'бананы']], 'ol') /*->
<ol>
	<li>мясо</li>
	<li>
		<ol>
			<li>яблоки</li>
			<li>бананы</li>
		</ol>
	</li>
</ol>
*/
```

**Почитать:**

http://learn.javascript.ru/introduction-browser-events
http://learn.javascript.ru/obtaining-event-object
http://learn.javascript.ru/default-browser-action

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Getting_Started#Example:_Catching_a_mouse_click
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Getting_Started#Example:_Catching_a_keyboard_event

09. DOM события
---------------

#### 09-zoomer

Реализовать функцию makeZoomable. Она принимает аргументом узел с изображениями. При клике на изображение на весь экран показыается увеличенная версия изображения. Вся страница, кроме увеличенного изображения затемняется. Страницу можно скроллировать. Вместе с изображением в вернем правом углу есть кнопка "Х", при клике на которую увеличенная версия изображения перестает показываться. Так же скрыть увеличенное изображение можно нажав на "ESC".

Дополнительное задание (выполнять только в случае, когда закончена основная часть):
Выравнивать изображение всегда по центру (вертикально и горизонтально) экрана, вне зависимости от пропорций изображения. При ресайзе окна браузера изображение должно оставаться по центру.

Ограничения:
- должно работать в ие8
- никаких js библиотек (исключение - отдельно взятые готовые функции)
- никаких готовых плагинов

**Почитать:**

http://learn.javascript.ru/introduction-browser-events#кроссбраузерный-способ-назначения-обработчиков
http://learn.javascript.ru/fixevent
http://learn.javascript.ru/event-delegation

#### 10-validation

Релизовать валидацию формы. Принять решение о том, в какой момент проводить валидацию (по мере набора, при выходе из поля ввода, при отправке формы), и объяснить выбор в комментарии к скрипту. Форму нельзя мочь отправить, если есть ошибки. Если показаны ошибки, кнопка отправки формы должна быть неактивной (код неактивной кнопки закомментирован). Поля, обязательные к заполнению помечены звездочками.

Поля с ошибкой должны подсвечиваться должным образом (который можно увидеть, раскомментировав код на бутстрап странице).

Все регулярки должны быть написаны самостоятельно.

Возможные ошибочные ситуации. Для каждой придумать и выводить поясняющее сообщение. Из сообщения должно быть ясно в чем проблема. Варианты ("что-то не так") не использовать.
1. Поле, обязательное к заполнению не заполнено
2. Ошибка в email-е
3. email уже занят (сверяться со статическим списком email-ов, который хоранится на глобальном уровне)
['author@mail.com', 'foo@mail.com', 'tester@mail.com']
4. Пароль слишком короток (до 5 символов)
5. Простой пароль (только числа, только буквы)
6. Пароль содержит запрещенные символы (разрешенные - латинские буквы, цифры, подчеркивание, минус)
7. Галочка "Согласен со всем" не поставлена

ie8 можно не поддерживать

**Почитать:**

https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions (гайд)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp (дока, внизу есть ссылки на методы строк, для работы с регулярками).

Про регулярки на русском:
http://javascript.ru/RegExp

Формы и события:
http://learn.javascript.ru/events-change
http://learn.javascript.ru/forms-methods