//classes in javascript is way of writing contructors in cleaner way
//properties and method can be inside the class scope instead of outside like with contuctor function alone.

class Person {
    constructor(firstName, lastName, age, saldo){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.balance = saldo;
    }

    //properties. properies are attached to instance and not the prototype
    city = 'Fredrikstad';
    state = 'viken';

    //methods() are attached to the prototype
    fullName(){
        this.fullName = `${this.firstName} ${this.lastName}`;
        console.log(this.fullName);
    }
    deposit(amount){
        this.balance += amount;
        console.log(this.balance);
    }
}

//object instances created similar way to constuctor function
const yaya = new Person('Abdi', 'Yaya', 26, 400);
yaya.deposit(400);
yaya.fullName();

const john = new Person('John', 'Doe', 29, 900);
john.deposit(80);
john.fullName();