function getSum(total, num) {
  return total + num;
}

var generateFibonacciSequence = function (cycle) {
    let count = 0;
    let fibonacciSequence = [1];

    while (count < cycle) {
        fibonacciSequence.push(fibonacciSequence.reduce(getSum))
        count++;
    }

    return fibonacciSequence;

}

var fibonacci = function (number) {
};

console.log(10);
console.log(generateFibonacciSequence(8));