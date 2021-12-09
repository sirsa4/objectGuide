//contructor functions
//blue print function that can be used to objects easier

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

//custom method, function can be created for object that can be called as needed.
    this.greeting = function(){
        console.log(`Hello. My name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
    }
}

//object 1 created the Person contruct. New keyword is important to have.
const yahye = new Person('Yahye', 'Abdi', 26);
console.log(yahye);

//custom method being called like like normal function.
yahye.greeting();

//object 2 created using same Person construct
const khan = new Person('Khan', 'Jahan', 45);
console.log(khan);
khan.greeting();

//object 3 created
const sanogo = new Person('Sanogo', 'Yaya', 28);
console.log(sanogo);
sanogo.greeting();
