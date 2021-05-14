var isim = 'Burak ALTINSOY';
// LENGTH
console.log(isim.length);

// INDEX OF
console.log(isim.indexOf('ak'));

// SEARCH
console.log(isim.search('ur'));

// SLICE
console.log(isim.slice(2, 4));
console.log(isim.slice(2));

// REPLACE
console.log(isim.replace('Burak', 'Serhat'));
console.log(isim);

// LOWER UPPER
console.log(isim.toUpperCase());
console.log(isim.toLowerCase());
console.log(isim);

// CONCAT
let ad = 'Serhat';
let soyad = 'ALTINSOY';
console.log(ad.concat('    ', soyad));

// CHAR AT
console.log(ad.charAt(1));

// CHAR CODE AT
console.log(ad.charCodeAt(1));

// SPLIT -> METNI DIZIYE CEVIR
let deneme = 'metnidizicevir';
let harfler = deneme.split('');
console.log(harfler);

// Yada
let tamIsim = ad.concat(' ' + soyad);
tamIsim = tamIsim.split(' ');
console.log(tamIsim);

// INCLUDES
console.log(isim.includes('a'));

// startsWith
console.log(deneme.startsWith('m'));

// endsWith
console.log(deneme.endsWith('w'));

// ORNEKLER
let url = 'www.kodluyoruz.org';
let language = 'Java';

language = language.replace('Java', 'JavaScript');
console.log(language);

let domain = url.indexOf('.');
console.log(domain);
domain = url.slice(domain + 1);
console.log(domain);
