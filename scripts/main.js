let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/laoying.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName){
        setUserName();
    }else {
        localStorage.setItem('userName', myName);
        myHeading.textContent = 'Mozilla is cool,'+ myName;
    }
}

setUserName();

myButton.onclick = function () {
    setUserName();
}
