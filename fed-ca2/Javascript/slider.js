/*
			Author: Jeanette Ong
			Date: 7 August 2022

			Filename: slider.js
*/

var slider = document.getElementById("rangeBox");
var output = document.getElementById("output");

output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}