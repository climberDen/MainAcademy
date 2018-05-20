//Тут пишется рабочий процесс из функций файла scr1
/*
function useLibFn() {
    libFn();
}
*/
//useLibFn();
//просто показывает
/*
function showMinArrayLength(arr) {
    alert(minArrayLength(arr));
}
*/

/*
//Получает число
function getMinArrayLength(arr) {
    return minArrayLength(arr)
}
var array=[
    [1,2,3,4,5,6],
    [1,2,3,4],
    [1,2,3,4,5,6,7]
];
showMinArrayLength(array);
var min=getMinArrayLength(array);
console.log(min);
*/



//-------------Функции-----------------


//-------------Вложенные функции

/*
function sayHiBye(firstName,lastName) {
    alert('Привет, '+getFullName() );
    alert('Пока, '+ getFullName());
    function getFullName() {
        return firstName +' '+ lastName;
    }
}
sayHiBye('Вася','Васин');
*/

/* Каррирование - когда функция возвращает функцию
 и возвращаемая функция сразу же вызывается
 */

/*
function curry(greeting) {
    return function (name) {
        alert(greeting+ ' '+ name);
    }
}
curry('Привет')('Вася');
*/

// Может быть любая вложенность

/*
function curryHard(greeting) {
    return function (name) {
        return function (surname) {
            alert (greeting + ', ' +name +' , '+surname);
        }
    }
}
curryHard('Hi')('Denis')('Sheremet');
*/

//Функциям можно добавлять свойства как любому обьекту

/*
function f() {
    f.test=5;
    alert(f.test);
}
f();
function f2() {
    alert('f2.test: '+ f2.test);
    f2.test++;
}
f2.test=1;
f2();
f2();
*/

// Fuctorial

/*
function fuct(n) {
    if(n!==1){
        console.log(n);
        return n*fuct(n-1);
    }else{
        return n;
    }
}
*/

//Степень

/*
function pow(x,n) {
if(n==0){
    return 1;
}
    if(n!=1){
    return x*pow(x,n-1);
}else{
    return x;
    }
}
*/

//Использование return с множественным индексом

/* var r=0;
 function rtrn() {
     if(r){
         return true;
     }
     return false;
 }
 alert(rtrn());*/

//В функцию можно не передавать параметры или задавать их
//по умолчанию

/*
function sum(a,b,c) {
    a=a||0;
    b=b||0;
    c=c||0;
    return a+b+c;
}
alert(sum(1,2,3));
alert(sum(1,2,));
alert(sum());
*/

// В функцию можно не передавать параметры или выводить ошибку

/*

function sum(a,b,c) {
    if(!a || !b || !c){
        throw new Error('some operator are undefined');
    }
    return a+b+c;
}
console.log(sum());
*/
/*
function sum(a,b,c) {
    if(!a || !b || !c){
        throw new ReferenceError('some operator are undefined');
    }
    return a+b+c;
}
console.log(sum());*/


//Ссылки на обьект и копирование обьекта
/*
var obj={
    k1:'v',
    k2:'e'
};
*/
/*
var obj1=obj;
console.log(obj);
console.log(obj1);

obj1.k1='new';
console.log(obj);
console.log(obj1);*/

//Метод для копирования обьектов
/*
var obj={
    k1:'v',
    k2:'e'
};
var obj2=Object.assign({},obj);
console.log(obj);
console.log(obj2);
obj2.k1='y';
console.log(obj);
console.log(obj2);
*/
/*
var obj={
    k1:'v',
    k2:{
        k3:'e',
        k4:'c'
    }
};
var obj2=Object.assign({},obj);
obj2.k1='changed';
console.log(obj);
console.log(obj2);
*/

//обьединяем плоские обьекты

/*
var ob={a:'a'};
var ob2={b:'b'};
var ob3={c:'c'};
var ob4 =Object.assign({},ob,ob2,ob3);
console.log('ob4',ob4);
*/

//но если одинаковые свойства(ключи)-запишет последнее(ob2.a)

/*
var ob={a:'a'};
var ob2={a:'b'};
var ob3={c:'c'};
var ob4 =Object.assign({},ob,ob2,ob3);
console.log('ob4',ob4);
*/


//arguments

/*
function f(arr,a) {
    var s = [];
    var sum = 0;
    var temp=0;
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        s.push(arguments[i]);
    }
    console.log(s);

    for (var j = 0; j < arr.length; j++) {
        temp+=arr[i];
        console.log(sum);
    }

}
arr=[1,2,3,4];
f(arr,5,6);
*/
/*

function pushToArray(arr,el) {
    console.log('args',arguments);
    /!*преобразуем массив в строку, потому что
    строка это примитивный тип данных
    и он не изменяется по ссылке, как в случае с обьектом
    и преобразовываем ее обратно в массив и записываем в переменную
     *!/
    var res=JSON.parse(JSON.stringify(arr));
    //добавили в массив элементы
    res.push(el);
    //если аргумент не один
    if(arguments.length>2){
        for(var i=2;i<arguments.length;i++){
            res.push(arguments[i]);
        }
    }
    return res;
}
arr=['ac','as'];
console.log(pushToArray(arr,5,6,7));
*/

//concat
/*
var newArray=[].concat(['abc'],['std','dtk']);
console.log(newArray);
*/

//Интервалы и таймеры

/*
function funk() {
    alert('Привет,setTimeout');
}
setTimeout(funk,2000);
//С передачей параметров не сработает в IE9-
function func2(phrase,who) {
    alert(phrase+' '+ who);
}
setTimeout(func2,2000,'Привет','Вася');//ПРивет Вася
//так тоже работает
setTimeout("alert('Привет 1')",3000);
// но лучше писать так
setTimeout(function () {alert('привет 2')},4000);
    //отмена
var timerId=setTimeout(function () {alert('something stop')},5000);
setTimeout(function () {
    clearTimeout(timerId);
},1000);//6000 не остановит
*/

// Рекурсивный setTimeout

/*
var timerId=setTimeout(function tick() {
    alert('Tick');
    timerId=setTimeout(tick,2000);
},2000);
setTimeout(function () {
    clearTimeout(timerId);
    alert('stop');
},10000);
*/

//setInterval
//начать повторы функции с интервалом 0.5 сек

/*
var timerId=setInterval(function () {
    alert('Tick');
},500);
//через 10 сек остановить повторы

setTimeout(function () {
    clearInterval(timerId);
    alert('stop');
},10000);*/



//-----------События----------
//var elem=document.getElementById('elem');
function counter() {
    for(var i=1;i<=10;i++){
        alert(i);
    }
}
/*
elem.onclick=counter;
/!*elem.onclick=function() {
    alert('thanks') ;
};
*!/*/
$('#elem').click(function(){
    counter();
});