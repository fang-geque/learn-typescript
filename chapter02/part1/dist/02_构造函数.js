"use strict";
var Dog = /** @class */ (function () {
    // constructor 为构造函数
    // 构造函数会在对象创建时调用
    function Dog(name, age) {
        // console.log('构造函数执行了!!')
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的对象
        // 可以通过this向新建对象添加熟悉
        console.log(this);
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        // alert("汪汪汪")
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    };
    return Dog;
}());
var dog = new Dog("小黑", 18);
var dog2 = new Dog("小白", 8);
console.log(dog);
console.log(dog2);
dog2.bark();
