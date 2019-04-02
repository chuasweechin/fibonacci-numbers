function getSum(total, num) {
  return total + num;
}

var generateFibonacciSequence = function (n) {
    let cycle = 0;
    let fibonacciSequence = [];

    while (cycle < n) {
        let lastTwoElementInArray = [];

        if (fibonacciSequence.length === 0 || fibonacciSequence.length === 1) {
            fibonacciSequence.push(1);
        } else {
            lastTwoElementInArray = fibonacciSequence.slice(Math.max(fibonacciSequence.length - 2))
            fibonacciSequence.push(lastTwoElementInArray.reduce(getSum));
        }

        cycle++;
    }

    return fibonacciSequence;
}

var fibonacci = function (n, returnList) {
    let result;
    let fibonacciSequence = generateFibonacciSequence(n);

    if (returnList === true) {
        result = fibonacciSequence.slice(0, n);
        return result;
    } else {
        result = fibonacciSequence.slice(n - 1, n);
        return result[0];
    }
}

var draw = function (list) {
    for (let a = 0; a < list.length; a++) {
        let drawing = "";

        for (let b = 0; b < list[a]; b++) {
            drawing = " " + drawing;
        }

        drawing = drawing + list[a];
        console.log(drawing);
    }
}

function fibonacciV2(n) {
    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 2) + fibonacci(n - 1);
}

draw(fibonacci(10,true));