const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (previousValue, currentValue) {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
}, 100) // giving initial value of the total

console.log("sum: " + sum);