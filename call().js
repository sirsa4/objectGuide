//call() - runs instantly - list of items arguments 

//apply()

//bind()


//call()

//2 objects
const john = {
    name: 'john',
    age: 30,
    bye: function(){
        console.log(this);
        console.log(`This is ${this.name} and I am saying my goodbyes`);
    }
}

const doe = {
    name: 'doe', 
    age: 40
}


//fails
/* const hi = john.greet;

hi(); */

//function to call() in objects

function greet (){
    console.log(this);
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
}

//call greet() in doe object
greet.call(doe);

//call greet() in john object
greet.call(john);

//create new object inside call() function
greet.call({name: 'sam', age: 25});

//use method already existing inside another object

john.bye.call(doe);

//works same as when call() is used on with function existing alone.

