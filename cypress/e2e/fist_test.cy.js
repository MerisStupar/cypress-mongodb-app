let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

describe("Unit testing of our app", () => {
  context("Math POSITIVE number", () => {
    it("Should add a positive nubmer", () => {
      expect(add(2, 2)).to.eq(4);
    });

    it("Should substract a positive nubmer", () => {
      expect(subtract(3, 3)).to.eq(0);
    });

    it("Should divide a positive nubmer", () => {
      expect(divide(2, 2)).to.eq(1);
    });

    it("Should multiply a positive nubmer", () => {
      expect(multiply(2, 2)).to.eq(4);
    });
  });
});

describe("Unit test for DECIMAL numbers", () => {
  context("Math DECIMAL number", () => {
    it("Should add a positive nubmer", () => {
      expect(add(2.2, 2.2)).to.eq(4.4);
    });

    it("Should substract a positive nubmer", () => {
      expect(subtract(3.3, 3.3)).to.eq(0);
    });
  });
});
