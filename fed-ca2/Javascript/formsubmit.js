/*
			Author: Jeanette Ong
			Date: 7 August 2022

			Filename: formsubmit.js
*/
window.onload = function() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
       return false;
    };
 };