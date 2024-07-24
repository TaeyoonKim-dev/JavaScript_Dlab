let ans = ''

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        ans += '*'
    }
    console.log(ans);
    console.log('\n')
    ans = ''
}