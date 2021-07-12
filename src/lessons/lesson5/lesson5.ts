// import {log} from "util";

console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта


// type someObjType = {
//     name: string;
//     age: number;
//     greeting: () => void
// }
//
// let someObj: someObjType = {
//     name: 'Eugene',
//     age: 32,
//     greeting() {
//         console.log(`My name is ${this.name}. I am ${this.age}`)
//     },
// }
// someObj.greeting()


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект


// let counter = {
//     count: 1,
//     getCurrentCount() {
//         console.log(this.count)
//         return counter
//     },
//     increment() {
//         this.count++
//         return counter
//     },
//     decrement() {
//         this.count--
//         return counter
//     },
//     setCurrentCount(param: number) {
//         this.count = param
//         return counter
//     },
//     restCurrentCount() {
//         this.count = 1
//         return counter
//     },
// }
// counter.getCurrentCount()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.decrement()
// counter.decrement()
// counter.getCurrentCount()
// counter.restCurrentCount()
// counter.getCurrentCount()
// counter.setCurrentCount(10)
// counter.getCurrentCount()
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount()


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// function myFirstConstructorFunc(name: string, age: number) {
//     return {
//         name: name,
//         age: age,
//         greeting: someObj.greeting,
//     }
// }
//
// myFirstConstructorFunc('Alex', 30).greeting()


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One
// @ts-ignore
let One = {name: 'One'};
let Two = {
    name: 'Two',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
// //@ts-ignore
// One.sayHello = Two.sayHello
// @ts-ignore
// One.sayHello()


// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore


type helperObjType = {
    name: any
    age: number
    changeName: (newName:string) => void
    setAge:  (newName:number) => void
    greeting: () => any
}

let helperObj: helperObjType = {
    name: 'helperObj',
    age: 20,
    changeName(newName:string) {
        this.name = newName
    },
    setAge(newAge: number) {
        this.age = newAge
    },
    greeting: Two.sayHello
}
// helperObj.greeting()
// helperObj.changeName('Alex')
// helperObj.greeting()


// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя


// function sumTwoNumbers(a: number, b: number): number {
//     console.log('sumTwoNumbers function')
//     return a + b
// }
// function bindNumber (func: any, num1: number) {
//     console.log('bindNumber function')
//     return function(num2: number) {
//         console.log('inner function')
//         return func(num1 ,num2)
//     }
// }
// console.log(bindNumber(sumTwoNumbers, 20)(5))


// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One


// let One = {name: 'One'};
// let helperObj: any = {
//     name: 'helperObj',
//     age: 20,
//     changeName(newName:number) {
//         this.name = newName
//     },
//     setAge(newAge: any) {
//         this.age = newAge
//     },
//     // greeting: Two.sayHello
// }
// function renamer (obj: any, func: any) {
//     obj.changeName = func.changeName
//     return function(str: any) {
//         obj.changeName(str)
//     }
// }
// console.log(One.name)
// renamer(One, helperObj)('Alex')
// console.log(One.name)

//call

// let One = {name: 'One'};
// let helperObj: any = {
//     name: 'helperObj',
//     age: 20,
//     changeName(newName:number) {
//         this.name = newName
//     },
//     setAge(newAge: any) {
//         this.age = newAge
//     },
//     greeting: Two.sayHello
// }
// function renamer (obj: any, func: any) {
//     return function(str: any) {
//         func.changeName.call(obj, str)
//     }
// }
// console.log(One.name)
// renamer(One, helperObj)('Alex')
// console.log(One.name)


// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// @ts-ignore
// helperObj.setAge.bind(Two, '30')()
//
// // @ts-ignore
// // helperObj.setAge.call(Two, '30')
// // @ts-ignore
// console.log(helperObj.age)
// // @ts-ignore
// console.log(Two.age)
// // @ts-ignore
// console.log(helperObj.age)


// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

//bind
One.hi = helperObj.greeting.bind(One)
// @ts-ignore
One.hi()

//call
// @ts-ignore
One.hi = helperObj.greeting.call(One)



// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};