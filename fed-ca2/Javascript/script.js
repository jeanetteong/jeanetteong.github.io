/*
			Author: Jeanette Ong
			Date: 7 August 2022

			Filename: script.js
*/
var nav = document.querySelector('.navbar');
var subHeader = document.getElementById("subheader");
var subHeader2 = document.getElementById("subheader2");

window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    nav.classList.add('bg-warning', 'shadow');
  } else {
    nav.classList.remove('bg-warning', 'shadow');
  }
})

window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    subHeader.classList.add('in');
    subHeader.classList.remove('out', 'hide');
  } else {
    subHeader.classList.remove('in');
    subHeader.classList.add('out', 'hide');
  }
})

window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
    subHeader2.classList.add('in');
    subHeader2.classList.remove('out', 'hide')
  } else {
    subHeader2.classList.remove('in');
    subHeader2.classList.add('out', 'hide');
  }
})



