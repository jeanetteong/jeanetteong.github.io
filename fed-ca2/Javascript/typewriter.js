/*
            Author: Jeanette Ong
            Date: 7 August 2022

            Filename: typewriter.js
*/
var textArr = 'Thank You!'.split("");
var speed = 100;
var i = 0;
function typeWriter() {
    if (i < textArr.length) {
        document.getElementById('type').innerHTML += textArr[i];
        i++;
        setTimeout(typeWriter, speed);
    }
}
