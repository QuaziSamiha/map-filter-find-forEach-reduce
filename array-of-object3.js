const student = [
    { id: 155, name: 'samiha' },
    { id: 144, name: 'piya' },
    { id: 121, name: 'tasnuva' },
    { id: 131, name: 'hablu' }
];

const ids = student.find(i => i.id > 140);
console.log(ids);