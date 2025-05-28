let person = {
    fname: "Saffan",
    age: 20,
    isStudent: true,
    address: null,
    hobbies: ["reading", "gaming", "coding"], 
    details: { 
        height: "5'10",
        weight: "70kg"
    }
}

console.log(person);

//adding a new property to the person object.
person.email="msaffan078@gmail.com";
console.log(person);  //in this section we've added a new prperty 'email' to the person object

//updating the value of an existing property
person.age=21;
console.log(person);  //in this section we've updated the value of the 'age' property in the person object

//deleting a property from the person object
delete person.isStudent;
console.log(person);  //in this section we've deleted the 'isStudent' property from the person object



