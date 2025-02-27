import { faker } from "@faker-js/faker";

import { greet, square, sum } from "../arrowFunctions";

function isArrowFunction(fn: Function) {
  return /([a-zA-Z]\w*|\([a-zA-Z]\w*(,\s*[a-zA-Z]\w*)*\)) =>/.test(
    fn.toString()
  );
}

describe("Arrow Functions", () => {
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
});
