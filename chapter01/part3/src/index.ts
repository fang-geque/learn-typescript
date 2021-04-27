import { hi } from "./m1";

function sum(a: number, b: number) {
  return a + b;
}

const obj = { name: "孙悟空", age: 33 };
console.log(obj);

obj.age = 18;
console.log(obj);

console.log(sum(123, 456));
console.log("haha");
console.log(hi);

let fn = (a:number,b:number) => a+b;
fn(1,2)

console.log(Promise);