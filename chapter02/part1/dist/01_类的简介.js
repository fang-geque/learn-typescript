"use strict";
// 使用class关键字来定义一个类
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 对象中主要包含了两个部分：
 *  属性
 *  方法
 */
var Person = /** @class */ (function () {
    function Person() {
        /**
         * 指定定义的属性是示例属性，需要通过对象的实例去访问
         */
        // 定义实例属性
        // readonly name: string = "孙悟空";
        this.name = "孙悟空";
        // 在属性前使用 static关键字可以定义类属性（静态属性）
        // static readonly age : number = 18;
        this.age = 18;
    }
    // 定义方法
    /**
     * 如果方法以 static 开头就是类方法，可以直接通过类去调用
     */
    Person.prototype.sayHello = function () {
        console.log("hello 大家好!");
    };
    return Person;
}());
var per = new Person();
console.log(per.name);
// per.name = "tom"
console.log(per.name);
per.sayHello();
