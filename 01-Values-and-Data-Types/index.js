/**********************************
 * #1: What's your name?
 *
 * Define the variable myName.
 * Assign it the string of your name.
 */

// Replace this comment with your code.

/**********************************
 * 2. What's your age?
 *
 * Define the variable myAge.
 * Assign it the value of your age.
 */

// Replace this comment with your code.

/**********************************
 * 3. In fact, it's super fun.
 *
 * Define the variable codingIsFun and assign it a boolean value.
 * There's only one right answer here.
 */

// Replace this comment with your code.

/**********************************
 * 4. Quickest math class ever.
 *
 * Define the variable numA. Assign it the value 15.
 * Define the variable numB. Assign it the value 3.
 *
 * Define the variable addedTo. Assign it the expression (don't solve) of numA being added to numB.
 * Define the variable subtractedFrom. Assign it the expression (don't solve) of numB being subtracted from numA.
 * Define the variable multipliedBy. Assign it the expression (don't solve) of numA being multiplied by numB.
 * Define the variable dividedBy. Assign it the expression (don't solve) of numA being divided by numB.
 * Define the variable moduloOf. Assign it the expression (don't solve) of numA being added to numB.
 *
 * Do not reassign or directly use the values of numA and numB in the math variable value defintions.
 * Do not enter the solved math expression's result for any of the math variable values.
 *
 * Pass numA and numB in as variables, not as their values.
 */

// Replace this comment with your code.
let numA = 15;
let numB = 3;

/**********************************
 * 5. Numbers and Words, all together
 *
 * Define the variable myDetails.
 * Write a sentence that uses the values of myName and myAge.
 * Assign that sentence as the value of myDetails
 *
 * SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#expression_interpolation
 */

// Replace this comment with your code.

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the title of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 */
import { expect } from "chai";

describe("01 - Values and Types", () => {
  xdescribe("#1: What's your name?", () => {
    describe("The variable myName", () => {
      it("should be a string", () => {
        expect(myName).to.be.a("string");
      });

      it("should not be an empty string", () => {
        expect(myName).to.not.be.empty;
      });
    });
  });

  xdescribe("#2: What's your age?", () => {
    describe("The variable myAge", () => {
      it("should be a number", () => {
        expect(myAge).to.be.a("number");
      });
    });
  });

  xdescribe("#3: In fact, it's super fun", () => {
    describe("The variable codingIsFun", () => {
      it("should be a boolean value", () => {
        expect(codingIsFun).to.be.a("boolean");
      });

      it("should confirm that it's in fact fun to code ;p", () => {
        expect(codingIsFun).to.equal(true);
      });
    });
  });

  describe("#4: Quickest Math Class Ever", () => {
    describe("Variable declarations and value assignements", () => {
      it("numA -> assigned a number value of 15", () => {
        expect(numA).to.be.a("number");
        expect(numA).to.equal(15);
      });
      it("numB -> assigned a number value of 3", () => {
        expect(numB).to.be.a("number");
        expect(numB).to.equal(3);
      });
    });

    describe("Math operations", () => {
      it("subtractedFrom -> expression equals 12", () => {
        expect(subtractedFrom).to.equal(12);
      });
    });
  });
});
