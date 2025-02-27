/**
 * Rewrite the following `greet` function as an arrow function
 * Before you start, **comment out** the existing `greet` function below
 * The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
function greet(name: string): string {
  return `Hello ${name}`;
}

// example:
greet("Aziz"); // => "Hello Aziz"

/**
 * sum(a, b):
 * - Accepts 2 parameters (a and b)
 * - Accepts "a" parameter of type "number"
 * - Accepts "b" parameter of type "number"
 * - return the sum of "a" and "b"
 * - write it as an arrow function
 * - Before you start, **comment out** the existing `sum` function below
 * - The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
function sum(a: number, b: number): number {
  return Infinity;
}

// example:
sum(5, 7); // => 12

/**
 * square(n):
 * - Accepts "n" parameter of type "number"
 * - returns the square of "n"
 * - write it as an arrow function
 * - Before you start, **comment out** the existing `square` function below
 * - The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
function square(n: number): number {
  return Infinity;
}

// example:
square(4); // => 16
square(10); // => 100

/**
 * 🌶️🌶️
 * squares(numbers):
 * - Accepts "numbers" parameter of type "number[]"
 * - returns an array of numbers were each element of "numbers" argument is squared
 * - write it as an arrow function 
 * - Before you start, **comment out** the existing `square` function below
 * - The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
function squares(numbers: number[]): number[] {
  return [0];
}

// example:
squares([1, 2, 3]); // => [1, 4, 9]

export { greet, sum, square, squares };
