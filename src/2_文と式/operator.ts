// 演算子
const addResult = 1234 + 2344;
console.log(addResult);

const discounted = addResult * 0.7;
console.log(discounted);

const sqrt2 = 2 ** 0.5;
console.log(sqrt2);
console.log(sqrt2 - 1);

console.log(18 / 12);
console.log(18n / 12n);
console.log(18 % 12);
console.log(18n % 12n);

let foo = 10;
console.log(foo);
console.log(++foo);
console.log(foo--);

++foo;
console.log(foo);
foo--
console.log(foo);

const t = true;
const f = false;
console.log(t && t);
console.log(t && f);
console.log(f && f);

console.log(t || t);
console.log(t || f);
console.log(f || f);

const input1 = "123";
const input2 = "";
const input1IsNotEmpty = !!input1;
console.log(input1IsNotEmpty);
const input2IsNotEmpty = !!input2;
console.log(input2IsNotEmpty);