export function squareSum(numbers: Array<number>): number {
  return numbers.map((n) => n**2).reduce((n1, n2) => n1 + n2, 0);
}

console.log(squareSum([1,2]));
