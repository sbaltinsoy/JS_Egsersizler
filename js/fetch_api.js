// fetch('data/settings.json').then((response) => console.log(response));
//JSON dosyadan veri cekmek
fetch('data/settings.json')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

let userListDOM = document.querySelector('#userList');
// API uzerinden veri cekmek
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    //console.log(responseJson);
    //console.log(responseJson[0]);
    // console.log(item);
    responseJson.forEach((item) => {
      let liDOM = document.createElement('li');
      liDOM.innerHTML = item.title;
      userListDOM.appendChild(liDOM);
    });
  });
