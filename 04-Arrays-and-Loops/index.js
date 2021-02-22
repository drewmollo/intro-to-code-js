/**********************************
 * #1: measurer
 *
 * Define the function measurer.
 * measurer accepts an array of at least size 1, containing entries of any type.
 * measurer returns the length of the array.
 *
 * EXAMPLES:
 * measurer([1]) => 1
 * measurer([1,3,5,7,9]) => 5
 * measurer(["abc", true, { "a": 1, "b": 2 } ]) => 3
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

function measurer(arr) {
  return arr.length;
}

// One-line function
// const measurer = (arr) => arr.length;

/**********************************
 * #2: indexer
 *
 * Define the function indexer.
 * indexer accepts an array of any length, containing entries of any type, and a number, index.
 * When index is defined, indexer returns the value stored.
 * Otherwise, indexer returns the first value in the array.
 *
 * EXAMPLES:
 * indexer([1], 0) => 1
 * indexer([1, 3, "value", 7, 9 ], 2) => "value"
 * indexer([false, 2, "string"]) => false
 *
 * CHALLENGE:
 * Can you write this function as a one-liner? Remember to comment out the original function before testing your one-line version to avoid duplicate declaration errors!
 */

function indexer(arr, index) {
  if (index !== undefined) {
    return arr[index];
  }
  return arr[0];
}

// One-line function
// const indexer = (arr, index) => (index !== undefined ? arr[index] : arr[0]);

/**********************************
 * #: frontOrBack
 */

function frontOrBack(array, place, action, value) {
  if (place === "front") {
    if (action === "add") {
      array.unshift(value);
      return array;
    } else {
      array.shift();
      return array;
    }
  } else {
    if (action === "add") {
      array.push(value);
      return array;
    } else {
      array.pop();
      return array;
    }
  }
}

/**********************************
 * #: repeater
 */

function repeater(string, times) {
  let repeatedStr = "";

  for (let i = 1; i <= times; i++) {
    repeatedStr += string;
  }

  return repeatedStr;
}

/**********************************
 * #: disemvoweler
 */
const vowels = ["a", "e", "i", "o", "u"];

function disemvoweler(string) {
  let noVowelStr = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      const currChar = string[i];
      const currVowel = vowels[j];

      if (currChar === currVowel) {
        break;
      } else if (currChar !== currVowel && j === vowels.length - 1) {
        noVowelStr += currChar;
      }
    }
  }
  return noVowelStr;
}

/**********************************
 * #: valueLocator
 */

function valueLocator(searchValue, arr) {
  const idx = arr.indexOf(searchValue);
  if (idx !== -1) {
    return `${searchValue} is at index ${idx} of the array ${arr}.`;
  }
  return `${searchValue} cannot be found in the array ${arr}.`;
}

// One-liner
// const valueLocator = (searchValue, arr) =>
//   arr.indexOf(searchValue) !== -1
//     ? `${searchValue} is at index ${idx} of the array ${arr}.`
//     : `${searchValue} cannot be found in the array ${arr}.`;

/**********************************
 * #: uniquesOnly
 *
 */

function uniqueCharsOnly(string) {
  let uniques = [];

  for (let i = 0; i < string.length; i++) {
    const currChar = string[i];

    if (uniques.indexOf(currChar) === -1) {
      uniques.push(currChar);
    }
  }
  return uniques;
}

/**********************************
 * #: switchomatic
 *
 * Define the function switchomatic.
 * switchomatic accepts an array of at least size 1, made of entries of any type.
 * switchomatic adds the array's elements to the end of a new array, one at a time.
 * When switchomatic encounters the string "reverse", switchomatic switches so that from the next element in the array, it no longer adds them to the end, but rather the front.
 *
 * NOTES:
 * Not every input array may contain a "reverse" string.
 * Input arrays will contain at most ONE (1) "reverse" string, if present.
 *
 * EXAMPLES:
 * reversomatic([1, 2, 3, 4, 5]) => [1, 2, 3, 4, 5]
 * reversomatic([1, 2, "reverse", 3, 4, 5]) => [5, 4, 3, 1, 2]
 * reversomatic([true, false, 1, 2]) => [true, false, 1, 2]
 */

function switchomatic(array) {
  let output = [];
  let reverse = false;

  for (let i = 0; i < array.length; i++) {
    const currValue = array[i];

    if (reverse) {
      output.unshift(currValue);
    } else if (currValue === "reverse") {
      reverse = true;
    } else {
      output.push(currValue);
    }
  }
  return output;
}

