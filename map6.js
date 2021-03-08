const numbers = [2, 5, 7, 6, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }


const result = numbers.map(function(element){
    return element * element;
});

console.log(result);