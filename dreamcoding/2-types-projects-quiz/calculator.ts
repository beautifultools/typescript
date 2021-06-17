/**
 * Let's make a calculator 🧮
 */

type operator = "add" | "substract" | "multiply" | "divide" | "remainder";
const calculate = (opr: operator, num1: number, num2: number): number => {
  const isRelatedToDivide = opr === "divide" || opr === "remainder";
  if (isRelatedToDivide && num2 === 0) {
    throw Error("cannot divide by 0");
  }

  switch (opr) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "remainder":
      return num1 - num2 * Math.floor(num1 / num2);
  }
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
