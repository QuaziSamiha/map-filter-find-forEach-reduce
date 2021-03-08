const student = [
    { id: 155, name: 'samiha' },
    { id: 144, name: 'piya' },
    { id: 121, name: 'tasnuva' },
    { id: 131, name: 'hablu' }
];

// const names = [];
// for(let i = 0; i < student.length; i++){
//     const attributeName = student[i].name;
//     names.push(attributeName);
// }
// console.log(names);

const names = student.map(s => s.name); // apply map on array
console.log(names);

// const ids = student.map(i => i.id);
// console.log(ids);