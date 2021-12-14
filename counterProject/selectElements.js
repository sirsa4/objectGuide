//selecting elements. Buttons and values
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
    this.counter = element;
    this.value = value;
    //button element can be selected with element which is the container class with queryselector. normally it is document.querySelector, body.querySelector. Here it is from instance with element since button are inside the div elements.
    this.resetBtn = element.querySelector('.reset');
    this.decreaseBtn = element.querySelector('.decrease');
    this.increaseBtn = element.querySelector('increase');

    //value works similar too. selected with element parameter.
    this.domValue = element.querySelector('.value');
    console.log(this.decrease);
    this.domValue.textContent = this.value;
    
}

const first = new Counter(getElement('.first-counter'), 100);
const second = new Counter(getElement('.second-counter'),200);

