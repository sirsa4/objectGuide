//add event listeners to buttons

function getElement(selection){
    const element = document.querySelector(selection);

    if(element){
        return element;
    }
    throw new Error(`The element "${selection}" does not exist`);
}

//constructor function
function Counter(element, value){
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

//increase function with prototype to value. for increase button
Counter.prototype.increase = function (){
    console.log(this);
    this.value++;
    this.domValue.textContent = this.value;
};

//decrease function prototype to decrease value. for decrease button.
Counter.prototype.decrease = function (){
    this.value--;
    this.domValue.textContent = this.value;
}

//reset function prototype to reset value to 0. for reset btn.
Counter.prototype.reset = function(){
    this.value = 0;
    this.domValue.textContent = this.value;
}

const first = new Counter(getElement('.first-counter'), 100);
const second = new Counter(getElement('.second-counter'),200);




