let setting = {
  userName: 'loremIpsum',
  passaword: 'BadPassaword',
  isActive: false,
  ip: '127.0.0.1',
  serverName: 'kodluyoruz.org',
};

// rename && destructuring
let { userName: isim, passaword: sifre, isActive, ip, serverName } = setting;
console.log(isim, sifre, isActive, ip, serverName);
console.log(setting);
console.log(sifre);

// obje icindeki bazi bilgilerin cikarilmasi
let {
  userName: userName2,
  passaword: passaword2,
  isActive: isActive2,
  ...newSetting
} = setting;
// eger degisken ismi daha once tanimlandiysa
console.log(userName2, passaword2, isActive2, newSetting);

//objenin destructuring ile kopyalanmasi
// Hatali Yontem
/*
let setting2 = setting;
setting2.userName = 'Degisen Bilgi';
console.log('orjinal setting', setting);
console.log('settijng2 : ', setting2);
*/

let setting2 = { ...setting };
setting2.userName = 'Degisen Bilgi';
console.log('orjinal setting', setting);
console.log('settijng2 : ', setting2);

let score = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = score;

console.log(score1, score2, otherScore);

let copyOfScore = [...score];
console.log();
