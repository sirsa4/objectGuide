//argumnts for apply() and call() 

//call() - runs instantly - list of items arguments 

//apply() - runs instantly - array of items

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

//function to apply() in objects as array item

function greet (city, country){
    console.log(this);
    console.log(`My name is ${this.name} and i am ${this.age} years old living in ${city}, ${country}`);
}

//apply() for both objects

//john
greet.apply(john, ['Fredrikstad', 'Norway']);

//doe
greet.apply(doe, ['Halden', 'Norway']);

//call() for objects
greet.call(john, 'Moss', 'Norway');
greet.call(doe, 'Hvaler', 'Norway');

