let users = ['Serhat', 'Burak', 'Zuleyha'];

/*
for (let index = 0; index < 10; index++) {
  console.log(index);
}

let index = 0;
for (; index < users.length; index++) {
  console.log(users[index]);
}

*/

//  NOT = continue -> bunu gorunce dongu devam eder fakat altindaki islemlere devam etmez bir sonrakine gecer
// break -> dongu eger bunu gorurse donguden cikar

const userListDOM = document.querySelector('#userList');
let index = 0;
for (; index < users.length; index++) {
  const liDOM = document.createElement('li');
  liDOM.innerHTML = users[index];
  userListDOM.appendChild(liDOM);
}

let userName = '';

while (userName == '') {
  userName = prompt('Kullanici Adinizi Giriniz : ');
  console.log(userName);
}

const PRODUCTS = [
  'Laptop',
  'Phone',
  'Speaker',
  'Desktop PC',
  'Server',
  'Mouse',
  'Keyboard',
];

//PRODUCTS.forEach((product, index, array) => console.log(product, index, array));
//PRODUCTS.forEach((product) => console.log(product));
//PRODUCTS.forEach((product, index, array) => console.log(array[index]));

/*PRODUCTS.forEach((product, index, array) =>
  console.log((array[index] = product + 'TR'))
);
*/

PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
);
console.log(PRODUCTS);
12;
PRODUCTS.forEach((item) => {
  const liDOM = document.createElement('li');
  liDOM.innerHTML = item;
  userListDOM.appendChild(liDOM);
});
