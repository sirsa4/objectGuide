const btn = document.querySelector('.btn');

const counter = {
    count: 0,
    down: 10,
    increase(){
        console.log(this);
        this.count++;
        console.log(this.count);

        //remove event with condition
        if(this.count === 3){
            btn.removeEventListener('click', increase);
        }
    },
    decrease(){
        console.log(this);
        this.down--;
        console.log(this.down);

        //remove event with condiction
        if(this.down === 7){
            btn.removeEventListener('click', decrease);
        }
    }
}

//wont work, fail
//in log we see that console.log(this) inside increase method is pointing to button in html: <button class="btn">.

//The other logs in increase method: console.log(this.count) show NaN in log, not a number, undefined this case. 

btn.addEventListener('click', counter.increase);

//edge cases uses - not for all times
//with bind(), we can change where 'this' keyword is pointing to, by making it point to the counter object. 

//in this way the count and down logs will run since it click event is pointed the counter object

btn.addEventListener('click', counter.increase.bind(counter));

//use referance variabel to have greater controll over event, easier to remove. So event can run and be removed with later with other conditions by using the referance variabel.

//referance variable
const increase = counter.increase.bind(counter);
const decrease = counter.decrease.bind(counter);

//use variabel in event function instead
btn.addEventListener('click', increase);
btn.addEventListener('click', decrease);

//remove events with referance variabel
btn.removeEventListener('click', increase); 
btn.removeEventListener('click', increase); 
