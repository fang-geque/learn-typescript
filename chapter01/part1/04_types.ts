// object 表示一个js对象
let a: object;
a = {};
a = function () {};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值,属性名：属性值}
// 在属性名后面加上? 表示属性是可选的
let b: { name: string; age?: number };
b = { name: "ws", age: 18 };

// [propName: string]: any 表示任意类型的属性
let c: { name: string; [propName: string]: any };
c = { name: "猪八戒", age: 18, gender: "男" };

/**
 * 设置函数结构的类型声明
 *    语法：(形参：类型，形参：类型...) => 返回值
 */
let d: (a: number, b: number) => number;
d = function (n1, n2): number {
  return n1 + n2;
};

/**
 * 数组的声明方式：
 *    类型[]
 *    Array<类型>
 */
// string[] 表示字符串数组
let e: string[];
e = ["a", "b", "c"];

// number[] 表示数值数组
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/**
 * 元祖：元祖就是固定长度的数组
 * 语法：[类型,类型,类型]
 */
let h: [string, string];
h = ["hello", "abc"];

/**
 *  enum 枚举
 */
enum Gender {
  Male,
  Female = 1,
}
let i: { name: string; gender: Gender };
i = {
  name: "李银河",
  gender: Gender.Male, // 'male'
};

// & 表示同时
let j: { name: string } & { age: number };
j = { name: "ws", age: 18 };

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

export {};
