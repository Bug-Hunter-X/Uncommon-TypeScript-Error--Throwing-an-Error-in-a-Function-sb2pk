function printNumber(num: number): void {
  if (num < 0) {
    throw new Error('Number must be non-negative');
  } else if (num === 0) {
    console.log('Zero');
  } else {
    console.log(num);
  }
}

printNumber(5); // Output: 5
printNumber(0); // Output: Zero
printNumber(-5); // Throws an error