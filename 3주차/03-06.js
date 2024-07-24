let sign_up_id = ''; // 가입할 ID 변수
let sign_up_pw = ''; // 가입할 PW 변수
let confirm_pw = ''; // 확인 받을 PW 변수

let login_id = ''; // 로그인 ID 변수
let login_pw = ''; // 로그인 PW 변수

alert('회원가입 프로그램입니다.');
sign_up_id = prompt("ID를 입력해주세요.")
sign_up_pw = prompt("PW를 입력해주세요.")
confirm_pw = prompt("다시 한번 PW를 입력해주세요.")


while(true){
    if(sign_up_pw != confirm_pw){
        confirm_pw = prompt("다시 한번 PW를 입력해주세요.")
    } else if(sign_up_pw == confirm_pw){
        alert("PW가 일치합니다.")
        break
    }
}

alert("로그인 프로그램입니다.")
login_id = prompt("가입하신 ID를 입력해 주세요.")
login_pw = prompt("가입하신 PW를 입력해주세요.")

if(login_id != sign_up_id || login_pw != sign_up_pw){
    alert("ID 또는 PW가 틀립니다.")
} else if(login_id == sign_up_id && login_pw == sign_up_pw){
    alert("로그인 되셨습니다. 환영합니다!!")
}