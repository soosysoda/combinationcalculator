const x = document.querySelector('.n-value');
const y = document.querySelector('.r-value');
const sub = document.getElementById('submitBtn');
const en = document.getElementById('nsup');
const ar = document.getElementById('rsub');
function factorial(no){
    let res = BigInt(1);
    for (let i = 2; i <= no; i++)
        res*= BigInt(i);
    return res;
}
function combination(num, rs){
    let bigN = BigInt(num);
    let bigR = BigInt(rs);
    let result = factorial(bigN)/(factorial(bigN - bigR)*factorial(bigR));
    console.log(result);
    document.getElementById('result').innerHTML = `= ${result}`;
}
sub.addEventListener('click', () => {
    let n = parseInt(x.value);
    let r = parseInt(y.value);
    console.log(n);
    console.log(r);
    en.innerHTML = `${n}`;
    ar.innerHTML = `${r}`;
    combination(n, r);
    
})