let formDOM = document.querySelector('#userForm');
formDOM.addEventListener('submit', formSubmit);

function formSubmit() {
  event.preventDefault(); // default islemi engelledik...
  console.log('islem gerceklestirildi');

  let scoreIntputDOM = document.querySelector('#score');
  console.log(scoreIntputDOM.value);
  localStorage.setItem('score', scoreIntputDOM.value);
}
