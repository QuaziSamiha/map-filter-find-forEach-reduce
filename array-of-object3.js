const student = [
    { id: 155, name: 'samiha' },
    { id: 144, name: 'piya' },
    { id: 121, name: 'tasnuva' },
    { id: 131, name: 'hablu' }
];

const names = student.find(i => i.name === 'tasnuva'); // finding one item from array
console.log(names);