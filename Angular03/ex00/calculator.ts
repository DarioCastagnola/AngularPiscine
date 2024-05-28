// Custom isInteger function
function isInteger(value: number): boolean {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculate(): void {
    const firstNumberInput = (document.getElementById('firstNumber') as HTMLInputElement).value;
    const secondNumberInput = (document.getElementById('secondNumber') as HTMLInputElement).value;
    const operator = (document.getElementById('operator') as HTMLSelectElement).value;

    let firstNumber: number = firstNumberInput ? parseFloat(firstNumberInput) : getRandomInt(1, 100);
    let secondNumber: number = secondNumberInput ? parseFloat(secondNumberInput) : getRandomInt(1, 100);

    let result: number | string;


    if (!isInteger(firstNumber) || !isInteger(secondNumber)) {
        console.log("Numbers are not Integers");
        (document.getElementById('result') as HTMLElement).innerHTML = "Numbers are not Integers";
        return;
    }

    else if (firstNumber < 0 || secondNumber < 0) {
        console.log("Negative numbers are not permitted");
        (document.getElementById('result') as HTMLElement).innerHTML = "Negative numbers are not permitted";
        return;
    }

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                console.log("Division by zero");
                (document.getElementById('result') as HTMLElement).innerHTML = "Division by zero";
                const iframe = document.createElement('iframe');
                iframe.src = 'https://www.youtube.com/embed/T2U07KFqmew';
                iframe.width = '275';
                iframe.height = '250';
                (document.getElementById('result') as HTMLElement).appendChild(iframe);
                return;
            }
            result = firstNumber / secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        default:
            result = "Invalid operator";
    }

    console.log(result);
    (document.getElementById('result') as HTMLElement).innerHTML = "Result: " + result;
}

function displayAlert(): void {
    alert("Please, use me...");
}

setInterval(displayAlert, 30000); // 30000 milliseconds = 30 seconds
