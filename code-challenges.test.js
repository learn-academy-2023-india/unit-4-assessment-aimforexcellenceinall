// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", () => {
    it("returns a Fibonacci sequence array of a given length", () => {
        const fibonacciLength1 = 6;
        expect(fibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);

        const fibonacciLength2 = 10;
        expect(fibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
  });
    // FAIL  ./code-challenges.test.js
    // fibonacci
    //     ✕ returns a Fibonacci sequence of a given length (1 ms)

    // ● fibonacci › returns a Fibonacci sequence of a given length

    //     ReferenceError: fibonacci is not defined

    //     16 |     it("returns a Fibonacci sequence of a given length", () => {
    //     17 |       const fibonacciLength1 = 6;
    //     > 18 |       expect(fibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    //         |       ^
    //     19 |   
    //     20 |       const fibonacciLength2 = 10;
    //     21 |       expect(fibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);

    //     at Object.expect (code-challenges.test.js:18:7)

    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

function fibonacci(num) {
    if (num <= 0) { 
        return [];
    }   
    if (num === 1) {
        return [1];
    }
    const fibArray = [1, 1];
    for (let i = 2; i < num; i++) {
        fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
    }
    return fibArray;
}
    // PASS  ./code-challenges.test.js
    // fibonacci
    //   ✓ returns a Fibonacci sequence array of a given length (1 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total

// Pseudo code:
// create a function that takes in a number
// create an empty array
// create a for Loop that starts at 2 and goes up to the number element
// push the sum of the previous two numbers into the array
// return the array

// --------------------2) Create a function that takes in an object that contains upvotes and downvotes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("tally", () => {
    it("returns the end tally of upvotes and downvotes", () => {
        const votes1 = { upVotes: 13, downVotes: 2 };
        expect(tally(votes1)).toEqual(11);

        const votes2 = { upVotes: 2, downVotes: 33 };
        expect(tally(votes2)).toEqual(-31);
    });
  });
    // FAIL  ./code-challenges.test.js
    // tally
    //     ✕ returns the end tally of up votes and down votes (1 ms)

    // ● tally › returns the end tally of up votes and down votes

    //     ReferenceError: tally is not defined

    //     24 |     it("returns the end tally of up votes and down votes", () => {
    //     25 |       const votes1 = { upVotes: 13, downVotes: 2 };
    //     > 26 |       expect(tally(votes1)).toEqual(11);
    //         |              ^
    //     27 |   
    //     28 |       const votes2 = { upVotes: 2, downVotes: 33 };
    //     29 |       expect(tally(votes2)).toEqual(-31);

    //     at Object.expect (code-challenges.test.js:26:14)

    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.
function tally(obj) {
    return obj.upVotes - obj.downVotes;
}
    // PASS  ./code-challenges.test.js
    // tally
    //   ✓ returns the end tally of upvotes and downvotes (1 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total

// Pseudo code:
// create a function that takes in an object
// return the difference of the upVotes and downVotes