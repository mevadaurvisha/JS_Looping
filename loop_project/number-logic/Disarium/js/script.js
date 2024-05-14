let givenNumber = 100;

for (let currentNumber = 1; currentNumber <= givenNumber; currentNumber++) {
    let numDigits = 0;
    let tempNumber = currentNumber;
    let temp = currentNumber;
    let sum = 0;

    while (tempNumber > 0) {
        tempNumber = (tempNumber - (tempNumber % 10)) / 10;
        numDigits++;
    }

    while (temp > 0) {
        let digit = temp % 10;
        let product = 1;

        for (let i = 0; i < numDigits; i++) {
            product *= digit;
        }

        sum += product;
        temp = (temp - digit) / 10;
    }

    if (sum == currentNumber) {
        // console.log(currentNumber);
        document.querySelector('.ans').innerHTML += `${currentNumber} <br>`;
    }
}

document.querySelector('.pr-8').innerHTML = 'Disarium number';