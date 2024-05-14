let i = 1; j = 1 ; k = '';

while(i <= 100){
    
    k = i + j;
	i = j;
	j = k;
    
    
    document.querySelector('.ans').innerHTML += `${i} <br>`;
}

document.querySelector('.pr-5').innerHTML += 'Fibonacci ';
