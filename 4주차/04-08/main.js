const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

const div1 = document.querySelector('.eng-1');
const div2 = document.querySelector('.eng-2');
const div3 = document.querySelector('.eng-3');
const div4 = document.querySelector('.eng-4');

btn1.addEventListener('click', () => {
    div1.innerText = 'Student'
    div2.innerText = 'Rainbow'
    div3.innerText = 'Car'
    div4.innerText = 'Bird'
})

btn2.addEventListener('click', () => {
    div1.innerText = ''
    div2.innerText = ''
    div3.innerText = ''
    div4.innerText = ''
})