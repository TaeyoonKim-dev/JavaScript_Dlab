let random_n = Math.floor(Math.random() * 100 + 1);
let num = 0

alert('Up And Down 게임을 시작합니다.\n숫자 범위는 1 ~ 100 사이입니다.');

while (true) {
    let player_n = parseInt(prompt("숫자 입력", 0));
    
    if (player_n > random_n) {
        alert("Down 입니다.");
        num += 1
    } else if (player_n < random_n) {
        alert("Up 입니다.");
        num += 1
    } else if (player_n === random_n) {
        alert(`정답입니다.\n총 ${num}번 시도하셨습니다.`);
        break;
    } else {
        alert("올바른 숫자를 입력해주세요.");
    }
}
