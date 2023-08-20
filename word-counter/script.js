const input = document.getElementById('word-input');
let words = 0;
let characters = 0;

input.addEventListener('input', () => {     //everytime input updates
    let text = input.value;
    let text_array = text.split(" ");   //separates input by space
    words = text_array.length;
    characters = text.length;
});