const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');

const div1 = document.querySelector('.div-1');
const div2 = document.querySelector('.div-2');
const div3 = document.querySelector('.div-3');
const div4 = document.querySelector('.div-4');

btn1.addEventListener('click', () => {
    div1.innerText = '대한민국'
})
btn2.addEventListener('click', () => {
    div2.innerText = '서울'
})
btn3.addEventListener('click', () => {
    div3.innerText = '약 5000만명'
})
btn4.addEventListener('click', () => {
    div4.innerText = '+82'
})