let domain = 'kodluyoruz';
isActive = false;
let items = [12, 23, 34, isActive, domain];
console.log(items);

let emptyArray = []; // bos list

console.log(items.length);

//document.querySelector('#info').innerHTML = items.length;

// ilk eleman
console.log(items[0]);
// son eleman
console.log(items[items.length - 1]);
// degisken icindeki bilginin array olup olmadigi kontrol edilmesi
console.log(typeof items); // object dedi

console.log(Array.isArray(items));
// array bilgisi oldugunu aldik
console.log(' [] : ', Array.isArray([]));
console.log('1 : ', Array.isArray(1));
console.log('true : ', Array.isArray(true));
// ortadaki elemani bulma
items.length % 2 == 0
  ? console.log('ortasi : ', items[items.length / 2])
  : console.log('ortasi : ', items[Math.floor(items.length / 2)]);

// array sone eleman ekleme -> push
items.push(50);
console.log('50 : ', items);
// array sondan eleman cikarma -> pop
items.pop();
console.log('50 : ', items);
// array basa eleman ekleme -> unshift
items.unshift(5);
console.log('5 : ', items);
// son elemani cikarip bir degiskene atamak
let lastItem = items.pop();
console.log('lastItems :', lastItem);
console.log('items : ', items);
// son elemani cikarmak
let firstItem = items.shift(); // son eleman cikar ve firts item a atanir
console.log('firstItem: ', firstItem, ', Items: ', items);

// array icerisindeki ogenin bilgisini degistirmek
items[0] = 'ilkitem';
console.log(items);
items[items.length - 1] = 'sonitem';
console.log(items);
// araya bos ogeler eklendi
items[10000] = 10000;
console.log(items);
