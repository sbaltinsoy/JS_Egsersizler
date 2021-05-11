let items = [1, 2, 3, 4, 5];

// array icinde array
let femaleUsers = ['Ayse', 'Hulya', 'Merve'];
let maleUsers = ['Ahmet', 'Hasan', 'Mehmet'];

items.unshift(femaleUsers);

items.push(maleUsers);

console.log(items);

console.log(items.length);

console.log(items[0]); // array icerisindeki array;
console.log(items[0].length); // uzunlugu
console.log(items[0][0]); // ilk elemeani

// array icerisindeki oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5);
console.log('newItems : ', newItems);
console.log('items : ', items);

// array icerisindeki ogenin indexini bulmak
items.unshift('burak');
items.push('serhat');
console.log(items[items.indexOf('burak')]);
console.log(items.indexOf('serhat'));

// array kopyalama -> slice
let coppyItems = items;
console.log(items);
console.log(coppyItems);

coppyItems.pop();
console.log(items);
console.log(coppyItems);

console.log('asil kopyalama burada yapildi');
coppyItems = items.slice();
console.log(items);
console.log(coppyItems);

coppyItems.pop();
console.log(items);
console.log(coppyItems);

// es6 array kopyalama
let es6Items = [...items];
console.log(es6Items);

//es6 array yapisi birlestirme
let allUsers = [...femaleUsers, ...maleUsers];
console.log(allUsers);

// array tum bilgiler stringe cevir
console.log(allUsers.toString());
console.log(allUsers.join(' --- '));

// index bilgisine gore oge ekleme -> splice(index, 0, value)
allUsers.splice(allUsers.length - 1, 0, 'Burak');
console.log(allUsers);
allUsers.splice(Math.floor(allUsers.length / 2), 0, 'Huriye');
console.log(allUsers);
