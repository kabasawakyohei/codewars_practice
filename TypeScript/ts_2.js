"use strict";
exports.__esModule = true;
exports.squareSum = void 0;
function squareSum(numbers) {
    return numbers.map(function (n) { return Math.pow(n, 2); }).reduce(function (n1, n2) { return n1 + n2; }, 0);
}
exports.squareSum = squareSum;
console.log(squareSum([1, 2]));
