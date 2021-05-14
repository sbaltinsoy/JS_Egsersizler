// us alma
let result = 5 ** 3;
console.log(result);
/////////////////////////////////
let counter = 1;
let a = counter++;
console.log(a); // 1
console.log(counter); // 2
// ------------------------------
// Icinde deger barindiran ifadeler TRUE barindirmayanlar falsedir
/* asagidaki ifadeler disindakiler true doner bos dizi nesneler dahil
Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false
*/
//console.log(Boolean({})) // true
//console.log(Boolean([])) // true

// Degisken tipi ogrenme
let b = 4;
let c = 'a';
console.log(typeof b);
console.log(typeof c);
Number.isInteger(0.5); //false
Number.isInteger(2); // True
Number.isFinite(0); // True
Number.isFinite('A'); //false
Number.isFinite(0 / 0); //false

// Donusumler
let yaz = '123';
let ax = parseInt(yaz);
console.log(typeof ax);

console.log(12 / '6');

// Değişken Türünü Değiştirmek (Type Coercion)
String(123); // “123” explicit
123 + ''; // “123”    implicit
String(null); // “null”
String(undefined); // “undefined”

String(Symbol('my symbol')); // 'Symbol(my symbol)'
'' + Symbol('my symbol'); // TypeError is thrown
