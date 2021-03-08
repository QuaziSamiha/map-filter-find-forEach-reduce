const numbers = [2, 5, 7, 6, 8];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     console.log(element, i);
// }

numbers.map(function(element, index){
    console.log(element, index);
});