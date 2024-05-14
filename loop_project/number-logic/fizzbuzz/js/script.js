let n = 1;

do {
    if (n % 3 === 0 && n % 5 === 0) {

        document.querySelector('.ans').innerHTML += `FizzBuzz <br>`;

    } else if (n % 3 === 0) {

        document.querySelector('.ans').innerHTML += `Fizz <br>`;

    } else if (n % 5 === 0) {

        document.querySelector('.ans').innerHTML += `Buzz <br>`;

    } else {

        document.querySelector('.ans').innerHTML += `${n} <br>`;
        
    }

    n++;
} while (n <= 100);

document.querySelector('.pr-10').innerHTML = 'FIZZBUZZ';
