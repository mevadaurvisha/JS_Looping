var n = 98;
var tem = n;
var reverse = 0;
var sum = 0;


while (tem > 0) {
    sum = sum + tem % 10;
    tem = tem
    tem = (tem / 10) | 0; 
}

tem = sum; 

while (tem > 0) {
    reverse = reverse * 10 + tem % 10;
    tem = tem 
    tem = (tem / 10) | 0; 
}


if (reverse * sum === n) {

    document.querySelector('.ans').innerHTML = `${n} is magic number`;
} else {
    document.querySelector('.ans').innerHTML = `${n} is not magic number`;
}

document.querySelector('.pr-7').innerHTML = 'Magic number';