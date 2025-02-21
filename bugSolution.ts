function printNumber(num: number): number | void {
  try {
    if (num < 0) {
      throw new Error('Number must be non-negative');
    } else if (num === 0) {
      console.log('Zero');
    } else {
      console.log(num);
    }
  } catch (error) {
    console.error('Error:', error.message);
    return NaN; // Or handle the error appropriately
  }
}

console.log(printNumber(5)); // Output: 5
console.log(printNumber(0)); // Output: Zero
console.log(printNumber(-5)); // Output: Error: Number must be non-negative; NaN