let laptop1 = {
  brand: 'Apple',
  model: 'MackBook Pro',
  '1model': 'MackBooks',
  'model name': 'bosluklu',
  // model-name: 'tireli',
  // model_name: 'altcizgili',
  modelName: 'CamelCase',
};

console.log(laptop1);
console.log(laptop1.brand);
console.log(laptop1['1model']);
console.log(laptop1['model']);
// deger degistirme
laptop1.brand = 'Mac';
laptop1['brand'] = 'Mac1';
console.log(laptop1);
// yeni deger ekleme
laptop1.version = '10.15.7';
laptop1.numara = 1;
console.log(laptop1);

// anahtar bilgilerine ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));

for (const key in keys) {
  console.log(key);
}

keys.forEach((keyInfo) => {
  console.log(keyInfo);
  console.log(laptop1[keyInfo]);
});

console.log('deneme', Object.values(laptop1));

let values = Object.values(laptop1);

values.forEach((value) => {
  console.log('value: ', value);
});
