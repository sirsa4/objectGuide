//setup with constructor function

//helper function
function getElement(selection){
    const element = document.querySelector(selection);

    if(element){
        return element;
    }
    throw new Error(`The element "${selection}" does not exist`);
}

//constructor function
function Counter(element, value){
    console.log(element,value);
    this.element = element;
    this.value = value;
    
}

const first = new Counter(getElement('.first-counter'), 100);
const second = new Counter(getElement('.second-counter',200), 100);

