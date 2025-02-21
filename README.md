# Uncommon TypeScript Error: Throwing an Error in a Function

This repository demonstrates an uncommon error in TypeScript: throwing an error within a function.  The example shows a function that prints a number to the console but throws an error if a negative number is provided.

## Bug

The `bug.ts` file contains a function `printNumber` that checks if the input number is negative. If it is, an error is thrown. Otherwise, the number is printed to the console.

The issue lies in the error handling, specifically how a developer may not always anticipate a negative input leading to abrupt termination.

## Solution

The `bugSolution.ts` file offers a solution by adding more robust error handling. This could involve using a `try...catch` block to handle the error gracefully or by returning an optional value instead of throwing an error.  This makes the application more resilient to unexpected inputs and more user-friendly.

## How to Run

1. Clone the repository: `git clone <repo_url>`
2. Navigate to the repository: `cd <repo_name>`
3. Compile the TypeScript code (in both files): `tsc bug.ts bugSolution.ts`
4. Run the compiled JavaScript code: `node bug.js` (for the bug) and `node bugSolution.js` (for the solution)
