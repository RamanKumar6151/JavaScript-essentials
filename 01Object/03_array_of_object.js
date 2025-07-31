// creating array of object
const students=[
    {name: "alice", age: 25},
    {name: "bob", age: 22},
    {name: "Charlie", age: 28}
];
// accesing the elements of object array
console.log(students[0].name);
console.log(students[2].age);
// using for loop
for(let i=0; i<students.length; i++){
    console.log(students[i].name);
}

// array methods will work with these object array
// using foreach loop
students.forEach(function(student){
    console.log(student.name);
});
// pushing a new value
students.push({name:"David", age:20});
console.log(students);
// pop
students.pop();
console.log(students);
// filter
const adults=students.filter(student=>student.age>23) // filtering the students who areolder then 23 years
console.log(adults);
// map
const studentNames=students.map(student=>student.name);
console.log(studentNames);
// searching for object
// find
const student=students.find(student=>student.name==="Charlie");
console.log(student.age);

// nested object array
const nestedObjArr={
    name:"John",
    age: 25,
    hobbies:["reading", "travelling"],
    address: {
        street: "123 Main st",
        city: "new york",
        zip: "10001"
    }
}
console.log(nestedObjArr.hobbies[0]);

const arrayOfObjects={
    name: "Alice",
    age: 30,
    skills: ["JS", "React", "Node.js"],
    projects: [
        {
            title: 'Project A',
            completed: true
        },
        {
            title: 'Project B',
            completed: false
        }
    ]
}
console.log(arrayOfObjects.projects[0].title);