const btn = document.getElementById('btn');
const image = document.getElementById('pic');
const text = document.getElementById('txt');
let value;

let strawhats = ['Luffy', 'Zoro', 'Jinbe' , 'Sanji', 'Robin', 'Usopp', 'Franky' ,'Brook', 'Nami', 'Chopper',];


function gen() {
value = Math.floor(Math.random() * 10+1);

image.innerHTML = `<img src="images/${value}.jpeg" alt="an image of ${strawhats[value - 1]}" />`;

text.innerHTML = ` You got ${strawhats[value - 1]} `;
}
