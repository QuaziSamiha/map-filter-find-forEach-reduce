const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (previousValue, currentValue) {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
})

console.log("sum: " + sum);