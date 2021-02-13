/**********************************
 * #1: Logically speaking
 *
 * Using the four given variables below, define four new variables and assign their values as follows:
 *
 * AND (&&)
 * a) Define andTrue. Use two of the givens and the && operator so that the evaluated value is true.
 * b) Define andFalse. Use two of the givens and the && operator so that the evaluated value is false.
 *
 * OR (||)
 * c) Define orTrue. Use two of the givens and the || operator so that the evaluated value is true.
 * d) Define orFalse. Use two of the givens and the || operator so that the evaluated value is true.
 *
 * See:
 * AND: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
 * OR: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
 */

const givenOne = 64 < 2; // false
const givenTwo = "cheese" === "cheese"; // true
const givenThree = 15 / 3 === 5; // true
const givenFour = 12 > 13; // false

const andTrue = givenTwo && givenThree; // true && true
const andFalse = givenOne && givenFour; // false && false

const orTrue = givenTwo || givenThree;
const orFalse = givenOne || givenFour;

/**********************************
 * #2: 5 characters
 *
 * Define the variable notFiveChars.
 * Assign it a string that's not 5 characters long.
 *
 * Define the variable isItFiveChars.
 * Assign it a ternary that checks to see if notFiveChars has length 5.
 * - True output: "it's 5 characters"
 * - False output: "not 5 characters"
 *
 * See:
 * String length: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 * Ternary: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
let notFiveChars = "a1b2b3";
let isItFiveChars =
  notFiveChars.length === 5 ? "it's 5 characters" : "not 5 characters";

/**********************************
 * #3: truthyFalsy
 *
 * truthyFalsy is a function that accepts a value of any type.
 * Complete the function truthyFalsy given below by writing conditional statements that do the following.
 *
 * - return false:
 *    value is any of the following: 0, "", null, undefined, false
 * - return true:
 *    value is anything else
 *
 * You do not need to call the function with these values; the function will be automatically tested with them.
 *
 * Challenge:
 * There's a way to write this function using just one short if-statement expression.
 * Can you use the logical NOT (!) operator to make this function work?
 * See the link below for more on the logical NOT (!).
 *
 * See:
 * Logical NOT (!): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
 * Falsy: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * Truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

function truthyFalsy(value) {
  if (
    value === 0 ||
    value === "" ||
    value === null ||
    value === undefined ||
    value === false
  ) {
    return false;
  } else {
    return true;
  }
}

/**
 * CHALLENGE ANSWER:
 * Using ! to negate the incoming value forces the value into a Boolean and negates it.
 * This is one to force a value to work in a Boolean context.
 * Comment out the function above and uncomment the one below to try it out
 */

// function truthyFalsy(value) {
//   console.log("value before forcing into Boolean with !:", value);
//   if (!value) {
//     console.log("same value after:", !value);
//     return false;
//   }
//   console.log("same value after:", !value);
//   return true;
// }

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Hit the Run button in REPL or enter `npm test` in your terminal
 */
import { expect } from "chai";

describe("02 - Conditionals", () => {
  describe("#1: Logically speaking", () => {
    describe("Using the && (AND) operator", () => {
      it("andTrue -> evaluates two givens with && to TRUE", () => {
        expect(andTrue).to.be.true;
      });
      it("andFalse -> evaluates two givens with && to FALSE", () => {
        expect(andFalse).to.be.false;
      });
    });

    describe("Using the || (OR) operator", () => {
      it("orTrue -> evaluates two givens with || to TRUE", () => {
        expect(orTrue).to.be.true;
      });
      it("orFalse -> evaluates two givens with || to FALSE", () => {
        expect(orFalse).to.be.false;
      });
    });
  });

  describe("#2: 5 characters", () => {
    describe("notFiveChars", () => {
      it("is a string that isn't 5 characters long", () => {
        expect(notFiveChars).to.be.a("string").to.not.have.lengthOf(5);
      });
    });

    describe("isItFiveChars", () => {
      it("resolves to the String `it's 5 characters`", () => {
        expect(isItFiveChars).to.equal("not 5 characters");
      });
    });
  });

  describe("#3: truthyFalsy", () => {
    describe("returns false", () => {
      it("value -> 0", () => {
        expect(truthyFalsy(0)).to.be.false;
      });
      it('value -> ""', () => {
        expect(truthyFalsy("")).to.be.false;
      });
      it("value -> null", () => {
        expect(truthyFalsy(null)).to.be.false;
      });
      it("value -> undefined", () => {
        expect(truthyFalsy(undefined)).to.be.false;
      });
    });

    describe("returns true", () => {
      it("value -> false", () => {
        expect(truthyFalsy(false)).to.be.false;
      });
      it("value -> any other number", () => {
        expect(truthyFalsy(1)).to.be.true;
        expect(truthyFalsy(Math.PI)).to.be.true;
        expect(truthyFalsy(Infinity)).to.be.true;
      });
      it("value -> any other string", () => {
        expect(truthyFalsy("a")).to.be.true;
        expect(truthyFalsy("hello 'world'")).to.be.true;
        expect(truthyFalsy(`template expression 1 + 2 = ${1 + 2}`)).to.be.true;
      });
      it("value -> an array", () => {
        expect(truthyFalsy([])).to.be.true;
        expect(truthyFalsy([1])).to.be.true;
        expect(truthyFalsy([1, 2, 3, 4, 5])).to.be.true;
      });
      it("value -> an object", () => {
        expect(truthyFalsy({})).to.be.true;
        expect(truthyFalsy({ a: 1 })).to.be.true;
      });
    });
  });
});
