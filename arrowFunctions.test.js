const { faker } = require("@faker-js/faker");

const { greet, sum, square, squares } = require("./arrowFunctions"); // Replace with the correct file name

function isArrowFunction(fn) {
  return /([a-zA-Z]\w*|\([a-zA-Z]\w*(,\s*[a-zA-Z]\w*)*\)) =>/.test(
    fn.toString()
  );
}

describe("greet", () => {
  it("should return 'Hello <name>' when name is provided", () => {
    const name = faker.person.firstName();
    expect(greet(name)).toBe(`Hello ${name}`);
  });

  it("should be an arrow function", () => {
    expect(isArrowFunction(greet)).toBe(true);
  });
});

describe("sum", () => {
  it("should return the correct sum", () => {
    const numbers = Array(10)
      .fill(0)
      .map(() => [faker.number.int(), faker.number.int()]);

    numbers.forEach(([a, b]) => expect(sum(a, b)).toBe(a + b));
  });

  it("should be an arrow function", () => {
    expect(isArrowFunction(sum)).toBe(true);
  });
});

describe("square", () => {
  it("should return the square of a number", () => {
    const numbers = Array(10)
      .fill(0)
      .map(() => faker.number.int({ max: 100 }));

    numbers.forEach((n) => expect(square(n)).toBe(n * n));
  });

  it("should be an arrow function", () => {
    expect(isArrowFunction(square)).toBe(true);
  });
});

describe("🌶️🌶️ squares", () => {
  it("should return an array of squares", () => {
    const numbers = Array(10)
      .fill(0)
      .map(() => faker.number.int({ max: 100 }));

    const results = squares(numbers);

    results.forEach((n, i) => expect(n).toBe(numbers[i] ** 2));
  });

  it("should be an arrow function", () => {
    expect(isArrowFunction(squares)).toBe(true);
  });
});
