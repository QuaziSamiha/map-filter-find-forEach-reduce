const numbers = [1, 4, 5, 7, 8];
console.log(numbers);

numbers.forEach(function (element, index, array) { // anonymous function
    array[index] = element + 10;
});
console.log(numbers);