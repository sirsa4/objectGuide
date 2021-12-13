
//bind() - like call() - does not run instantly - list of items arguments


//call()

//2 objects
const john = {
    name: 'john',
    age: 30,
    bank: 'DNB',
    bye: function(){
        console.log(this);
        console.log(`This is ${this.name} and I am saying my goodbyes`);
    }
}

const doe = {
    name: 'doe', 
    age: 40
}

//function to apply() in objects as array item

function greet (city, country){
    console.log(this);
    console.log(`My name is ${this.name} and i am ${this.age} years old living in ${city}, ${country}`);
}

//bind()
//create variable for function and bind to object
const doeGreet = greet.bind(doe, 'Budapest', 'Hungary');

//run bind(). run like normal function. Difference between call() and bind() is that bind() is not instant and need to be run after binding.
doeGreet();

//bind() method function from another object to another object. Binding bye method from john to doe.
const doeBye = john.bye.bind(doe);

//run bind. like with function written alone.
doeBye();

//not sure how properties are added from object to another
john.status = 'Alive';
console.log(john);