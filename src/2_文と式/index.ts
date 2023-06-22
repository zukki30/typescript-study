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
console.log(bignum1);

const bignum2: bigint = 5n / 2n;
console.log(bignum2);

// string
const stringType: string = "string";
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