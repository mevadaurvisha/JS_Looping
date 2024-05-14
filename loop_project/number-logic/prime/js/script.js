let p = 13;
let i = 1;
let num = 0;

while(i <= p){

    if(p % i == 0){

        num++;
    }
    i++;

}

if(num == 2){
    document.querySelector('.ans').innerHTML = `${p} is prime number`;
}
else{
    document.querySelector('.ans').innerHTML = `${p} is not prime number`;
}

document.querySelector('.pr-6').innerHTML = 'Prime number';