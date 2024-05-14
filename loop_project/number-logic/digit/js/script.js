let n = 0;
let total = 0;

do {
    total += n;

    n++;

} while (n <= 30);

document.querySelector('.ans').innerHTML = total;
document.querySelector('.pr-9').innerHTML = 'Sum of 30 digits';
