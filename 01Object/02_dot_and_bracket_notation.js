// creating a class
const person={
    firstName: "raman",
    lastName: "kumar",
    age: 30
};

// dot notation
// access obj properties
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// bracket notation
// used when property have special character or spaces
// also handy when we have to handle dynamic property like wtih variable
const person2 ={
    "first name": "raman" // notice how here its first(SPACE)name instead of firstName like in above object thats why we need to use bracket notation
}
console.log(person2["first name"]);
