let num = 371;
let sum = 0;
let tem;
let n;


tem = num;
while(tem > 0){

    n = tem % 10;
    sum += n * n * n;
   
    tem = parseInt(tem / 10);
}

if (sum == num) {
    document.querySelector('.ans').innerHTML = ` ${num} is armstrong number`;
}
else {
    document.querySelector('.ans').innerHTML = ` ${num} is not armstrong number`;
}

document.querySelector('.pr-3').innerHTML = 'Armstrong number';