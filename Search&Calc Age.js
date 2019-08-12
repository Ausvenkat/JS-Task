const zenclass = [
    {
        name: 'venkat',
        age: 21,
    },
    {
        name: 'surya',
        age: 21,
    },
    {
        name: 'rahul',
        age: 20,
    },
{
        name: 'joshua',
        age: 20,
    },
{
        name: 'pravin',
        age: 21,
    },
{
        name: 'naveen',
        age: 20,
    },
{
        name: 'sathya',
        age: 25,
    },
{
        name: 'prasanth',
        age: 21,
    },
{
        name: 'maaris',
        age: 21,
    },
    {
        name: 'aaskik',
        age: 24,
    }

];

//search string

let search = (Name) => {
    return zenclass.filter(data => {
        return data.name.toLowerCase().indexOf(Name.toLowerCase())>1;
    });
}
console.log(search('t'));

//claculate age
let Age = zenclass.filter(students => {
    return students.age==21;
});

console.log(Age);
