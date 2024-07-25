const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const answer = document.querySelector('.answer');

let food = '';
let season = '';
let color = '';
let animal = '';

btn1.addEventListener('click', () => {
    food = prompt('좋아하는 음식은?');
    updateOutput();
});

btn2.addEventListener('click', () => {
    season = prompt('좋아하는 계절은?');
    updateOutput();
});

btn3.addEventListener('click', () => {
    color = prompt('좋아하는 색깔은?');
    updateOutput();
});

btn4.addEventListener('click', () => {
    animal = prompt('좋아하는 동물은?');
    updateOutput();
});

function updateOutput() {
    answer.innerHTML = (food && season && color && animal) ? `
        좋아하는 음식: ${food}<br>
        좋아하는 계절: ${season}<br>
        좋아하는 색깔: ${color}<br>
        좋아하는 동물: ${animal}` : '';
}