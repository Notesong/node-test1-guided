// to run: npm jest
// npm run test:watch

const calculator = require("./calculator");

test("runs our first test", () => {
  expect(1 + 1).toBe(2);
});

describe("caculator unit tests", () => {
  it("add()", () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(3, 2)).toBe(5);
    expect(calculator.add(1, 0)).toBe(1);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(1)).toBe(1);
    expect(calculator.add()).toBe(0);
    expect(calculator.add(2, 3, 9)).toBe(14);
  });

  it("subtracts", () => {
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.subtract(3, 2)).toBe(1);
    expect(calculator.subtract(1, 0)).toBe(1);
    expect(calculator.subtract(-1, 1)).toBe(-2);
    expect(calculator.subtract(-1, -2)).toBe(1);
    expect(calculator.subtract(1)).toBe(1);
    expect(calculator.subtract()).toBe(0);
  });

  it("divide", () => {
    expect(calculator.divide(2, 2)).toBe(1);
    expect(calculator.divide(3, 2)).toBe(1.5);
    expect(() => calculator.divide(1, 0)).toThrow();
    expect(calculator.divide(-1, 1)).toBe(-1);
    expect(calculator.divide(-1, -2)).toBe(0.5);
    expect(calculator.divide(1)).toBe(1);
    expect(calculator.divide()).toBe(1);
    expect(() => calculator.divide("hi", "you")).toThrow();
  });

  it("multiply", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(3, 2)).toBe(6);
    expect(calculator.multiply(1, 0)).toBe(0);
    expect(calculator.multiply(-1, 1)).toBe(-1);
    expect(calculator.multiply(-1, -2)).toBe(2);
    expect(calculator.multiply(1)).toBe(0);
    expect(calculator.multiply()).toBe(0);
    expect(calculator.multiply("5", "5")).toBe(25);
  });
});