/**********************************
 * #: pairMultiplier
 * NOTE:
 * The nums and ops arrays will always be the same size, .length > 1
 */

function pairMultiplier(arr1, arr2) {
  let productsArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const numOne = arr1[i];
      const numTwo = arr2[j];
      productsArr.push(numOne * numTwo);
    }
  }
  return productsArr;
}

/**********************************
 * #: wordCalculator
 * NOTE:
 * The nums and ops arrays will always be the same size, .length > 1
 */

// One-loop version
function wordCalculator(nums, operations) {
  let result = 0;

  // Both input arrays are the same size
  // Use the i pointer from the loop to grab current entry per iteration
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const currOp = operations[i];

    switch (currOp) {
      case "add":
        result += currNum;
        break;
      case "sub":
        result -= currNum;
        break;
      case "mult":
        result *= currNum;
        break;
      case "div":
        result /= currNum;
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * The code below is what tests your answers.
 *
 * To test your answers to one of the problems above:
 * 1. Find the number of the problem you're working on
 * 2. Remove the `x` in `xdescribe` so that it reads `describe`
 * 3. Type `npm run test-04` in the Shell and hit Enter.
 */
import { expect } from "chai";

describe("04 - Arrays and Loops", () => {
  describe("#1: measurer", () => {
    it("returns the length of an array", () => {
      expect(measurer([1])).to.equal(1);
      expect(measurer([1, 3, 5, 7, 9])).to.equal(5);
      expect(measurer(["abc", true, { a: 1, b: 2 }])).to.equal(3);
    });
  });

  describe("#2: indexer", () => {
    it("returns the value at the given index", () => {
      expect(indexer([1], 0)).to.equal(1);
      expect(indexer([1, 3, "value", 7, 9], 2)).to.equal("value");
      expect(indexer(["abc", true, { a: 1, b: 2 }], 1)).to.equal(true);
    });

    it("returns the array's first value when the index isn't defined", () => {
      expect(indexer([1])).to.equal(1);
      expect(indexer([1, 3, "value", 7, 9])).to.equal(1);
      expect(indexer(["abc", true, { a: 1, b: 2 }])).to.equal("abc");
    });
  });

  describe("#: frontOrBack", () => {
    describe("returns an array modified correctly based on place and action", () => {
      it('place = "front"; action = "add"', () => {
        const array = [1, 2, 3, 4];
        expect(frontOrBack(array, "front", "add", 5)).to.eql([5, 1, 2, 3, 4]);
      });

      it('place = "back"; action = "add"', () => {
        const array = [1, 2, 3, 4];
        expect(frontOrBack(array, "back", "add", 5)).to.eql([1, 2, 3, 4, 5]);
      });

      it('place = "front"; action = "remove"', () => {
        const array = [1, 2, 3, 4];
        expect(frontOrBack(array, "front", "remove", 5)).to.eql([2, 3, 4]);
      });

      it('place = "back"; action = "remove"', () => {
        const array = [1, 2, 3, 4];
        expect(frontOrBack(array, "back", "remove", 5)).to.eql([1, 2, 3]);
      });
    });
  });

  describe("#: valueLocator", () => {
    describe("when searchValue is found in the array", () => {
      describe("returns the correct phrase", () => {
        const arr = ["zyz", "xyx", "abc", "bd"];
        const term = "xyx";

        it("containing the search term", () => {
          expect(valueLocator(arr, term).includes(term));
        });

        it("containing the index of the search term in the array", () => {
          expect(valueLocator(arr, term).includes("at index 1"));
        });

        it("containing the original array", () => {
          expect(valueLocator(arr, term).includes(`${arr}`));
        });
      });

      describe("if the searchValue is found in the array", () => {
        const arr = ["zyz", "xyx", "abc", "bd"];
        const term = "not";

        it("containing the search term", () => {
          expect(valueLocator(arr, term).includes(term));
        });

        it("containing the original array", () => {
          expect(valueLocator(arr, term).includes(`${arr}`));
        });

        it("detailing that the term is not in the array", () => {
          expect(
            valueLocator(arr, term).includes("cannot be found in the array")
          );
        });
      });
    });
  });

  describe("#: repeater", () => {
    describe("returns a string", () => {
      it("repeated 0 times; an empty string", () => {
        expect(repeater("empty output string")).to.equal("");
      });

      it("repeated 1 time; the input string", () => {
        expect(repeater("one time only", 1)).to.equal("one time only");
      });

      describe("repeated multiple times", () => {
        const strings = [
          { str: "hello", times: 2, result: "hellohello" },
          { str: "abc123", times: 3, result: "abc123abc123abc123" },
          { str: "catDog", times: 4, result: "catDogcatDogcatDogcatDog" },
          { str: "Five", times: 5, result: "FiveFiveFiveFiveFive" },
        ];
        strings.forEach(({ str, times, result }) => {
          it(`'${str}', ${times} -> '${result}'`, () => {
            expect(repeater(str, times)).to.equal(result);
          });
        });
      });
    });
  });

  describe("#: disemvoweler", () => {
    describe("returns a string", () => {
      describe("no vowels -> same as the input string", () => {
        const noVowels = [
          { str: "b" },
          { str: "sss" },
          { str: "xyz" },
          { str: "qwrtyp" },
        ];

        noVowels.forEach(({ str }) => {
          it(`'${str}' -> '${str}'`, () => {
            expect(disemvoweler(str)).to.equal(str);
          });
        });
      });

      describe("has vowels", () => {
        describe("removes instances of one vowel", () => {
          const oneVowel = [
            {
              str: "a",
              result: "",
            },
            {
              str: "car",
              result: "cr",
            },
            {
              str: "aeiou",
              result: "",
            },
            { str: "education", result: "dctn" },
          ];

          oneVowel.forEach(({ str, result }) => {
            it(`'${str}' -> '${result}'`, () => {
              expect(disemvoweler(str)).to.equal(result);
            });
          });
        });

        describe("removes multiple instances of multiple vowels", () => {
          const multiVowels = [
            { str: "beer", result: "br" },
            { str: "aaabcdeee", result: "bcd" },
            { str: "dictionary", result: "dctnry" },
            { str: "aaeeiioouu", result: "" },
          ];
          multiVowels.forEach(({ str, result }) => {
            it(`'${str}' -> '${result}'`, () => {
              expect(disemvoweler(str)).to.equal(result);
            });
          });
        });
      });
    });
  });

  describe("#: uniqueCharsOnly", () => {
    describe("returns an array of the unique characters in the string", () => {
      it("if the string is one repeating character", () => {
        expect(uniqueCharsOnly("aaaa")).to.eql(["a"]);
      });
      it("if the string is made up a few recurring characters", () => {
        expect(uniqueCharsOnly("abcabcabc")).to.eql(["a", "b", "c"]);
        expect(uniqueCharsOnly("abcbabcbabcbabcba")).to.eql(["a", "b", "c"]);
      });
      it("if each character in the string is unique", () => {
        expect(uniqueCharsOnly("abc")).to.eql(["a", "b", "c"]);
        expect(uniqueCharsOnly("a1b2")).to.eql(["a", "1", "b", "2"]);
        expect(uniqueCharsOnly("abc123")).to.eql([
          "a",
          "b",
          "c",
          "1",
          "2",
          "3",
        ]);
      });
    });
  });

  describe("#: switchomatic", () => {
    const revStart = ["reverse", 1, 2, 3, 4, 5];
    const revEnd = [1, 2, 3, 4, 5, "reverse"];
    const hasRev1 = [1, "reverse", 2, 3, 4, 5];
    const hasRev2 = [1, 2, "reverse", 3, 4, 5];
    const hasRev3 = [1, 2, 3, "reverse", 4, 5];
    const hasRev4 = [1, 2, 3, 4, "reverse", 5];

    const revArrs = [revStart, revEnd, hasRev1, hasRev2, hasRev3, hasRev4];

    const noRev1 = ["a", 1, "b", 2];
    const noRev2 = [true, false, 1, 2, { a: 1, b: 2 }];

    const noRevArrs = [noRev1, noRev2];

    const allArrays = [...revArrs, ...noRevArrs];

    describe("regardless of the 'reverse' string", () => {
      it("returns an array", () => {
        allArrays.forEach((arr) => {
          expect(switchomatic(arr)).to.be.an("array");
        });
      });

      describe("that doesn't contain the string 'reverse'", () => {
        allArrays.forEach((arr) => {
          expect(switchomatic(arr)).to.not.include("reverse");
        });
      });
    });

    describe("returns the items in the correct order", () => {
      describe("if there's a 'reverse' string in the input array", () => {
        it("at the front of the array", () => {
          expect(switchomatic(revStart)).to.eql([5, 4, 3, 2, 1]);
        });

        it("at the back of the array", () => {
          expect(switchomatic(revEnd)).to.eql([1, 2, 3, 4, 5]);
        });

        it("somewhere in the middle of the array", () => {
          expect(switchomatic(hasRev1)).to.eql([5, 4, 3, 2, 1]);
          expect(switchomatic(hasRev2)).to.eql([5, 4, 3, 1, 2]);
          expect(switchomatic(hasRev3)).to.eql([5, 4, 1, 2, 3]);
          expect(switchomatic(hasRev4)).to.eql([5, 1, 2, 3, 4]);
        });
      });

      it("if there's no 'reverse' string in the array", () => {
        expect(switchomatic(noRev1)).to.eql(noRev1);
        expect(switchomatic(noRev2)).to.eql(noRev2);
      });
    });
  });

  describe("#: pairMultiplier", () => {
    describe("returns an array of multiplied numbers, in the correct order", () => {
      describe("when both arrays are the same size", () => {
        const sameSize = [
          {
            arr1: [6],
            arr2: [4],
            result: [24],
          },
          { arr1: [3, 8], arr2: [5, 2], result: [15, 6, 40, 16] },
          {
            arr1: [2, 7, 9],
            arr2: [5, 4, 6],
            result: [10, 8, 12, 35, 28, 42, 45, 36, 54],
          },
        ];

        sameSize.forEach(({ arr1, arr2, result }) => {
          it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
            expect(pairMultiplier(arr1, arr2)).to.eql(result);
          });
        });
      });

      describe("first array smaller than second", () => {
        const firstSmaller = [
          { arr1: [7], arr2: [2, 3, 4], result: [14, 21, 28] },
          { arr1: [2, 3], arr2: [4, 5, 6], result: [8, 10, 12, 12, 15, 18] },
        ];

        firstSmaller.forEach(({ arr1, arr2, result }) => {
          it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
            expect(pairMultiplier(arr1, arr2)).to.eql(result);
          });
        });
      });

      describe("second array smaller than first", () => {
        const secondSmaller = [
          { arr1: [7, 3], arr2: [9], result: [63, 27] },
          { arr1: [3, 5, 8], arr2: [2, 4], result: [6, 12, 10, 20, 16, 32] },
        ];

        secondSmaller.forEach(({ arr1, arr2, result }) => {
          it(`[${arr1}], [${arr2}] -> [${result}]`, () => {
            expect(pairMultiplier(arr1, arr2)).to.eql(result);
          });
        });
      });
    });
  });

  describe("#: wordCalculator", () => {
    const calc1 = { nums: [1], ops: ["add"], result: 1 };
    const calc2 = { nums: [2], ops: ["sub"], result: -2 };
    const calc3 = { nums: [3], ops: ["mult"], result: 0 };
    const calc4 = { nums: [5, 6], ops: ["add", "mult"], result: 30 };
    const calc5 = { nums: [4, 2], ops: ["add", "div"], result: 2 };
    const calc6 = {
      nums: [7, 11, 12],
      ops: ["sub", "mult", "add"],
      result: -65,
    };
    const calc7 = {
      nums: [6, 10, 3, 8],
      ops: ["add", "mult", "div", "sub"],
      result: 12,
    };

    const calcData = [calc1, calc2, calc3, calc4, calc5, calc6, calc7];

    it("starts at 0", () => {
      expect(wordCalculator([1], ["test"])).to.equal(0);
    });

    it("returns a number", () => {
      calcData.forEach(({ nums, ops }) => {
        expect(wordCalculator(nums, ops)).to.be.a("number");
      });
    });

    describe("returns the correct answer", () => {
      describe("when there's only one operation to do", () => {
        const oneOp = calcData.slice(0, 3);
        oneOp.forEach(({ nums, ops, result }) => {
          it(`[${nums}], [${ops}] -> ${result}`, () => {
            expect(wordCalculator(nums, ops)).to.equal(result);
          });
        });
      });

      describe("when there are two or more operations to do", () => {
        const multiOp = calcData.slice(3);
        multiOp.forEach(({ nums, ops, result }) => {
          it(`[${nums}], [${ops}] -> ${result}`, () => {
            expect(wordCalculator(nums, ops)).to.equal(result);
          });
        });
      });
    });
  });
});
