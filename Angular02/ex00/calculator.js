function calculate() {
    var firstNumber = parseFloat(document.getElementById('firstNumber').value);
    var secondNumber = parseFloat(document.getElementById('secondNumber').value);
    var operator = document.getElementById('operator').value;
    var result;
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber))
    {
        console.log("Numbers are not Integers");
        document.getElementById('result').innerHTML = "Numbers are not Integers";
        return;
    }
    if (firstNumber < 0 || secondNumber < 0)
    {
        console.log("Negative numbers are not permitted");
        document.getElementById('result').innerHTML = "Negative numbers are not permitted";
        return;
    }
    switch(operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '/':
            if (secondNumber == 0) {
                console.log("Division by zero");
                document.getElementById('result').innerHTML = "Division by zero";
                var iframe = document.createElement('iframe');
                iframe.src = 'https://www.youtube.com/embed/T2U07KFqmew';
                iframe.width = '275';
                iframe.height = '250';
                document.getElementById('result').appendChild(iframe);
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
    document.getElementById('result').innerHTML = "Result: " + result;
}

function displayAlert() {
    alert("Please, use me...");
}

setInterval(displayAlert, 30000); // 30000 milliseconds = 30 seconds