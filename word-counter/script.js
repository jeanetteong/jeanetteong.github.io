const input = document.getElementById('word-input');
const words_number = document.getElementById('words');
const characters_number = document.getElementById('characters');
let words = 0;
let characters = 0;
words_number.innerHTML = words + ' words';
characters_number.innerHTML = characters + ' characters';

input.addEventListener('input', () => {     //everytime input updates
    let text = input.value;
    let text_array = text.split(" ");   //separates input by space
    if (text_array[text_array.length - 1] == '') {   //if theres only a space after the last word
        words = text_array.length - 1;
    } else {
        words = text_array.length;
    }
    characters = text.length;

    if (words == 1) {       //if theres only one word
        words_number.innerHTML = words + ' word';
    } else {
        words_number.innerHTML = words + ' words';
    }

    if (characters == 1) {      //if theres only 1 character
        characters_number.innerHTML = characters + ' character';
    } else {
        characters_number.innerHTML = characters + ' characters';
    }
});