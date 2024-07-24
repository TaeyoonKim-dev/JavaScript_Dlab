// 구구단 출력하는 함수
function gugudan_f(dan) {
    let gugudan_print = '';
    for(let i = 1; i < 10; i++){
        gugudan_print += `${dan} x ${i} = ${dan * i}\n`;
    }
    alert(gugudan_print);
}

// 조건과 함수 실행이 무한 반복 됩니다.
while (true) {
    let dan = parseInt(prompt("출력하고 싶은 구구단 (1단~9단)의 단을 숫자로 입력해 주세요.\n예) 5"));
    if (dan > 9){
        alert("1단~9단이 아닙니다.\n종료합니다.")
        break
    }
    gugudan_f(dan);
}
