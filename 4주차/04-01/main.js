// div 객체 만들기
const name_div = document.querySelector('div')
// button 객체 만들기
const name_button = document.querySelector('button')

// button을 클릭하면 div에 이름 출력
name_button.addEventListener('click', () => {
    name_div.innerText = 'Hoya'
})