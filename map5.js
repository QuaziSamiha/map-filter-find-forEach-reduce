const numbers = [2, 5, 7, 6, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

function square(element){
    return element * element;
}

console.log(numbers.map(square)); // passing function 