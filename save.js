//contructor functions basic file
//blue print function that can be used to objects easier

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function(){
        console.log(`Hello. My name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
    }
}

const yahye = new Person('Yahye', 'Abdi', 26);
console.log(yahye);
yahye.greeting();

const khan = new Person('Khan', 'Jahan', 45);
console.log(khan);
khan.greeting();

const sanogo = new Person('Sanogo', 'Yaya', 28);
console.log(sanogo);
sanogo.greeting();
