var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/圖文不符2.jpg') {
      myImage.setAttribute ('src','images/圖文不符.png');
    } else {
      myImage.setAttribute ('src','images/圖文不符2.jpg');
    }
}
/*切換圖片*/

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
/*點選網頁任一處會跳出對話框*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
/*將會取得新按鈕、標題的參考，並把它們存在變數裡*/

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {               //判斷輸入姓名是否null
     setUserName();
  } else {
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Mozilla is cool,' + myName;
  }
}
/*設定客製化的歡迎訊息*/

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
/*初始化程式碼，判斷使用者是否輸入過名稱了*/

myButton.onclick = function() {
  setUserName();
}
/*onclick 事件跟按鈕綁定，每次點選按鈕時就會執行 setUserName()*/