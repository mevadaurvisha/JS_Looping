let num = 202;
let sum = 0;
let tem;
let real;

tem = num;

while(num != 0){
    real = num % 10 ;
    sum =(sum * 10) + real;
    num = parseInt(num / 10);
}

if(tem == sum){
    // document.write(tem + " is palindrome");
    document.querySelector('.ans').innerHTML = ` ${tem} is palindrom number`;
}
else{
    document.querySelector('.ans').innerHTML = ` ${tem} is not palindrom number`;
}

document.querySelector('.pr-4').innerHTML = 'Palindrom number';