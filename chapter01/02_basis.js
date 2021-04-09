"use strict";
exports.__esModule = true;
// 声明一个变量a, 同时指定它的类型为 number
var a;
// a 的类型设置为number，在以后的使用过程中a的类型只能是数字
a = 10;
a = 33;
// a = "hello"; // 此行代码会报错，因为变量a的类型是Number，不能赋值字符串
var b;
b = "hello";
// 声明完变量直接进行赋值
// let c: boolean = false;
// 如果变量的声明和赋值是同时进行的，TS 可以自动对变量进行类型检测
var c = false;
c = true;
// c = 123; // 报错  不能将类型“number”分配给类型“boolean”。
// JS中的函数不考虑参数的类型和个数的
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(123, 456)); //579
// console.log(sum(123, "456")); //"123456"
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456)); //579
