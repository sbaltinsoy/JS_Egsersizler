// Get Element By ID

// - document.getElementById('#root'); // null
// + document.getElementById('root'); // <div id=​"root">​…​</div>​
/*

// Get Elements By Tag Name
<p>🐱</p>
<p>🐰</p>
<p>🐯</p>
<p>🐧</p>
*/
//const animals = document.getElementsByTagName('p');
// Çıktı:  HTMLCollection(4) [p, p, p, p]

//document.getElementsByTagName('*')
// Çıktı: HTMLCollection(33) [html, head, meta, link#.....

//Get Elements By Name

// <input type="text" name="e-posta">
// const emails = document.getElementsByName('e-posta');
// Çıktı: NodeList [input]

// Get Elements By Class Name

/*
DOM'da istediğimiz class name'i taşıyan tüm elemanları seçmek için getElementsByClassName() metodunu kullanırız.
Bu metot bize bir HTMLCollection döndürür. 
Ve kullanırken class isminin başına nokta "." koymamanız gerekir.
*/

// 2 sinif cagirdi
//document.getElementsByClassName('kartal kusu');
// Çıktı: HTMLCollection [div.kartal.kusu]
//************************************************************************************************************** */

// Query Selector

/*

<form id="signup">
    <input type="text" name="email">
    <input type="tel" name="phone">
    <input type="date" name="date-of-birth">
</form>

*/

// const inputs = document.getElementById('signup').getElementsByTagName('input');
// const inputs = document.querySelector('#signup').querySelectorAll('input');

//KAYNAK
// https://www.patika.dev/egitimler/frontend-web-development-patikasi/javascript/dom-icerisinden-etiket-ve-id-ile-oge-secimi
