// 사칙연산 함수를 만들어 주세요.
function sum_f(_n1, _n2) {
    let sum = _n1 + _n2
    alert(`${_n1} + ${_n2} = ${sum}`)
}
function sub_f(_n1, _n2) {
    alert(`${_n1} - ${_n2} = ${_n1 - _n2}`)
}
function mul_f(_n1, _n2) {
    alert(`${_n1} X ${_n2} = ${_n1 * _n2}`)
}
function div_f(_n1, _n2) {
    alert(`${_n1} / ${_n2} = ${_n1 / _n2}`)
}

// 무한반복 시켜주세요.
while (true) {
    let i = prompt("번호를 입력해 주세요,\n1. 더하기 2. 빼기 3. 곱하기 4. 나누기 5. 종료")
    if(i == 5){
        break
    }
    let num1 = parseInt(prompt("첫 번째 숫자 입력", 0))
    let num2 = parseInt(prompt("두 번째 숫자 입력", 0))
    if(i == 1){
        sum_f(num1, num2)
    }
    if(i == 2){
        sub_f(num1, num2)
    }
    if(i == 3){
        mul_f(num1, num2)
    }
    if(i == 4){
        div_f(num1, num2)
    }
}