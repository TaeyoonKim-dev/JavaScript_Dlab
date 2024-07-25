document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.querySelector('.input-1');
    const input2 = document.querySelector('.input-2');
    const button = document.querySelector('.btn-1');
    const resultDiv = document.querySelector('.result');

    button.addEventListener('click', function() {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 + num2;
            const difference = num1 - num2;
            const product = num1 * num2;
            const quotient = num1 / num2;

            resultDiv.innerHTML = `
                덧셈: ${sum}<br>
                뺄셈: ${difference}<br>
                곱셈: ${product}<br>
                나눗셈: ${quotient}
            `;
        } else {
            resultDiv.innerHTML = '두 숫자를 모두 입력하세요.';
        }
    });
});
