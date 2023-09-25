export function deleteSymbol(calculation, setNumber) {
    calculation.firstNumber = calculation.firstNumber.slice(0, -1);
    setNumber(calculation.firstNumber);
}

export function addSymbol(calculation, symbol, setNumber) {
    calculation.firstNumber += symbol;
    setNumber(calculation.firstNumber);
}

export function changeSign(calculation, setNumber) {
    if (calculation.firstNumber[0] === '-') {
        calculation.firstNumber = calculation.firstNumber.substring(1);
    } else {
        calculation.firstNumber = '-' + calculation.firstNumber;
    }
    setNumber(calculation.firstNumber);
}

export function factorial(calculation, setNumber){
    if (calculation.firstNumber[0] === '!') {
        setNumber(calculation.firstNumber = calculation.firstNumber.substring(1));
        calculation.operation = ""
    } else {
        setNumber('!' + calculation.firstNumber);
        calculation.operation = "!"
    }
}

export function makeNonIntegerNumber(calculation, setNumber) {
    let found = calculation.firstNumber.includes('.');
    if (!found) {
        calculation.firstNumber += '.';
    }
    setNumber(calculation.firstNumber);
}

export function choiceOperation(calculation, typeOperation, setNumber) {
    calculation.operation = typeOperation;
    calculation.secondNumber = calculation.firstNumber;
    calculation.firstNumber = "";
    console.log(calculation)
    setNumber(calculation.firstNumber);
}

export function calculate(calculation, setNumber) {
    const [url, requestOptions] = generateUrlAndRequestOptions(calculation); 
    console.log(calculation)
    fetch(url, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        setNumber(data);
        calculation.firstNumber = "";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function generateUrlAndRequestOptions(calculation) {
    let url;
    const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        }
    };
    switch (calculation.operation) {
        case "/":
            url = `https://localhost:7068/calculator/api/division/${calculation.secondNumber}/${calculation.firstNumber}`;
            break;
        case "*":
            url = `https://localhost:7068/calculator/api/multiplication/${calculation.secondNumber}/${calculation.firstNumber}`;
            break;
        case "-":
            url = `https://localhost:7068/calculator/api/difference/${calculation.secondNumber}/${calculation.firstNumber}`;
            break;
        case "+":
            url = `https://localhost:7068/calculator/api/sum/${calculation.secondNumber}/${calculation.firstNumber}`;
            break;
        case "!":
            url = `https://localhost:7068/calculator/api/factorial/${calculation.firstNumber}/`;
            break;
    }
    return [url, requestOptions];
}