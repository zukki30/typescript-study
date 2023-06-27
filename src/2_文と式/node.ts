import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello ${name}`);
  rl.close();
});

rl.question("What is your age? ", (age) => {
  console.log(`You are ${age} years old`);
  rl.close();
});