//class version

//helper function is same as in normal contructor function
function getElement(selection){
    const element = document.querySelector(selection);

    if(element){
        return element;
    }
    throw new Error(`The element "${selection}" does not exist`);
}

//class object
class Counter {
    constructor(element, value){
        this.counter = element;
    this.value = value;
    //button element can be selected with element which is the container class with queryselector. normally it is document.querySelector, body.querySelector. Here it is from instance with element since button are inside the div elements.
    this.resetBtn = element.querySelector('.reset');
    this.decreaseBtn = element.querySelector('.decrease');
    this.increaseBtn = element.querySelector('.increase');

    //value works similar too. selected with element parameter.
    this.domValue = element.querySelector('.value');
    this.domValue.textContent = this.value;

    //use variables to attach bind() to prototype function  for each button
    this.inc = this.increase.bind(this);
    this.dec = this.decrease.bind(this);
    this.res = this.reset.bind(this);

    //addeventlistener for each button.
     this.increaseBtn.addEventListener('click', this.inc); 
     this.resetBtn.addEventListener('click', this.res); 
     this.decreaseBtn.addEventListener('click', this.dec);
    }

    //methods written inside class object instead of prototype outside constructor
    increase(){
        this.value++;
        this.domValue.textContent = this.value;
    }
    decrease(){
        this.value--;
        this.domValue.textContent = this.value;
    }
    reset(){
        this.value = 0;
        this.domValue.textContent = this.value;
    }
}

//instances still run outside contructor
const first = new Counter(getElement('.first-counter'), 100);
const second = new Counter(getElement('.second-counter'),200);