//prototype is used to create custom properties and method for constructor function. Here we have Person constructor.

function Person(firstName, lastName, saldo){
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = saldo;
    this.greeting = function(){
        console.log(`Hello. My name is ${this.firstName} ${this.lastName}`);
    }
}
//prototypes are used to create property and method() for contructur object. This is to avoid repeating values in contructor parameter. So methods and properties written prototype will built the constructor instead and no need to repeat values in parameter.

//here bank property in create for Person constructor. All objects created from this Person constructor will have this property built inside it. 
Person.prototype.bank = 'DNB';

//method, function inside Person object here also works similar to the bank property. This method can be called as normal function using the created object name. This method has parameter. So it is called like this: yahye.deposit(300)
Person.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`${this.firstName}'s deposit is ${this.balance} kr`);
}

//method without parameter created for Person constructor. it is called in similar way, but without values in parameter. example: yahye.goodbye()
Person.prototype.goodbye = function (){
    console.log(`${this.firstName} says good bye`);
}

const yahye = new Person('Yahye', 'Abdi', 0);
yahye.goodbye();
console.log(yahye);
document.querySelector('#first').innerHTML = yahye.lastName;


const khan = new Person('Khan', 'Jahan', 50);
khan.deposit(200);
console.log(khan);


const sanogo = new Person('Sanogo', 'Yaya', 28);
sanogo.deposit(300);
console.log(sanogo);

