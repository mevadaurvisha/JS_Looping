//pr_1
for(let a=1; a<=10; a++){

    document.querySelector('.pr-1').innerHTML = 'Multiplication Table';
    document.querySelector('.val_1').innerHTML += `10 * ${a} = ${10 * a} <br>`;
}

//pr_2
let n = 5;
let i = 1;
let fact = 1;

while(i <= n)
{
    fact = fact * i; 
    i++;
}

document.querySelector('.pr-2').innerHTML = 'Factorial of numbers';
document.querySelector('.val_2').innerHTML = fact;

// pr_11
let value = ' ';

for(let i=1; i<=10; i++){

    value += `${i}  `;
}

document.querySelector('.pr-11').innerHTML = '1 to 10 Digits';
document.querySelector('.value').innerHTML = value;

// pr_12

let sum = 0;
let ans = '';

for (let i = 1; i <= 10; i++) {

    let square = i * i;
    
    ans += square;
    sum += square;

    if (i < 10) {
        ans += ' + ';
    }
   
}

document.querySelector('.pr-12').innerHTML = 'Sum of square numbers';
document.querySelector('.ans').innerText = `${ans}  =  ${sum}`;


// pattern-1
let str = ' ';

for(let i=5; i>=1; i--){

    for(let j=5; j>=i; j--){
        str += j + ' ';
    }
    str += '<br/>';
}

document.querySelector('.pr-13').innerHTML = 'Pattern-1';
document.querySelector('.pattern').innerHTML = str;



// pattern-2
let val = 1;
let cont = ' ';

for(let i=1; i<=5; i++){

    for(let j=1; j<=i; j++){

        cont += `${val}  `;
        val++;
    }
    cont += '<br/>';
}

document.querySelector('.pr-14').innerHTML = 'Pattern-2';
document.querySelector('.pattern-2').innerHTML = cont;