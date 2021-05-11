let greeting = document.querySelector('#greeting');
greeting.addEventListener('mouseover', domClick);
greeting.addEventListener('click', domClick);

function domClick() {
  console.log('tiklandi');
  this.style.color == 'red'
    ? (this.style.color = 'black')
    : (this.style.color = 'red');
}

let counter = localStorage.getItem('counter')
  ? Number(localStorage.getItem('counter'))
  : 0;
let counterDOM = document.querySelector('#counter');
let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');

counterDOM.innerHTML = counter;

increaseDOM.addEventListener('click', clickEvent);
decreaseDOM.addEventListener('click', clickEvent);

function clickEvent() {
  console.log(this.id);
  this.id == 'increase' ? (counter += 1) : (counter -= 1);
  counterDOM.innerHTML = counter;
  localStorage.setItem('counter', counter);
  counterDOM.innerHTML = counter;
}
