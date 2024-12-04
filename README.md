# TypeScript Bug: Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string. The `greeter` function expects a single string, but the `user` variable is an array.  This leads to a type error.

The solution demonstrates how to correctly handle this situation, either by iterating through the array and calling the function multiple times, or by modifying the function to handle string arrays directly.

## How to reproduce:

1. Clone this repository.
2. Compile the code using `tsc bug.ts`.
3. Run the code using `node bug.js`.