import { faker } from "@faker-js/faker/.";

import { squares } from "../challenge";

function isArrowFunction(fn: Function) {
  return /([a-zA-Z]\w*|\([a-zA-Z]\w*(,\s*[a-zA-Z]\w*)*\)) =>/.test(
    fn.toString()
  );
}

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
