const greeting = "Hello, ";
const target = "World";
console.log(greeting + target);

// number
const numberType1: number = 1;
const numberType2: number = 1.4;
const binary: number = 0b1010;
const octal: number = 0o744;
const hexadecimal: number = 0xf00d;
const big = 1e8;
const small = 4e-5;
const million = 1_000_000;

// bigint
const bignum: bigint = 100n;
const bignum1: bigint = (123n + 456n) * 2n;
console.log(bignum, bignum1);

const bignum2: bigint = 5n / 2n;
console.log(bignum2);

// string
const str1: string = "Hello";
const str2: string = "World";
console.log(str1 + ", " + str2);

console.log(`${str1}, ${str2}`);

const no: boolean = false;
const yes: boolean = true;
console.log(no, yes);

const val1 = null;
const val2 = undefined;
console.log(val1, val2);

// 型変換
const num1 = Number(true);
console.log(num1);

const num2 = Number(false);
console.log(num2);

const num3 = Number(null);
console.log(num3);

const num4 = Number(undefined);
console.log(num4);

const bigint1 = BigInt("1234");
console.log(bigint1);

const bigint2 = BigInt(500);
console.log(bigint2);

const bigint3 = BigInt(true);
console.log(bigint3);

// const bigint = BigInt("fooooooooo");
// console.log("bigint is", bigint);

const string1 = String(1234.5);
console.log(string1);

const string2 = String(true);
console.log(string2);

const string3 = String(null);
console.log(string3);

const string4 = String(undefined);
console.log(string4);

console.log(Boolean(123));
console.log(Boolean(0));
console.log(Boolean(1n));
console.log(Boolean(0n));
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));